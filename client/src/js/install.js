const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior
    event.preventDefault();
    // Store the event for later use
    deferredPrompt = event;
    // Update UI to show install button or other UI element
    butInstall.style.display = 'block';
  });
  
  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        console.log('PWA installed');
      } else {
        console.log('PWA installation declined');
      }
      // Reset the deferredPrompt variable
      deferredPrompt = null;
      // Hide the install button or other UI element
      butInstall.style.display = 'none';
    }
  });
  
  // TODO: Add a handler for the `appinstalled` event
  window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed');
  });
  