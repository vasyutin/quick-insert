// Background service for text insertion functionality
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
   if (message.action === 'insertText') {
      // Execute script in active tab
      browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
         if (tabs[0] && tabs[0].id) {
            // Clean and escape the text
            const escapedText = message.text
               .replace(/\\/g, '\\\\')  // Escape backslashes first
               .replace(/`/g, '\\`')    // Escape backticks
               .replace(/\$/g, '\\$');  // Escape dollar signs

            browser.tabs.executeScript(tabs[0].id, {
               code: `
            try {
              var activeEl = document.activeElement;
              if (activeEl && (activeEl.tagName === 'INPUT' || 
                               activeEl.tagName === 'TEXTAREA' || 
                               activeEl.isContentEditable)) {
                
                var text = \`${escapedText}\`;
                
                // Try execCommand first
                try {
                  document.execCommand('insertText', false, text);
                } catch (cmdError) {
                  // Manual insertion for text inputs
                  if (activeEl.value !== undefined) {
                    var start = activeEl.selectionStart;
                    var end = activeEl.selectionEnd;
                    activeEl.value = activeEl.value.substring(0, start) + 
                                   text + 
                                   activeEl.value.substring(end);
                    activeEl.selectionStart = activeEl.selectionEnd = start + text.length;
                  }
                  // Manual insertion for contenteditable
                  else if (activeEl.isContentEditable) {
                    var sel = window.getSelection();
                    if (sel.rangeCount > 0) {
                      var range = sel.getRangeAt(0);
                      range.deleteContents();
                      var textNode = document.createTextNode(text);
                      range.insertNode(textNode);
                      range.setStartAfter(textNode);
                      range.setEndAfter(textNode);
                      sel.removeAllRanges();
                      sel.addRange(range);
                    }
                  }
                }
                
                // Trigger events
                activeEl.dispatchEvent(new Event('input', { bubbles: true }));
                activeEl.dispatchEvent(new Event('change', { bubbles: true }));
              } else {
                alert('Please focus on an input field before inserting text.');
              }
            } catch (error) {
              console.error('Insert error:', error);
            }
          `
            }).catch(error => {
               console.error('Error executing script:', error);
            });
         }
      });
   }

   return true; // Keep message channel open for async response
});