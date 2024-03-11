async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(
        urls.map(url => fetch(url).then(response => response.json()))
      );
  
      console.log('Responses:', responses);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage:
  const urlsArray = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/posts/1'
  ];
  parallelCalls(urlsArray);
  