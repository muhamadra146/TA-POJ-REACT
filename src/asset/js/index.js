// onlcick navbar 
(document).ready(function () {
    (".menu-toggle").click(function () {
        ('nav').toggleClass('active');
    })
})

// on click image 
const changeImage = src => {
    document.getElementById('main').src = src
  }

// desc destination detail
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const text1 = document.getElementById("collapseExample");
const text2 = document.getElementById("collapseExample2");

button1.onclick = function() {
    text1.style.display = "block";
    text2.style.display = "none"
}
button2.onclick = function() {
    text2.style.display = "block";
    text1.style.display = "none"
}



