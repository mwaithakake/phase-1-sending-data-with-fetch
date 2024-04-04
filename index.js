// Add your code here
function submitData (name, email) {
const dataForm = {name, email}
    const configObj = {
        method : 'POST',
        headers : {
        "Content-Type": "application/json",
         "Accept": "application/json",
        } ,
        body : JSON.stringify(dataForm)
    }
     return fetch ("http://localhost:3000/users"  , configObj)
  .then(resp => resp.json())
  .then (data => {
    document.body.innerHTML += `<p>${data.id} </p>`;
  })
  .catch(error => {
     document.body.innerHTML += `<p>${error.message}</p>`;
  })
  
}