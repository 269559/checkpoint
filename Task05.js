async function concurrentRequests() {
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(response => response.json())
      ]);
  
      console.log('Post:', postResponse);
      console.log('Comments:', commentsResponse);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage:
  concurrentRequests();
  