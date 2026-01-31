// Settings page script for Quick Insert extension
document.addEventListener('DOMContentLoaded', async () => {
   const newStringTextarea = document.getElementById('new-string');
   const addStringButton = document.getElementById('add-string');
   const maxLengthInput = document.getElementById('max-length');
   const lengthPreview = document.getElementById('length-preview');
   const stringsList = document.getElementById('strings-list');
   const saveButton = document.getElementById('save');
   const resetButton = document.getElementById('reset');
   const importButton = document.getElementById('import');
   const exportButton = document.getElementById('export');

   let strings = [];
   let maxLength = 50;

   // Load saved settings from storage
   async function loadSettings() {
      const result = await browser.storage.sync.get({
         strings: [],
         maxLength: 50
      });

      strings = result.strings;
      maxLength = result.maxLength;

      maxLengthInput.value = maxLength;
      updateLengthPreview();
      renderStringsList();
   }

   // Update length preview example
   function updateLengthPreview() {
      const exampleText = 'Example string to demonstrate text truncation in the menu';
      const previewText = exampleText.length > maxLength
         ? exampleText.substring(0, maxLength) + '...'
         : exampleText;
      lengthPreview.textContent = previewText;
   }

   // Render the list of saved strings
   function renderStringsList() {
      stringsList.innerHTML = '';

      if (strings.length === 0) {
         stringsList.innerHTML = '<p>No saved strings</p>';
         return;
      }

      strings.forEach((text, index) => {
         const item = document.createElement('div');
         item.className = 'string-item';

         const textSpan = document.createElement('span');
         textSpan.className = 'string-text';
         textSpan.textContent = text.length > 100
            ? text.substring(0, 100) + '...'
            : text;
         textSpan.title = text;

         const deleteButton = document.createElement('button');
         deleteButton.textContent = 'Delete';
         deleteButton.className = 'button button-danger';
         deleteButton.style.marginLeft = '10px';
         deleteButton.addEventListener('click', () => {
            strings.splice(index, 1);
            renderStringsList();
         });

         item.appendChild(textSpan);
         item.appendChild(deleteButton);
         stringsList.appendChild(item);
      });
   }

   // Add new string to the list
   addStringButton.addEventListener('click', () => {
      const text = newStringTextarea.value.trim();
      if (text) {
         strings.push(text);
         newStringTextarea.value = '';
         renderStringsList();
      }
   });

   // Update preview when max length changes
   maxLengthInput.addEventListener('input', () => {
      maxLength = parseInt(maxLengthInput.value) || 50;
      updateLengthPreview();
   });

   // Save settings to storage
   saveButton.addEventListener('click', async () => {
      await browser.storage.sync.set({
         strings: strings,
         maxLength: maxLength
      });

      alert('Settings saved successfully!');
   });

   // Reset all settings
   resetButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all settings?')) {
         strings = [];
         maxLength = 50;
         maxLengthInput.value = maxLength;
         updateLengthPreview();
         renderStringsList();
      }
   });

   // Export settings to JSON file
   exportButton.addEventListener('click', () => {
      const data = {
         strings: strings,
         maxLength: maxLength,
         exportDate: new Date().toISOString()
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'quick-paste-settings.json';
      a.click();

      URL.revokeObjectURL(url);
   });

   // Import settings from JSON file
   importButton.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';

      input.addEventListener('change', async (event) => {
         const file = event.target.files[0];
         if (!file) return;

         try {
            const text = await file.text();
            const data = JSON.parse(text);

            if (data.strings && Array.isArray(data.strings)) {
               strings = data.strings;
               maxLength = data.maxLength || 50;
               maxLengthInput.value = maxLength;
               updateLengthPreview();
               renderStringsList();
               alert('Settings imported successfully!');
            } else {
               alert('Invalid file format');
            }
         } catch (error) {
            alert('Error reading file: ' + error.message);
         }
      });

      input.click();
   });

   // Load settings when page starts
   loadSettings();
});