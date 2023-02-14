
// zoom in zoom out
function increase(){
    document.querySelector("#hosueImgId").style.transform= "scale(2)";
}
function decrease(){
    document.querySelector("#hosueImgId").style.transform= "scale(1)";
}

//filter galler 
// const buttons = document.querySelectorAll(".gallery-filter");
// const boxes = document.querySelectorAll(".gallery-item-inner");

// buttons.forEach((button)=> {
//     button.classList.remove('active');
// });
// buttons[0].classList.add('active');
// buttons.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//      e.preventDefault();
//      setActiveBtn(e);
//      const btnfilter = e.target.dataset.filter;

//      boxes.forEach((box => {
//         if(btnfilter == 'all'){
//             box.style.display = 'block';
//         }else{
//             const boxfilter = box.dataset.item;
//             if(btnfilter == boxfilter){
//                 box.style.display="block";

//             }else{
//                 box.style.display='none';
//             }
        
//         }

     
//      }));
//     });
// });
// function setActiveBtn(e){
//     buttons.forEach((buttons) =>{
//         buttons.classList.remove('active')
    
//     });
//     e.target.classList.add('active');
// }
// end filter gallary


//START CAROUSEL
const images = ["image2/house1.jpeg","image2/house2.jpeg","image2/house3.jpeg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function(){
    startCarousel();
},3000);
var index = 1;

startCarousel = () =>{
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length-1) index = 0;
}
//end 
// error message
// function togglePopup(){
//     alert ('404 error');
// }
// pageloader create
function openPopup(){
    newwin= window.open('index1.html')
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function openNew(){
    newwin= window.open('map.html')
}

// page 2 caurosal

