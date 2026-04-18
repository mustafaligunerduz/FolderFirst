# FolderFirst 📁

A simple Node.js tool that organizes files and folders in a directory by separating and randomly ordering them.

## 🚀 What it does

FolderFirst scans a directory and:

- 📁 Moves all folders to the top section (in random order)
- 📄 Moves all files to the bottom section (in random order)
- 🔀 Renames items with an index prefix to enforce ordering

> Note: File explorers do not guarantee custom ordering, so this tool uses name-based sorting (prefixing).

---

## ⚙️ How it works

1. Reads all items in a folder
2. Separates folders and files
3. Randomly shuffles both groups
4. Renames items with index prefixes:
