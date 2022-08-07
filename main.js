/*replyButton; for (let i = 0; i < replyButton.length; i++) {
    replyButton[i].style.backgroundColor = "red";
  }*/
const click = document.getElementById("replyAmy");

click.addEventListener("click", function () {
    document.getElementById("reply-direct1").style.display = 'block';
})

const click2 = document.getElementById("replyMax");

click2.addEventListener("click", function () {
    document.getElementById("reply-direct2").style.display = 'block';
})

const click3 = document.getElementById("replyRamises");

click3.addEventListener("click", function () {
    document.getElementById("reply-direct3").style.display = 'block';
})



let number = document.getElementsByClassName('number');
number[0].textContent = 0;
number[1].textContent = 0;
number[2].textContent = 0;
number[3].textContent = 0;

let plus = document.getElementsByClassName('add');
let minus = document.getElementsByClassName('subtract')


// function increment(){
//     let count = 0;
//     count = count + 1;
//     number.innerHTML = count;
//     console.log('clicked');
// }



// function decrement(){
//     let count = 0;
//     count = count - 1;
//     for(let i = 0; i < number.length; i++){
//         number[i].innerText = count;
//     }
//     console.log('clicked');
// }
let like = 0;
let likeOne = 0;
let likeTwo = 0;
let likeThree = 0;

plus[0].addEventListener("click", function () {
    like += 1;
    number[0].textContent = like;
})

plus[1].addEventListener("click", function () {
    likeOne += 1;
    number[1].textContent = likeOne
})

plus[2].addEventListener("click", function () {
    likeTwo += 1;
    number[2].textContent = likeTwo;
})

plus[3].addEventListener("click", function () {
    likeThree += 1;
    number[3].textContent = likeThree;
})

minus[0].addEventListener("click", function () {
    like -= 1;
    number[0].textContent = like;
})

minus[1].addEventListener("click", function () {
    likeOne -= 1;
    number[1].textContent = likeOne;
})

minus[2].addEventListener("click", function () {
    likeTwo -= 1;
    number[2].textContent = likeTwo;
})

minus[3].addEventListener("click", function () {
    likeThree -= 1;
    number[3].textContent = likeThree;
})


let replyBtn = document.getElementsByClassName('send');
let textArea = document.getElementsByClassName('comment');

replyBtn[0].addEventListener("click", function () {
    
})