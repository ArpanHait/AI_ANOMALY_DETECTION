import os
import re

# Ensure inputs and outputs are within trusted locations
workspace_root = os.path.normcase(os.path.dirname(os.path.abspath(__file__)))

html_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\stitch_raw_html"
output_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\src\stitch_components"

abs_html_dir = os.path.normcase(os.path.abspath(html_dir))
abs_output_dir = os.path.normcase(os.path.abspath(output_dir))

if not abs_html_dir.startswith(workspace_root):
    raise ValueError(f"Security Alert: Input HTML directory {html_dir} must be within the workspace root {workspace_root}")

if not abs_output_dir.startswith(workspace_root):
    raise ValueError(f"Security Alert: Output JSX directory {output_dir} must be within the workspace root {workspace_root}")

os.makedirs(output_dir, exist_ok=True)

# Map from ID to React Component Name
components = {
    "36c2a1498b7542f391122a5a6c77961b": "AresLandingDark",
    "1c9666b6cb934efa807b34198a4a2ab9": "AresLandingLight",
    "80ca8b1f8abc43b99fccfdfa4739dd79": "DiagnosticsDark",
    "b9ac4ebff1354b01902dfa31ab14520b": "DashboardLight",
    "17167517808670960220": "DashboardDark",
    "0eb94db0975d4b72b1090c2a5fe1b58c": "DiagnosticsLight",
    "7165d3efe5374fa3ab78e3abbb9d3000": "TelemetryDark",
    "832fc4cc990a4890994c202c17bb8361": "SimulationDark",
    "d9dab79a62d446b0a4d7543f981ebb80": "TelemetryLight"
}

def sanitize_script_content(content: str) -> str:
    """Validate and sanitize JavaScript content inside script tags to prevent XSS.
    
    This function checks for dangerous patterns such as external network requests,
    eval, dynamic scripts, and access to sensitive browser storage/cookies.
    """
    dangerous_patterns = [
        (r'\beval\s*\(', "Usage of eval()"),
        (r'\bFunction\s*\(', "Usage of Function constructor"),
        (r'\bdocument\.write\b', "Usage of document.write"),
        (r'\bdocument\.cookie\b', "Access to document.cookie"),
        (r'\bwindow\.localStorage\b|\blocalStorage\b', "Access to localStorage"),
        (r'\bwindow\.sessionStorage\b|\bsessionStorage\b', "Access to sessionStorage"),
        (r'\bwindow\.indexedDB\b|\bindexedDB\b', "Access to indexedDB"),
        (r'\bXMLHttpRequest\b', "Usage of XMLHttpRequest"),
        (r'\bfetch\s*\(', "Usage of fetch()"),
        (r'\bWebSocket\b', "Usage of WebSockets"),
        (r'\.src\s*=\s*', "Modifying src dynamically"),
    ]

    for pattern, desc in dangerous_patterns:
        if re.search(pattern, content):
            raise ValueError(f"Security Alert: Dynamic / untrusted script content detected ({desc}). Refusing to convert to prevent XSS.")
    
    return content

def html_to_jsx(html):
    # Basic replacements
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    jsx = jsx.replace('fill-rule=', 'fillRule=')
    jsx = jsx.replace('clip-rule=', 'clipRule=')
    
    # Self close tags
    tags_to_close = ['img', 'input', 'br', 'hr', 'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'source']
    for tag in tags_to_close:
        # regex to find unclosed tags and close them
        jsx = re.sub(f'<{tag}([^>]*?)(?<!/)>', f'<{tag}\\1 />', jsx, flags=re.IGNORECASE)
    
    # Remove HTML comments
    jsx = re.sub(r'<!--(.*?)-->', '', jsx, flags=re.DOTALL)
    
    # Simple style attribute fix
    jsx = re.sub(r'style=(["\'])(.*?)\1', '', jsx)

    # Fix JSON braces inside <code> tags so JSX doesn't interpret them
    def fix_json_braces(match):
        code_tag = match.group(1)
        content = match.group(2)
        content = content.replace('{', '##LBRACE##').replace('}', '##RBRACE##')
        content = content.replace('##LBRACE##', '{"{"}').replace('##RBRACE##', '{"}"}')
        return '<code' + code_tag + '>' + content + '</code>'
    jsx = re.sub(r'<code([^>]*)>(.*?)</code>', fix_json_braces, jsx, flags=re.DOTALL | re.IGNORECASE)

    # Convert script tags to dangerouslySetInnerHTML, escaping backticks and ${
    def fix_script(match):
        content = match.group(1)
        # Sanitize JavaScript content to prevent XSS
        content = sanitize_script_content(content)
        content = content.replace('`', r'\`').replace('${', r'\${')
        return '<script dangerouslySetInnerHTML={{ __html: `' + content + '` }} />'
    jsx = re.sub(r'<script>(.*?)</script>', fix_script, jsx, flags=re.DOTALL | re.IGNORECASE)

    # Fix the double closing tags caused by self-closing regex
    jsx = re.sub(r'/>\s*</(rect|line|path|circle|polygon|polyline|source|img|input|br|hr)>', '/>', jsx, flags=re.IGNORECASE)
    # Fix the linearGradient self-closing issue
    jsx = re.sub(r'<linearGradient([^>]*?)\s*/>', r'<linearGradient\1>', jsx, flags=re.IGNORECASE)

    # Suppress hydration warning on canvas elements modified by immediate scripts
    jsx = re.sub(r'<canvas\b([^>]*)>', r'<canvas suppressHydrationWarning\1>', jsx, flags=re.IGNORECASE)

    # Convert a tags to Next.js Link components
    def fix_anchor(match):
        attrs = match.group(1)
        content = match.group(2)
        
        # Determine the target URL based on text content
        text_lower = content.lower()
        pure_text = re.sub(r'<[^>]*>', '', text_lower).strip()
        
        target_href = "#"
        if "overview" in pure_text or "dashboard" in pure_text:
            target_href = "/dashboard"
        elif "telemetry" in pure_text:
            target_href = "/telemetry"
        elif "diagnostics" in pure_text:
            target_href = "/diagnostics"
        elif "simulation" in pure_text:
            target_href = "/simulation-lab"
        elif "maintenance" in pure_text:
            target_href = "/maintenance-hub"
        elif any(kw in pure_text for kw in ["launch", "enter", "get started"]):
            target_href = "/dashboard"
        else:
            href_match = re.search(r'href=["\'](.*?)["\']', attrs)
            if href_match:
                orig_href = href_match.group(1)
                if orig_href and orig_href != "#":
                    target_href = orig_href
        
        # Clean existing href and insert the correct target_href
        attrs_clean = re.sub(r'\bhref=["\'].*?["\']', '', attrs).strip()
        new_attrs = f'href="{target_href}"'
        if attrs_clean:
            new_attrs = f'{new_attrs} {attrs_clean}'
            
        return f'<Link {new_attrs}>{content}</Link>'

    jsx = re.sub(r'<a\b([^>]*)>(.*?)</a>', fix_anchor, jsx, flags=re.DOTALL | re.IGNORECASE)
    
    return jsx

for file_id, comp_name in components.items():
    # Construct path and ensure no traversal exists
    html_file = os.path.abspath(os.path.join(html_dir, f"{file_id}.html"))
    if not os.path.normcase(html_file).startswith(abs_html_dir):
        raise ValueError(f"Security Alert: Directory traversal attempt detected in file ID {file_id}")

    if not os.path.exists(html_file):
        print(f"Skipping {html_file}, not found.")
        continue

    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        print(f"Could not find body tag in {html_file}")
        continue
    
    body_content = body_match.group(1)

    print(f"Converting {comp_name} to JSX...")
    jsx_content = html_to_jsx(body_content)

    # Create TSX file
    tsx_code = f'''"use client";
import React, {{ useEffect, useRef }} from "react";
import Link from "next/link";
import {{ useAppContext }} from "@/components/AppContext";

export default function {comp_name}() {{
  const {{ isAbnormal, setIsAbnormal, theme, setTheme }} = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {{
    if (!containerRef.current) return;
    
    // Find Theme Toggle
    const themeBtn = Array.from(containerRef.current.querySelectorAll('button')).find(b => b.textContent?.includes('mode') || b.textContent?.includes('Mode'));
    if (themeBtn) {{
        themeBtn.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    }}

    // Find ABNORMAL button and attach onClick
    const buttons = containerRef.current.querySelectorAll('button');
    buttons.forEach(btn => {{
      if (btn.textContent?.includes('ABNORMAL') || btn.textContent?.includes('TRIGGER')) {{
        btn.onclick = () => setIsAbnormal(!isAbnormal);
        // Modify button style if NORMAL
        if (!isAbnormal) {{
           btn.className = btn.className.replace('bg-error/20', 'bg-surface-bright').replace('text-error', 'text-on-surface').replace('border-error/50', 'border-outline-variant');
           btn.innerHTML = btn.innerHTML.replace('ABNORMAL', 'NORMAL').replace('RESTORE', 'TRIGGER');
        }} else {{
           btn.className = btn.className.replace('bg-surface-bright', 'bg-error/20').replace('text-on-surface', 'text-error').replace('border-outline-variant', 'border-error/50');
           btn.innerHTML = btn.innerHTML.replace('NORMAL', 'ABNORMAL').replace('TRIGGER', 'RESTORE');
        }}
      }}
    }});

    // Toggle CRIT / WARN badges
    const crits = containerRef.current.querySelectorAll('.bg-error-container\\\\/30, .bg-primary-container\\\\/10');
    crits.forEach(el => {{
      if (!isAbnormal) {{
        el.className = el.className.replace('bg-error-container/30', 'bg-primary-container/10').replace('text-error', 'text-primary-container').replace('border-error/50', 'border-primary-container/20');
        if (el.textContent === 'CRIT') el.textContent = 'NORMAL';
      }} else {{
        el.className = el.className.replace('bg-primary-container/10', 'bg-error-container/30').replace('text-primary-container', 'text-error').replace('border-primary-container/20', 'border-error/50');
        if (el.textContent === 'NORMAL') el.textContent = 'CRIT';
      }}
    }});

    const warns = containerRef.current.querySelectorAll('.bg-secondary-container\\\\/30, .bg-primary-container\\\\/10');
    warns.forEach(el => {{
      if (el.textContent === 'WARN' || (el.getAttribute('data-orig') === 'WARN')) {{
          el.setAttribute('data-orig', 'WARN');
          if (!isAbnormal) {{
            el.className = el.className.replace('bg-secondary-container/30', 'bg-primary-container/10').replace('text-secondary', 'text-primary-container').replace('border-secondary/50', 'border-primary-container/20');
            el.textContent = 'NORMAL';
          }} else {{
            el.className = el.className.replace('bg-primary-container/10', 'bg-secondary-container/30').replace('text-primary-container', 'text-secondary').replace('border-primary-container/20', 'border-secondary/50');
            el.textContent = 'WARN';
          }}
      }}
    }});
      
    // Remove pulsing glows
    const glows = containerRef.current.querySelectorAll('.animate-pulse');
    glows.forEach(el => {{
      if (!el.className.includes('w-2 h-2')) {{ // Keep the system online indicator
         if (!isAbnormal) {{
            el.classList.add('opacity-0');
         }} else {{
            el.classList.remove('opacity-0');
         }}
      }}
    }});

    // Sidebar routing is handled statically via Next.js Link components

  }}, [isAbnormal, setIsAbnormal, theme, setTheme]);

  return (
    <div ref={{containerRef}} className="w-full h-full">
      {jsx_content}
    </div>
  );
}}
'''
    
    tsx_file = os.path.join(output_dir, f"{comp_name}.tsx")
    with open(tsx_file, 'w', encoding='utf-8') as f:
        f.write(tsx_code)

print("Conversion complete.")
