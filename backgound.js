chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startScraping') {
      const { links } = message;
      openProfilesSequentially(links);
      sendResponse({ status: 'success' });
    }
  });
  
  function openProfilesSequentially(links) {
    let index = 0;
  
    const interval = setInterval(() => {
      if (index >= links.length) {
        clearInterval(interval);
        console.log('All profiles have been opened.');
        return;
      }
  
      const link = links[index];
      console.log('Opening profile: ${link}');
  
      // Open each profile in a new tab
      chrome.tabs.create({ url: link, active: false }, (tab) => {
        // Inject content script to scrape data after opening the profile
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            function: scrapeProfileData,
          },
          (results) => {
            if (chrome.runtime.lastError) {
              console.error('Script injection failed:', chrome.runtime.lastError.message);
            } else {
              console.log('Data scraped successfully:', results[0].result);
            }
          }
        );
      });
  
      index++;
    });
  }
  
  // Content script function to scrape profile data
  function scrapeProfileData() {
    try {
      const name = document.querySelector('.text-heading-xlarge')?.innerText || '';
      const location = document.querySelector('.text-body-small')?.innerText || '';
      const about = document.querySelector('.pv-about-section')?.innerText || '';
      const bio = document.querySelector('.text-body-medium')?.innerText || '';
      const followerCount = parseInt(document.querySelector('.t-16.t-black.t-bold')?.innerText.match(/\d+/)?.[0]) || 0;
      const connectionCount = parseInt(document.querySelector('.t-14.t-black--light')?.innerText.match(/\d+/)?.[0]) || 0;
  
      const profileData = {
        name,
        url: window.location.href,
        about,
        bio,
        location,
        followerCount,
        connectionCount,
      };
  
      console.log('Scraped Data:', profileData);
  
      // Send the data to the backend API
      fetch('http://localhost:5000/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })
        .then((response) => response.json())
        .then((data) => console.log('Profile saved:', data))
        .catch((error) => console.error('Error saving profile:', error));
    } catch (error) {
      console.error('Error scraping profile:', error);
    }
  }
  
