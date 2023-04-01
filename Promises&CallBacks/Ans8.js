    fetch('https://jsonplaceholder.typicode.com/posts');
    .then(response => response.json());
    .then(data => console.window(data));
    .catch(error => console.error(error));

    // To run this program, simply paste it into your JavaScript 
    // console or run it as a script in an HTML document. The 
    // program will send the request to the API and log the 
    // response data to the console when it's available.
