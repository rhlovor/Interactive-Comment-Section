/*replyButton; for (let i = 0; i < replyButton.length; i++) {
    replyButton[i].style.backgroundColor = "red";
  }*/
const click = document.getElementById("replyAmy");

click.addEventListener("click", function() {
    document.getElementById("reply-direct1").style.display = 'block';
})

const click2 = document.getElementById("replyMax");

click2.addEventListener("click", function() {
    document.getElementById("reply-direct2").style.display = 'block';
})

const click3 = document.getElementById("replyRamises");

click3.addEventListener("click", function() {
    document.getElementById("reply-direct3").style.display = 'block';
})