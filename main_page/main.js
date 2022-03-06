//test

var chp_5_kanji = ['手', '家', '族', '男', '女', '子', '父', '母',
 									'兄', '姉', '弟', '妹', '勉', '道', '書', '使', '国', '作', '音', '楽', '全', '部', '運', '動'];
var chp_5_words = [
	['手', '', '', '手がみ', 'てがみ', 'letter', '上手', 'じょうず', 'good at', '下手', 'へた', 'bad at', '空手', 'からて', 'karate', '手げい', 'しゅげい', 'handicrafts'],
	['家', 'いえ', 'house', '家々', 'いえいえ', 'houses'],
	['族', '', '', '家族', 'かぞく', 'family'],
	['男', 'おとこ', 'male', '男の人', 'おとこのひと', 'man'],
	['女', 'おんな', 'female', '女の方', 'おんなのかた', 'woman'],
	['子', '', '', '子ども', 'こども', 'child', '男の子', 'おとこのこ', 'boy', '女の子', 'おんなのこ', 'girl'],
	['父', 'ちち', '(my) father', 'お父さん', 'おとうさん', '(someones) father'],
	['母', 'はは', '(my) mother', 'お母さん', 'おかあさん', '(someones) mother'],

	['兄', 'あに', '(my) older brother', 'お兄さん', 'おにいさん', 'older brother'],
	['姉', 'あね', '(my) older sister', 'あ姉さん', 'おねえさん', 'older sister'],
	['弟', 'おとうと', '(my) younger brother', '弟さん', 'おとうとさん', ' younger brother', '兄弟', 'きょうだい', 'siblings'],
	['妹', 'いもうと', '(my) little sister', '妹さん', 'いもうとさん', ' little sister'],
	['勉', 'べん', 'diligence', '勉強', 'べんきょう', 'study'],
	['道', 'どう', 'path / street', 'さ道', 'さどう', 'tea ceremony', 'じょう道', 'じょうどう', 'judo'],

	['書', '', '', '書く', 'かく', 'to write', '書道', 'しょどう', 'calligraphy', '読書', 'どくしょ', 'reading books'],
	['使', '', '', '使う', 'つかう', 'I (will) use it'],
	['国', 'くに', 'country', '外国語', 'がいこくご', 'foreign language', '国々', 'くにぐに', 'countries'],
	['作', '', '', '作る', 'つくる', 'to make'],
	['音', 'おと', 'sound', '音楽', 'おんがく', 'music'],
	['楽', '', '', '楽しい', 'たのしい', 'fun'],

	['全', '', '', '全部', 'ぜんぶ', 'all', '全く', 'まったく', 'truly'],
	['部', '', '', '全部', 'ぜんぶ', 'all'],
	['運', '', '', '運ぶ', 'はこぶ', 'to carry', '運てんする', 'うんてんする', 'to drive'],
	['動', '', '', '運動する', 'うんどうする', 'to exercise']
];

var kanji_index = 0;
var word_index = 0;
var curr_arr;
var curr_kanji;


function load_tab_contents() {
	
	$(function() {
		helper_load($("#chapter_five"), chp_5_kanji, "chapter_five");
	});
}

function helper_load(chapter, array, name) {
	for (var i = 0; i < array.length; i++) {
		var butt = document.createElement("button");
		butt.className = "kanji_btn";
		butt.setAttribute('onclick', 'open_modal("' + array[i] + '", "'+ name +'")');
		butt.innerHTML = array[i];
		chapter.append(butt);
	}
}


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


//get rid of num_letters, should always be one letter on open, figure out how
//to adjust to fit when we go right or left
function open_modal(kanji, name) {
		if (name == "chapter_five") {
			curr_arr = chp_5_words;
			curr_kanji = kanji;
			kanji_index = chp_5_kanji.findIndex(findKanji);
			
		}
		document.getElementById("display_kanji").innerHTML = curr_arr[kanji_index][0];
		document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][1];
		document.getElementById("display_english").innerHTML = curr_arr[kanji_index][2];

		
		modal.style.display = "block";
}

function findKanji(index_kanji) {
	return index_kanji == curr_kanji;
}


// When the user clicks anywhere outside of the modal, close it
//most likely get rid of this when you add arrows to transition to different kanjis 
// window.onclick = function(event) {
//   if (event.target == modal) {
//     const change_this = document.getElementById("display_kanji");
//     //reset back to original fit
//     change_this.style.fontSize = "300px";
//     change_this.style.marginTop = "3%";
//     change_this.style.left = "20px";
//     modal.style.display = "none";
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
// }

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
				word_index = 0;
				isPainting = false;
				ctx.beginPath();
				modal.style.display = "none";

		}

		if (e.target.className === 'arrow left') {
			if (word_index > 0) {
				word_index--;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				var shown_kanji = curr_arr[kanji_index][word_index * 3];
				const change_this = document.getElementById("display_kanji");
				resize_kanji(shown_kanji);
				change_this.innerHTML = shown_kanji;
				document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][(word_index * 3) + 1];
				document.getElementById("display_english").innerHTML = curr_arr[kanji_index][(word_index * 3) + 2];
			}
		} 

		if (e.target.className === 'arrow right') {
			if (word_index < curr_arr[kanji_index].length - 1) {
				word_index++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				var shown_kanji = curr_arr[kanji_index][word_index * 3];
				const change_this = document.getElementById("display_kanji");
				resize_kanji(shown_kanji);
				change_this.innerHTML = shown_kanji
				document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][(word_index * 3) + 1];
				document.getElementById("display_english").innerHTML = curr_arr[kanji_index][(word_index * 3) + 2];
			}
		}
});

//TODO RESIZE FOR 4 AND WHATEVER ELSE WE NEED
function resize_kanji(shown_kanji) {
	const change_this = document.getElementById("display_kanji");
				if (shown_kanji.length <= 2) {
					change_this.style.fontSize = "300px";
					change_this.style.marginTop = "3%";
					change_this.style.left = "20px";
				} else if (shown_kanji.length == 3) {
					change_this.style.fontSize = "240px";
					change_this.style.marginTop = "7%";
					change_this.style.left = "25px";
				}
}


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