const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
const json = await response.json();

console.log(json);


// Make sure we're a module
export {};
