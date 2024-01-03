//Dom selection

const ul = document.querySelector(".items"); 
ul.remove();
//ul.firstElementChild.remove();

// ul.firstElementChild.textContent = "Daniel S. Insular";
// ul.children[1].innerText = "Dy Robles"; 
// ul.lastElementChild.innerHTML = "<h1>Hello World</h1>"

// const btn = document.querySelector(".btn")
// btn.style.backgroundColor = "red"

const btn = document.querySelector(".btn")
const myfrm = document.querySelector("#my-form")
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const msg = document.querySelector('#msg')
// btn.addEventListener("click", function(e){
//       e.preventDefault();
//    // e.addEventListener();
//     console.log("The button was clicked");
//     myfrm.style.backgroundColor = "red"
// })

btn.addEventListener("click", function(e){
    e.preventDefault()

    if(username.value.length === 0 || password.value.length == 0)
    { 
      msg.innerHTML = "<h6 class ='error' >Please complete the form </h6>"
      setTimeout(() => document.querySelector('.error').remove(), 3000)
    }
    else
    {
        myfrm.submit();
    }

})