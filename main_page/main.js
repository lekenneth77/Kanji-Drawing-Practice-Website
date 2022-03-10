
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
		butt.setAttribute('onclick', 'open_modal("' + array[i] + '", "' + name +'")');
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

function open_modal(kanji, name) {
		if (name == "chapter_five") {
			curr_arr = chp_5_words;
			curr_kanji = kanji;
			kanji_index = chp_5_kanji.findIndex(findKanji);
		}
		if (name != "other") {
			// document.getElementById("kanji_gif").setAttribute("src","/gifs/" + name + "_" + kanji_index + ".gif");
			document.getElementById("kanji_gif").setAttribute("src", "gifs/chapter_five_0.gif");
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

const canvasOffsetX = (window.innerWidth / 6) + (window.innerWidth / 50);
const canvasOffsetY =  (window.innerHeight / 8) + (window.innerHeight / 50);
const default_brush_size = 25;

canvas.width = window.innerWidth - canvasOffsetX - (window.innerWidth / 6);
canvas.height = window.innerHeight - canvasOffsetY - (window.innerHeight / 5);

let isPainting = false;
let lineWidth = default_brush_size;
let startX;
let startY;

window.addEventListener("keydown", e => {
	if (modal.style.display != "block") {
		if (e.key == 1) {
			openTab(Event, 'chapter_one');
		} else if (e.key == 2) {
			openTab(Event, 'chapter_two');
		} else if (e.key == 3) {
			openTab(Event, 'chapter_three');
		} else if (e.key == 4) {
			openTab(Event, 'chapter_four');
		} else if (e.key == 5) {
			openTab(Event, 'chapter_five');
		} else if (e.key == 6) {
			openTab(Event, 'chapter_six');
		} else if (e.key == 7) {
			openTab(Event, 'chapter_seven');
		} else if (e.key == 8) {
			openTab(Event, 'other');
		} else if (e.key == 9) {
			openTab(Event, 'front_page');
		}
	}
	if (modal.style.display == "block") {
		if (e.key == "ArrowLeft") {
			go_left();
		} else if (e.key == "ArrowRight") {
			go_right();
		} else if (e.key == "Escape") {
			close_modal();
		} else if (e.key == "Backspace" || e.code == "KeyC") {
			clear_drawing();
		}
}
});

function close_modal() {
	//reset back to original fit
	helper_resize("30vw", "35%", "6%", default_brush_size);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	word_index = 0;
	isPainting = false;
	ctx.beginPath();
	modal.style.display = "none";
}

function clear_drawing() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function go_left() {
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

function go_right() {
	if (word_index < (curr_arr[kanji_index].length / 3) - 1) {
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

function resize_kanji(shown_kanji) {
				if (shown_kanji.length == 1) {
					helper_resize("30vw", "35%", "6%", default_brush_size);
				} else if (shown_kanji.length == 2) {
					helper_resize("28vw", "24%", "8%", default_brush_size);
				} else if (shown_kanji.length == 3) {
					helper_resize("20vw", "22%", "18%", default_brush_size - 10);
				} else if (shown_kanji.length == 4) {
					helper_resize("1150%", "10%", "2%", default_brush_size - 15);
				} else if (shown_kanji.length == 5) {
					helper_resize("900%", "12%", "2%", default_brush_size - 20);
				}
}

function helper_resize(font_size, left, top, brush_size) {
	const change_this = document.getElementById("display_kanji");
	change_this.style.fontSize = font_size
	change_this.style.left = left;
	change_this.style.top = top;
	lineWidth = brush_size;
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
