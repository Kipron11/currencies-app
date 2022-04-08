const toggle = document.getElementById('toggle');
// const body = document.querySelector('body');
// const conteiner = document.querySelector('.conteiner')
// const form = document.querySelector('.form')




const btn = document.querySelector("#toggle");


btn.addEventListener("click", function () {
     
 toggle.classList.toggle('active');
   document.body.classList.toggle("dark-theme");
    
});
// toggle.onclick = function () {

//     //  if (conteiner.getAttribute("class") !== "conteiner.active") {
//     //      conteiner.classList.toggle('active');
//     //  }


    
  

// conteiner.classList.toggle('active');
//    
//     body.classList.toggle('active');
//     form.classList.toggle('active');

// }


