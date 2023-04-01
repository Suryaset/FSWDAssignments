async function fetchCombinedData() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);
    const [todoData, postData] = await Promise.all([
      todoResponse.json(),
      postResponse.json()
    ]);
    const combinedData = {
      todo: todoData,
      post: postData
    };
    console.log(combinedData);
  } catch (error) {
    console.error(error);
  }
}
fetchCombinedData();