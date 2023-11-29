const fs=require('fs');

fs.readFile('json.txt', 'utf8', async (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
     const reqData=[
      { "username": 'Amulya', "no_of_posts": 1 },
      { "username": 'Kala', "no_of_posts": 1 },
      { "username": 'Vishnavi', "no_of_posts": 1 },
      { "username": 'lalitha', "no_of_posts": 1 }
    ]
    Object.assign(JSON.parse(data),(reqData))
   fs.writeFile("json.txt",JSON.stringify(reqData,null,2),'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to the file:', writeErr);
      return;
    }
    console.log("data added succefully")
  })
  });

function getPosts(){
return fetch('https://expressfile-js.onrender.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
}

getPosts()
