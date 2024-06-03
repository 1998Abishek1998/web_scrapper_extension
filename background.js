chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchData") {
    console.log("Sending POST data:", request.data);
    fetch('http://localhost:8001/api/postData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: request.data })
    })
      .then(response => response.json())
      .then(data => {
        console.log('POST request successful, received response:', data);
        sendResponse({ data: data });
      })
      .catch(error => {
        console.error('POST request error:', error);
        sendResponse({ error: 'Error while sending POST data to server.' });
      });
    return true;
  }
});
