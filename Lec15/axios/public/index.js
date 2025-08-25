//axios ek third party library hai jo HTTP requests ko asan banati hai


async function getComment(URL){
  //how to set get request using axios
//   axios.get(URL)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
try {
    let comments = await axios.get(URL);
    console.log(comments);
}catch (err) {  
    console.log(err);
}
}

getComment('https://jsonplaceholder.typicode.com/comments/');

addBlog('http://localhost:3000/blog', 'My First Blog', 'This is the description of my first blog');
 async function addBlog(URL, title, description) {
  try {
  let newBlog = {
    title: title, 
    description: description
  };
  let response = await axios.post(URL, newBlog)
  console.log(response);
  } catch (err) {
    console.log(err);
  }
   
  
}