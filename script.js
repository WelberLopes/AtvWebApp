fetch('http://minha-api-rest:3000/api/data') //
    .then(response => response.json())
    .then(data => {
        document.getElementById('api-data').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('api-data').innerText = 'Failed to fetch data.';
    });