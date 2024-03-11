async function firstAsyncFunction() {
    console.log('First function');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  async function secondAsyncFunction() {
    console.log('Second function');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  async function thirdAsyncFunction() {
    console.log('Third function');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
  }
  
  // Example usage:
  chainedAsyncFunctions();
  