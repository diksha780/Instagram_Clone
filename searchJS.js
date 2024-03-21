var popup=document.getElementById("searchPage");
function openSearchPage(){
    popup.classList.toggle("popupSearch")

}

var input=document.getElementById("search-icon");
function search(){
input.classList.add("searchIcon");
}

const input1 = document.getElementById("search-input");

if (input1.placeholder) {
  input1.addEventListener('focus', (e) => {
    input1.placeholder = '';
  });
} else {
  input1.placeholder.preventDefault()
};

// const clickArea=document.querySelector('.photo');
// const showHeart=(e)=>{
//     const heart=document.getElementById("like-icon");
//     heart.classList.add('bi');
//     heart.classList.add('bi-heart');
//     clickArea.appendChild(heart);

//     setTimeout(()=>{
//         heart.remove();
//     },800);
// }
// clickArea.addEventListener('dblclick',(e)=>{
//     showHeart(e);
// }

var likeFunc=document.getElementById("photo");
function like(){
  likeFunc.classList.add("heart-animation");
}
var likeFunc2=document.getElementById("photo2");
function like2(){
  likeFunc2.classList.add("heart-animation");
}
var likeFunc3=document.getElementById("photo3");
function like3(){
  likeFunc3.classList.add("heart-animation");
}