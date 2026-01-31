# Quick Insert Extension - User Guide

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Using the Extension](#using-the-extension)
5. [Managing Text Strings](#managing-text-snippets)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)
8. [Tips & Tricks](#tips--tricks)
9. [FAQs](#faqs)
10. [Support](#support)

## Overview

**Quick Insert** is a Firefox browser extension that allows you to quickly insert frequently used text snippets into any input field with just a few clicks. Perfect for developers, customer support agents, writers, or anyone who frequently types repetitive text.

### Key Features
- Quick access to saved text snippets
- One-click insertion into any input field
- Smart text truncation for better menu readability
- Easy text snippet management
- Import/export functionality for backup and sharing
- Works with all input types (text fields, textareas, contenteditable elements)

## Installation

### Method 1: From Firefox Add-ons Store (Recommended)
1. Visit the Firefox Add-ons Store
2. Search for "Quick Insert"
3. Click "Add to Firefox"
4. Click "Add" in the confirmation dialog

### Method 2: Manual Installation from XPI File
1. Download the `quick-paste.xpi` file
2. Open Firefox
3. Go to `about:addons`
4. Click the gear icon → "Install Add-on From File"
5. Select the downloaded XPI file
6. Click "Add"

### Method 3: Temporary Installation (Development)
1. Go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file from the extension folder

## Quick Start

### Step 1: Access the Extension
1. Click the Quick Insert icon in your Firefox toolbar
2. The extension menu will open showing your saved snippets

### Step 2: Add Your First Snippet
1. Click the extension icon
2. Click "Settings..." at the bottom of the menu
3. In the "New Text String" textarea, type your frequently used text
4. Click "Add String"
5. Click "Save Settings"

### Step 3: Use Your Snippet
1. Click on any input field (text box, textarea, etc.)
2. Click the Quick Insert extension icon
3. Click on your saved snippet
4. The text will be instantly inserted at the cursor position

## Using the Extension

### Basic Usage
1. **Focus on an input field** - Click any text input, textarea, or editable content area
2. **Open Quick Insert** - Click the extension icon in the toolbar
3. **Select a snippet** - Click on the text string you want to insert
4. **Text is inserted** - The selected text appears at your cursor position

### The Popup Menu
The extension menu shows:
- **Saved snippets** - Your frequently used text strings (truncated if too long)
- **Settings button** - Access configuration options (bottom of menu)
- **Empty state** - "No saved strings" message when you first install

### Menu Display Options
- Snippets are automatically truncated based on your "Maximum Display Length" setting
- Hover over any truncated snippet to see the full text in a tooltip
- New snippets appear at the bottom of the list (in order of creation)

## Managing Text Snippets

### Adding New Snippets
1. Click the extension icon → "Settings..."
2. In the "New Text String" textarea, type or paste your text
3. Click "Add String"
4. The new snippet appears in the "Saved Strings" list
5. Click "Save Settings" to persist changes

### Editing Snippets
**Note:** Currently, snippets cannot be edited directly. Use this workaround:
1. Find the snippet in the "Saved Strings" list
2. Click "Delete" to remove it
3. Recreate it with modifications in the "New Text String" field
4. Click "Add String" → "Save Settings"

### Deleting Snippets
1. Go to Settings
2. Find the snippet in the "Saved Strings" list
3. Click the "Delete" button next to it
4. Click "Save Settings"

### Organizing Snippets
For better organization:
- **Use descriptive snippets** - Make them easy to identify
- **Add prefixes** - Like "[Email] Common response" or "[Code] HTML template"
- **Group similar snippets** - Keep related snippets together visually

## Advanced Features

### Customizing Display Length
Control how snippets appear in the menu:
1. Go to Settings
2. Find "Maximum Display Length in Menu"
3. Set a value between 10-200 characters
4. Preview shows how snippets will appear
5. Click "Save Settings"

**Example:**
- Setting: 50 characters
- Actual snippet: "Dear Customer, Thank you for contacting our support team..."
- Menu display: "Dear Customer, Thank you for contacting our supp..."

### Import/Export Functionality

#### Exporting Your Snippets
1. Go to Settings
2. Click the "Export" button
3. A JSON file (`quick-paste-settings.json`) downloads automatically
4. This file contains all your snippets and settings

#### Importing Snippets
1. Go to Settings
2. Click the "Import" button
3. Select a previously exported JSON file
4. All snippets and settings are loaded
5. Click "Save Settings" to confirm

**Use Cases:**
- **Backup** - Regular exports prevent data loss
- **Transfer** - Move snippets between browsers/computers
- **Sharing** - Share useful snippet collections with colleagues

### Resetting All Data
If you want to start fresh:
1. Go to Settings
2. Click "Reset All"
3. Confirm the action
4. All snippets and custom settings are removed
5. Default settings are restored

## Troubleshooting

### Common Issues and Solutions

#### Problem: Extension icon doesn't appear
**Solution:**
1. Right-click the toolbar → "Customize Toolbar"
2. Drag the Quick Insert icon to your toolbar
3. If still missing, restart Firefox

#### Problem: Snippets won't insert
**Solution:**
1. Ensure you've focused on an input field first
2. Check if the field accepts text (some are read-only)
3. Try a different website (some sites block script insertion)

#### Problem: Menu shows "No saved strings"
**Solution:**
1. Go to Settings and add some snippets
2. Click "Save Settings"
3. Close and reopen the extension menu

#### Problem: Text appears garbled or incomplete
**Solution:**
1. Check if your snippet contains special characters
2. Try simpler text first
3. Reduce the snippet length if very long

#### Problem: Settings won't save
**Solution:**
1. Ensure you're using a supported Firefox version (60+)
2. Check browser storage permissions
3. Try closing and reopening Settings

### Error Messages

**"Please focus on an input field before pasting text."**
- **Cause**: You clicked a snippet without first clicking an input field
- **Fix**: Click inside a text box, textarea, or editable area first

**"Invalid file format"** (during import)
- **Cause**: The imported file isn't a valid Quick Insert export
- **Fix**: Use only files exported from Quick Insert

**Script errors in console**
- **Cause**: Website security policies or conflicts
- **Fix**: Try on a different website or report the issue

## Tips & Tricks

### Productivity Boosters
1. **Keyboard shortcut**: Press Alt+Shift+E to open extensions menu, then navigate to Quick Insert
2. **Common uses**: Email templates, code snippets, addresses, phone numbers, support responses
3. **Quick edits**: Keep a text file of your snippets for easy bulk editing before importing

### Best Practices
1. **Start simple**: Add your 5 most-used snippets first
2. **Use categories**: Prefix snippets with [Work], [Personal], [Code], etc.
3. **Regular cleanup**: Remove unused snippets monthly
4. **Backup regularly**: Export your snippets after adding important ones

### Creative Uses
- **Customer support**: Standard responses to common questions
- **Programming**: Code templates, function signatures, regex patterns
- **Writing**: Email signatures, document templates, formatting snippets
- **Data entry**: Standard addresses, phone formats, part numbers
- **Gaming**: Common chat messages, commands, coordinates

## FAQs

### Q: Is Quick Insert free?
**A**: Yes, completely free and open source.

### Q: Does it work in private browsing mode?
**A**: Yes, but you need to enable it in Firefox settings:
1. Go to `about:addons`
2. Find Quick Insert
3. Click "Permissions"
4. Check "Run in Private Windows"

### Q: Are my snippets synchronized across devices?
**A**: Yes, if you use Firefox Sync. The extension uses Firefox's synchronized storage.

### Q: Can I use it with keyboard shortcuts?
**A**: While there's no direct shortcut for specific snippets, you can:
1. Press Alt+Shift+E to open extensions
2. Use arrow keys to navigate to Quick Insert
3. Press Enter and select snippets with arrow keys

### Q: Is there a limit to snippet length?
**A**: Technically no, but very long snippets may affect performance. Keep under 10,000 characters for best results.

### Q: Can I organize snippets into folders/categories?
**A**: Not currently, but you can use prefixes like "[Work]" or "[Code]" to simulate categories.

### Q: Does it work with password fields?
**A**: No, for security reasons, password fields cannot be modified by extensions.

## Support

### Getting Help
1. **Check this guide** - Most questions are answered here
2. **Extension settings** - Click "Settings..." for configuration options
3. **Firefox support** - Some issues may be browser-related

### Reporting Issues
If you encounter a bug:
1. Note the exact steps to reproduce
2. Check if it happens on all websites or just one
3. Try the latest version of the extension
4. Report to the developer with:
   - Firefox version
   - Extension version
   - Steps to reproduce
   - Expected vs. actual behavior

### Feature Requests
Want to suggest an improvement?
1. Think about your specific use case
2. Consider if it benefits most users
3. Contact the developer with:
   - The problem you're solving
   - Your proposed solution
   - Why it would be useful

### Version History
**Version 1.0.0** (Current)
- Initial release
- Basic snippet management
- Import/export functionality
- Customizable display length

**Planned Features:**
- Snippet editing
- Categories/folders
- Keyboard shortcuts
- Search in menu
- Syntax highlighting for code snippets

---

## Quick Reference Card

### Essential Commands
| Action | Steps |
|--------|-------|
| Add snippet | Settings → Type text → Add String → Save Settings |
| Use snippet | Focus field → Click extension → Click snippet |
| Delete snippet | Settings → Find snippet → Delete → Save Settings |
| Export data | Settings → Export → Save file |
| Import data | Settings → Import → Select file → Save Settings |

### Recommended Settings
- **Display length**: 50-80 characters (balance visibility vs. space)
- **Backup frequency**: Weekly for active users
- **Snippet count**: 10-30 for optimal usability
- **Naming convention**: Use [Category] Description format

### Keyboard Navigation in Menu
1. Open extension (Alt+Shift+E, navigate to Quick Insert)
2. Use ↑/↓ arrows to select snippet
3. Press Enter to insert
4. Press Tab to navigate to Settings
5. Press Enter to open Settings

