// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'
import { isValidUrl } from './urlChecker'; 

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    checkForName(formText);
    
    // Check if the URL is valid
    if (!isValidUrl(url)) {
        alert('Please enter a valid URL');
        return;
    }
        // If the URL is valid, send it to the server using the serverURL constant above
        try {
            const response = await fetch(`${serverURL}/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
    
            const data = await response.json();
    
            if (data.error) {
                alert(`Error: ${data.error}`);
                return;
            }
    
            // Update the UI with the API response
            document.getElementById('sentiment').innerText = `Sentiment: ${data.sentiment}`;
            document.getElementById('contentType').innerText = `Content Type: ${data.contentType}`;
            document.getElementById('preview').innerText = `Input Text Preview: "${data.inputPreview}"`;
    
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch analysis');
        }
      
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

