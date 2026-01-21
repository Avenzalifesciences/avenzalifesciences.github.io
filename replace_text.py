import os

# Configuration: Change these as needed
SEARCH_TEXT = 'Welcome To Action Australian Clinical'
REPLACE_TEXT = 'Welcome to Avenza Life Sciences'
FILE_EXTENSION = '.html'

def bulk_replace(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(FILE_EXTENSION):
                file_path = os.path.join(root, file)
                
                # Read the file content
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Perform the replacement
                if SEARCH_TEXT in content:
                    new_content = content.replace(SEARCH_TEXT, REPLACE_TEXT)
                    
                    # Write the changes back
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"Successfully updated: {file_path}")

if __name__ == "__main__":
    # '.' means start in the current folder
    bulk_replace('.')
    print("\nProcess complete.")