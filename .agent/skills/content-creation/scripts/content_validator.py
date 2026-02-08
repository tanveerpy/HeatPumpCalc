#!/usr/bin/env python3
import sys
import re
from pathlib import Path

def print_error(msg):
    print(f"\033[91m❌ {msg}\033[0m")

def print_success(msg):
    print(f"\033[92m✅ {msg}\033[0m")

def print_warning(msg):
    print(f"\033[93m⚠️  {msg}\033[0m")

def count_words(text):
    # Remove code blocks and Frontmatter for word count
    text = re.sub(r'---[\s\S]*?---', '', text, count=1) # Frontmatter
    text = re.sub(r'```[\s\S]*?```', '', text) # Code blocks
    # Simple whitespace split
    return len(text.split())

def validate_content(file_path):
    path = Path(file_path)
    if not path.exists():
        print_error(f"File not found: {file_path}")
        return False

    content = path.read_text(encoding='utf-8')
    
    errors = 0
    warnings = 0

    print(f"🔍 Validating: {path.name}")
    print("-" * 40)

    # 1. Word Count Check
    word_count = count_words(content)
    if word_count < 1000:
        print_error(f"Word Count: {word_count} (Minimum 1000 required)")
        errors += 1
    else:
        print_success(f"Word Count: {word_count}")

    # 2. Key Elements Check
    checks = {
        "Key Takeaways": [r'key\s*takeaways', r'quick\s*summary'],
        "FAQ Section": [r'##\s*faq', r'##\s*frequently\s*asked'],
        "Conclusion": [r'##\s*conclusion', r'##\s*wrapping\s*up', r'##\s*summary'],
        "Markdown Table": [r'\|.*\|.*\|', r'\|-+\|-+\|'] # Crude table check
    }

    for name, patterns in checks.items():
        found = False
        for pattern in patterns:
            if re.search(pattern, content, re.IGNORECASE):
                found = True
                break
        
        if found:
            print_success(f"Found: {name}")
        else:
            if name == "Markdown Table":
                print_warning(f"Missing: {name} (Highly recommended for 2026 standards)")
                warnings += 1
            else:
                print_error(f"Missing: {name}")
                errors += 1

    # 3. Structure Check
    h1_count = len(re.findall(r'^#\s+', content, re.MULTILINE))
    if h1_count > 1:
        print_error(f"H1 Tags: {h1_count} (Should have exactly one H1)")
        errors += 1
    elif h1_count == 0:
        print_error("H1 Tags: 0 (Must have a Title)")
        errors += 1
    else:
        print_success("H1 Tags: 1")

    print("-" * 40)
    if errors > 0:
        print_error(f"Validation FAILED with {errors} errors.")
        return False
    else:
        print_success("Validation PASSED")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: content_validator.py <file_path>")
        sys.exit(1)
    
    success = validate_content(sys.argv[1])
    sys.exit(0 if success else 1)
