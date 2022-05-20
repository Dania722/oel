document.addEventListener("DOMContentLoaded" , ()=>{
    function counter (id , start, end , dusration)
    {
        let obj = document.getElementById(id),
        current = start , 
        range = end - start , 
        increment = end > start ? 1 : -1 , 
        step = Math.abs(Math.floor(dusration/range)),
        timer = setInterval(() => {
           current += increment

obj.textContent = current;
if(current == end){
clearInterval(timer);
}
        }, step);
    }
    counter ("count1" , 0, 1287 , 1000); 
    counter ("count2" , 100, 5657 , 1500); 
    counter ("count3" , 0, 187 , 1000); 
    counter ("count4" , 0, 17 , 1500); 
});



// //active navbar 
// let navbar = document.querySelector(".navigation-wrap");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         navbar.classList.add("scroll-on");
//     }
//     else{
//         navbar.classList.remove("scroll-on"); 
//     }
// }

// //nav hide 
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     navCollapse.classList.remove("show");

// })

//carousal 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function validateForm() {  
    //collect form data in JavaScript variables  
    var pw = document.getElementById("ps").value;  
    var pw2 = document.getElementById("c_ps").value;  
    var mail = document.getElementById("mail").value;  
    var name = document.getElementById("name").value;  
      
    //check empty first name field  
    if(mail == "") {  
      document.getElementById("blankMsg").innerHTML = "**Fill the mail ";  
      return false;  
    }  
      
    //character data validation  
    if(!isNaN(name)){  
      document.getElementById("blankMsg").innerHTML = "**Enter the name ";  
      return false;  
    }  
  
   //character data validation  
    if(!isNaN(name)){  
      document.getElementById("charMsg").innerHTML = "**Only characters are allowed";  
      return false;  
    }   
    
    //check empty password field  
    if(pw == "") {  
      document.getElementById("message1").innerHTML = "**Fill the password please!";  
      return false;  
    }  
    
    //check empty confirm password field  
    if(pw2 == "") {  
      document.getElementById("message2").innerHTML = "**Enter the password please!";  
      return false;  
    }   
     
    //minimum password length validation  
    if(pw.length < 8) {  
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
      return false;  
    }  
  
    //maximum length of password validation  
    if(pw.length > 15) {  
      document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
      return false;  
    }  
    
    if(pw != pw2) {  
      document.getElementById("message2").innerHTML = "**Passwords are not same";  
      return false;  
    } else {  
      alert ("Your password created successfully");  
      document.write("submitted successfully");  
    }  
 }  




 const obj = [
    
    {
      category: "pastas"
    },
    {
        category: "junk foood"
    },
    {
        category: "pizza"
    },
    {
        category: "desi"
    },
    {
        category: "beverages"
    }
  ]

  let search = () => {
      let search = document.getElementById("search").value.toLowerCase()
      let category = document.getElementById("category").value
      let filtered = obj.filter((data) => {

          if (category == "category" && search == data[category].toString().match(search)) {
              return console.log(data)
          } 
          else {
              return console.log("not matched!")
          }
      });   
  }