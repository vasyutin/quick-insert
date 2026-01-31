// Popup menu script for Quick Insert extension
document.addEventListener('DOMContentLoaded', async () => {
   const menuItems = document.getElementById('menu-items');

   // Get settings from storage
   const result = await browser.storage.sync.get({
      strings: [],
      maxLength: 50
   });

   const strings = result.strings;
   const maxLength = result.maxLength;

   // Show message if no strings are saved
   if (strings.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.className = 'empty-message';
      emptyMessage.textContent = 'No saved text strings. Open settings to add some.';
      menuItems.appendChild(emptyMessage);
   }

   // Add strings to menu
   strings.forEach((text, index) => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';

      // Trim text to maximum display length
      const displayText = text.length > maxLength
         ? text.substring(0, maxLength) + '...'
         : text;

      menuItem.textContent = displayText;
      menuItem.title = text; // Full text in tooltip

      menuItem.addEventListener('click', () => {
         // Insert text into active input field
         browser.runtime.sendMessage({
            action: 'insertText',
            text: text
         });
         window.close();
      });

      menuItems.appendChild(menuItem);
   });

   // Add settings item
   const settingsItem = document.createElement('div');
   settingsItem.className = 'menu-item settings';
   settingsItem.textContent = '⚙  Settings...';
   settingsItem.addEventListener('click', () => {
      browser.runtime.openOptionsPage();
      window.close();
   });

   menuItems.appendChild(settingsItem);
});