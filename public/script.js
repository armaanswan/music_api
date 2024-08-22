document.getElementById('uploadSongForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target); // Get form data

    // Convert form data to JSON object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to server using fetch
    fetch('/song', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = `Success: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('response').innerText = `Error: ${error}`;
        });
});
