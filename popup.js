document.getElementById('start').addEventListener('click', () => {
    const links = document.getElementById('links').value.trim().split(',').map(link => link.trim());
  
    if (links.length === 0 || !links[0]) {
      alert('Please enter at least one LinkedIn profile link.');
      return;
    }
  
    // Send message to background.js with links
    chrome.runtime.sendMessage({ action: 'startScraping', links }, (response) => {
      if (response?.status === 'success') {
        console.log('Scraping started!');
      } else {
        console.error('Failed to start scraping:', response?.error);
      }
    });
  });
  