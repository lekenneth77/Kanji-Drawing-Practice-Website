//tab js
function openTab(evt, tabName) {
    var i, tabcontent, tablinks, mainpage;
    mainpage = document.getElementById("front_page");
    mainpage.style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// Get the modal
var modal = document.getElementById("myModal");

function open_modal(kanji, num_letters) {
    const change_this = document.getElementById("display_kanji");
    if (num_letters == 3) {
      //adjust sizes to fit
      change_this.style.fontSize = "240px";
      change_this.style.marginTop = "7%";
      change_this.style.left = "25px";
    }
    change_this.innerHTML = kanji;
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    const change_this = document.getElementById("display_kanji");
    //reset back to original fit
    change_this.style.fontSize = "300px";
    change_this.style.marginTop = "3%";
    change_this.style.left = "20px";
    modal.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

//drawing board js
const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft + 125;
const canvasOffsetY = canvas.offsetTop + 55;

canvas.width = window.innerWidth - canvasOffsetX - 230;
canvas.height = window.innerHeight - canvasOffsetY - 130;

let isPainting = false;
let lineWidth = 25;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (e.target.id === 'close') {
      //reset back to original fit
        const change_this = document.getElementById("display_kanji");
        change_this.style.fontSize = "300px";
        change_this.style.marginTop = "3%";
        change_this.style.left = "20px";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isPainting = false;
        ctx.beginPath();
        modal.style.display = "none";
    }
});


const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
