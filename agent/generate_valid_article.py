
with open("d:/agent/temp_valid_article.md", "w") as f:
    f.write("# Valid Article Title\n\n")
    f.write("## Introduction\n")
    f.write("This is a valid article.\n\n")
    f.write("## Key Takeaways\n")
    f.write("* Point 1\n* Point 2\n\n")
    
    f.write("## Body\n")
    # Generate 1000+ words
    for i in range(200):
        f.write("Word " * 6 + "\n")
        
    f.write("\n## Data Table\n")
    f.write("| Col 1 | Col 2 |\n")
    f.write("| --- | --- |\n")
    f.write("| Val 1 | Val 2 |\n\n")
    
    f.write("## Frequently Asked Questions\n")
    f.write("### Q1?\nAnswer.\n\n")
    
    f.write("## Conclusion\n")
    f.write("The end.\n")
