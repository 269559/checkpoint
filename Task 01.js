async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Example usage:
  const valuesArray = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(valuesArray);
  