    fetch('./data.json') // Path to your JSON file
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Work with the JSON data here
        console.log(data);
        document.getElementById('output').innerText = `Name: ${data.name}, Age: ${data.age}`;
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
