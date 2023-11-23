// const  endpoint =  https://run.mocky.io/v3/db7714b9-4225-4441-8688-a30661ffa83c"

// const { Input } = require("postcss")

// fetch("https://run.mocky.io/v3/db7714b9-4225-4441-8688-a30661ffa83c",{
//     method : 'Post',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         Username:'Andika',
//         job:'andika',
//         Email:'dasdasd@gmail.com'
//     })
// })
// .then((data) => data.json())
// .then((result)  => console.log(result))

let data = {
    "data": [
        {
          "id": 1,
          "username": "kalekauser",
          "email": "info.noreply@kaleka.id"
        },
        {
          "id": 2,
          "username": "reactjsuser",
          "email": "user4@test.id"
        },
        {
          "id": 3,
          "username": "testkaleka",
          "email": "user1@kaleka.id"
        },
        {
          "id": 4,
          "username": "johndoe",
          "email": "user5@gmail.com"
        }
      ],
      "count": 4
    }
    
    function tambah() {
    }
    let id =null
    const Input =(id,type='text',label='',placeholder='')=> {
        return`
        <label>${label}</label><br?
        Input type="${type}" id="${id}" placeholder="${placeholder}"><br>
        `
    }  
  document.getElementById('hasil')
  document.body.innerHTML +=Input('Username','Email')
  document.body.innerHTML=window.prompt('Masukan Username  dan Email')
  