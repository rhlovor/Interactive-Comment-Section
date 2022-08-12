let form = document.getElementById("user-comment-box");
let sendButton = document.getElementById("send");
let textbox = document.getElementById("textbox").value;
let lastComment = document.getElementById("last-comment");
let number = document.getElementsByClassName('number');
let plus = document.getElementsByClassName('add');
let minus = document.getElementsByClassName('subtract');




 function userDiv() {
    let repContainer = document.getElementById('reply-container');

    let form = document.getElementsByClassName('first-comment');
    const newForm = form[0].cloneNode(true);

    let text = document.getElementById("textbox").value;

    
    

    let commentBoxDiv = newForm.children[0];
    let rating = commentBoxDiv.children[0];
    let number = rating.children[1];
    number.textContent = 0;

        let plus = rating.children[0];
        let minus = rating.children[2];

        let like = 0;



        plus.addEventListener("click", function () {
            like += 1;
            number.textContent = like;
        })

        minus.addEventListener("click", function () {
            like -= 1;
            number.textContent = like;
        })



    let content = commentBoxDiv.children[1];
    let textBod = content.children[1];
    let p = textBod.children[0];
    let reply1 = content.children[0];
    let imgDiv = reply1.children[0];
    let userImage = imgDiv.children[0];
    userImage.src = "./images/avatars/image-juliusomo.webp";
    let userName = imgDiv.children[1];
    let time = imgDiv.children[2];
    userName.textContent = 'juliusomo';
    time.textContent = 'now';

    p.textContent = text;

    
    

    repContainer.appendChild(newForm);
    

     console.log('New Div created')
 }




function preventDefault() {
    event.preventDefault();
}




sendButton.addEventListener('click', function () {
    preventDefault();
    userDiv();

    

    


})






















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




number[0].textContent = 12;
number[1].textContent = 5;
number[2].textContent = 4;
number[3].textContent = 2;


let like = 12;
let likeOne = 5;
let likeTwo = 4;
let likeThree = 2;

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