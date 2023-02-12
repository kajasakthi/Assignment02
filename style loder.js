
    // const navToggle = document.querySelector(".navbar_toggle");
    // const links = document.querySelector(".main_nav");
    
    // navToggle.addEventListener('click', function(){
    //     links.classList.toggle("show_nav");
    // })
    
    var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}