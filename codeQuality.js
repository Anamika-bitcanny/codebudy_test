// level 1:

async function getDaTA() {
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await res.json();}
catch(err){
    console.log(err);
}
    
  }
