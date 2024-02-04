// ==UserScript==
// @name        MoX
// @namespace   Test
// @description TEST
// @version     1
// @grant       GM_xmlhttpRequest
// @run-at      document-start
// ==/UserScript==


(function() {
    'use strict';
  async function appendScriptFromGitHub() {
        try {
            // GitHub raw file URLs
            const scriptUrl = 'https://raw.githubusercontent.com/onango/mcrx/main/main.js'

            // Fetch the script content from the GitHub URLs
            const scriptResponse = await fetch(scriptUrl);

            // Check if the fetch was successful (status code 200)
            if (scriptResponse.ok) {
                // Get the script content as text
                const scriptContent = await scriptResponse.text();

                // Create script elements
                const scriptElement = document.createElement('script');
                // scriptElement.type = 'module';
                scriptElement.textContent = scriptContent;


                document.body.appendChild(scriptElement);


                console.log('Scripts from GitHub appended and executed successfully');
            } else {
                console.error('Failed to fetch script from GitHub:', scriptResponse.status, scriptResponse.statusText);
            }
        } catch (error) {
            console.error('Error appending script from GitHub:', error);
        }
    }

    // Call appendScriptFromGitHub on page load


    // Your custom JavaScript code goes here
    function main() {
        appendScriptFromGitHub();
        // Create a new script element
        const customScript = document.createElement('script');

        // Add your custom JavaScript code inside the script element
        customScript.textContent = `
            function setGame() {


               let betButton = document.querySelector('.btn-bet');
                console.log('here');
              // Check if the button is found
              if (betButton) {
                  // Trigger a click on the button
                  betButton.click();
              } else {
                  console.error('Button not found');
              }
            }

            // Call the function to execute the combined process
            setInterval(setGame, 2000); // 10000 milliseconds = 10 seconds

        `;

        // Append the script element to the document's body
        document.body.appendChild(customScript);
    }

    // Execute the main function when the document is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }
  // Use MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(appendScriptFromGitHub);
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    // Optionally, disconnect the observer when needed
   observer.disconnect();
})();
