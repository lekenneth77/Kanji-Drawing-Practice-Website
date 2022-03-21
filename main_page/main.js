var chp_1_kanji = ['日', '本', '学', '生', '名', '年', '何', '月', '人', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '先', '話', '語', '大'];
var chp_1_words = [
	['日', 'ひ', 'day', '日本', 'にほん', 'Japan', '日ようび', 'にちようび', 'Sunday'],
	['本', 'ほん', 'book', '日本', 'にほん', 'Japan'],
	['学', '', '', '学年', 'がくねん', 'school year', '学こう', 'がっこう', 'school', '学ぶ', 'まなぶ', 'to learn'],
	['生', 'なま', 'raw', '学生', 'がくせい', 'student', '~生まれ', '~うまれ', 'one who was born in ~', '生まれる', 'うまれる', 'to be born', '生きる', 'いきる', 'to live'],
	['名', '', '', '名まえ', 'なまえ', 'name', '名いし', 'めいし', 'name card'],

	['年', 'とし', 'year', '学年', 'がくねん', 'school year'],
	['何', 'なん / なに', 'what', '何ご', 'なにご', 'what language', '何ですか', 'なんですか', 'What is it?', '何年生', 'なんねんせい', 'hat year student'],
	['月', 'つき', 'moon / month', '月よう日', 'げつようび', 'Monday', '何月', 'なんがつ', 'what month'],
	['人', 'ひと', 'person', '日本人', 'にほんじん', 'Japanese Person', 'この人', 'このひと', 'this person', 'アメリカ人', 'アメリカじん', 'an American'],
	['一', 'いち', 'one', '一月', 'いちがつ', 'January', '一年生', 'いちねんせい', '1st year student', '一さい', 'いっさい', 'one year old'],
	['二', 'に', 'two', '二月', 'にがつ', 'February', '二年生', 'にねんせい', '2nd year student'],

	['三', 'さん', 'three', '三月', 'さんがつ', 'March', '三年生', 'さんねんせい', '3rd year student'],
	['四', 'よん / よ', 'four', '四月', 'しがつ', 'April', '四年生', 'よねんせい', '4th year student', '四さい', 'よんさい', 'four years old'],
	['五', 'ご', 'five', '五月', 'ごがつ', 'May', '五さい', 'ごさい', 'five years old'],
	['六', 'ろく', 'six', '六月', 'ろくがつ', 'June', '六さい', 'ろくさい', 'six years old', '六かい', 'ろっかい', 'six times'],
	['七', 'しち / なな', 'seven', '七月', 'しちがつ', 'July', '七さい', 'ななさい', 'seven years old'],
	['八', 'はち', 'eight', '八月', 'はちがつ', 'August', '八さい', 'はっさい', 'eight years old', '八かい', 'はっかい', 'eight times'],

	['九', 'きゅう / く', 'nine', '九月', 'くがつ', 'September', '九さい', 'きゅうさい', 'nine years old', '九じ', 'くじ', 'nine o\' clock'],	
	['十', 'じゅう', 'ten', '十月', 'じゅうがつ', 'October', '十かい', 'じゅっかい / じっかい', 'tenth floor'],
	['百', 'ひゃく', 'one hundred', '三百', 'さんびゃく', 'three hundred', '六百', 'ろっぴゃく', 'six hundred', '八百', 'はっぴゃく', 'eight hundred'],
	['先', 'さき', 'earlier / ahead', '先生', 'せんせい', 'teacher'],
	['話', '', '', '話します', 'はなします', 'to speak'],
	['語', 'ご', 'language', '日本語', 'にほんご', 'Japanese Language', 'えい語', 'えいご', 'English Language', 'スペイン語', 'スペインご', 'Spanish Language', '何語', 'なにご', 'what language'],
	['大', 'おお / だい', 'large / great', '大きい', 'おおきい', 'big', '大学', 'だいがく', 'university', '大すきです', 'だいすきです', 'I like it a lot']
];

var chp_2_kanji = ['間', '半', '上', '下', '分', '小', '好', '町', '田', '左', '右', '中', '外', '前', '後', '時', '山', '口', '千', '万', '方', '近', '遠', '有'];

var chp_2_words = [
	['間', 'あいだ', 'between', '一時間', 'いちじかん', 'one hour', '間', 'ま', 'space / pause'],
	['半', 'はん', 'half', '四時間半', 'よじかんはん', '4 and a half hours', '九時半', 'くじはん', '9:30'],
	['上', 'うえ', 'top / above / upper', '上げる', 'あげる', 'to raise / lift / give', '上がる', 'あがる', 'to rise'],
	['下', 'した', 'below, under, lower', '下げる', 'さげる', 'to hang / lower', '下がる', 'さがる', 'to come / fall down'],
	['分', 'ぷん / ふん', 'minute(s)', '分かる', 'わかる', 'to understand', '分ける', 'わける', 'to divide / share', '分かれる', 'わかれる', 'to be separated'],
	['小', '', '', '小さい', 'ちいさい', 'little / small'],
	['好', '', '', '好き', 'すき', 'be fond of / like (adj)'],
	['町', 'まち', 'town / street'],
	['田', 'た', 'rice field', '町田さん', 'まちださん', 'Mr./Ms. Machida'],
	['左', 'ひだり', 'left'],
	['右', 'みぎ', 'right'],

	['中', 'なか', 'inside', '一日中', 'いちにちじゅう', 'all day', '中ごく', 'ちゅうごく', 'China', '田中さん', 'たなかさん', 'Mr./Ms. Tanaka'],
	['外', 'そと', 'outside'],
	['前', 'まえ', 'front / before', '名前', 'なまえ', 'name', 'ご前', 'ごぜん', 'A.M.'],
	['後', 'あと', 'after', '後ろ', 'うしろ', 'behind', 'ご後', 'ごご', 'P.M.'],
	['時', 'とき', 'time', '一時間', 'いちじかん', 'one hour', '何時ですか', 'なんじですか', 'What time is it?', '時々', 'ときどき', 'sometimes'],
	['山', 'やま', 'mountain', '山本さん', 'やまもとさん', 'Mr./Ms. Yamamoto', '山田さん', 'やまださん', 'Mr./Ms. Yamada'],

	['口', 'ぐち', 'mouth', '人口', 'じんこう', 'population', '山口さん', 'やまぐちさん', 'Mr./Ms. Yamaguchi'],
	['千', 'せん / ぜん', '~ thousand'],
	['万', 'まん', '~ ten thousand', '一万', 'いちまん', 'ten thousand', '二千二百万', 'にせんにひゃくまん', 'twenty-two million'],
	['方', 'かた', 'person / direction', 'あの方', 'あのかた', 'that person'],
	['近', '', '', '近い', 'ちかい', 'close (distance)', '近じょ', 'きんじょ', 'neighborhood'],
	['遠', '', '', '遠い', 'とおい', 'far'],
	['有', '', '', '有名', 'ゆうめい', 'famous', '有る', 'ある', 'to exist']
];

var chp_3_kanji = ['朝','明', '午', '昼', '来', '行', '聞', '食', '出', '飲', '入', '休', '夕', '今', '週', '曜', '毎', '回', '見', '起', '読', '火', '水', '木', '金', '土', '会'];

var chp_3_words = [
	['朝', 'あさ', 'morning', '朝ごはん', 'あさごはん', 'breakfast'],
	['明', '', '', '明日', 'あした', 'tomorrow', '明かり', 'あかり', 'light', '明るい', 'あかるい', 'bright', '明らか', 'あきらか', 'clear'],
	['午', '', '', '午前', 'ごぜん', 'A.M.', '午後', 'ごご', 'P.M.'],
	['昼', 'ひる', 'daytime / noon', '昼ごはん', 'ひるごはん', 'lunch'],
	['来', '', '', '来月', 'らいげつ', 'next month', '来年', 'らいねん', 'next year', '来週', 'らいしゅう', 'next week', '来る', 'くる', 'to come', '来ない', 'こない', 'not come', '来ます', 'きます', '(will) come', '来ません', 'きません', '(will) not come'],

	['行', '', '', '行く', 'いく', 'to go', '行きます', 'いきます', 'to go', 'ぎん行', 'ぎんこう', 'bank', '行う', 'おこなう', 'to do / carry out'],
	['聞', '', '', '聞く', 'きく', 'to hear / listen', '聞きます', 'ききます', 'to hear / listen', 'しん聞', 'しんぶん', 'newspaper', '聞こえる', 'きこえる', 'to be heard / audible'],
	['食', '', '', '食べる', 'たべる', 'to eat', '食べます', 'たべます', 'to eat'],
	['出', 'で', 'origin', '出かける', 'でかける', 'to go out', '出る', 'でる', 'to leave / attend', '出しん', 'しゅっしん', 'hometown'],
	['飲', '', '', '飲む', 'のむ', 'to drink', '飲みます', 'のみます', 'to drink'],
	['入', '', '', '入る', 'はいる', 'to go in', '入ります', 'はいります', '(will) go in', '入れる', 'いれる', 'to put / let in'],

	['休', '', '', '休む', 'やすむ', 'to rest', '休みましょう', 'やすみましょう', 'Let\'s take a rest', '休みの日', 'やすみのひ', 'holiday'],
	['夕', 'ゆう', 'evening', '夕ごはん', 'ゆうごはん', 'dinner', '夕方', 'ゆうがた', 'evening'],
	['今', 'いま', 'now', '今日', 'きょう', 'today', '今月', 'こんげつ', 'this month', '今年', 'ことし', 'this year', '今朝', 'けさ', 'this morning'],
	['週', 'しゅう', 'week', '週末', 'しゅうまつ', 'weekend', '今週', 'こんしゅう', 'this week', '来週', 'らいしゅう', 'next week', '先週', 'せんしゅう', 'last week', '一週間', 'いっしゅうかん', 'one week'],
	['曜', '', '', '日曜日', 'にちようび', 'Sunday', '月曜日', 'げつようび', 'Monday', '曜日', 'ようび', 'day of the week'],
	['毎', 'まい', 'every', '毎日', 'まいにち', 'everday', '毎週', 'まいしゅう', 'every week', '毎月', 'まいつき', 'every month', '毎年', 'まいねん / まいとし', 'every year'],

	['回', 'かい', 'times', '三回', 'さんかい', 'three times', '何回', 'なんかい', 'how many times', '回り', 'まわり', 'surrounding / turning around', '回る', 'まわる', 'to go / turn around', '回す', 'まわす', 'to turn'],
	['見', '', '', '見る', 'みる', 'to see', '見える', 'みえる', 'to be visible', '見せる', 'みせる', 'to show'],
	['起', '', '', '起きる', 'おきる', 'to wake / get up', '起こる', 'おこる', 'to occur / happen', '起こす', 'おこす', 'to wake (someone) up / cause'],
	['読', '', '', '読む', 'よむ', 'to read'],
	['火', 'ひ / ほ / か', 'fire', '火曜日', 'かようび', 'Tuesday'],
	['水', 'みず', 'water', '水曜日', 'すいようび', 'Wednesday'],
	['木', 'き', 'tree / wood', '木曜日', 'もくようび', 'Thursday'],
	['金', 'かね', 'money', '金曜日', 'きんようび', 'Friday', '金', 'かな', 'metal'],
	['土', 'つち', 'earth / ground', '土曜日', 'どようび', 'Saturday'],
	['会', '', '', '会う', 'あう', 'to meet']
];

var chp_4_kanji = ['天', '気', '雨', '雪', '度', '風', '台', '番', '春', '夏', '秋', '冬', '東', '西', '南', '北', '高', '多', '少', '強', '弱', 
'昨', '暑', '寒', '空'];

var chp_4_words = [
	['天', '', '', '天気', 'てんき', 'weather'],
	['気', '', '', '気こう', 'きこう', 'climate', '気おん', 'きおん', 'air temperature'],
	['雨', 'あめ', 'rain', '大雨', 'おおあめ', 'heavy rain'],
	['雪', 'ゆき', 'snow', '大雪', 'おおゆき', 'heavy snow'],
	['度', 'ど', 'degree', '何度', 'なんど', 'how many degrees', '十度', 'じゅうど', '10 degrees'],

	['風', 'かぜ', 'wind'],
	['台', '', '', '台風', 'たいふう', 'typhoon', '五台', 'ごだい', '5 heavy machines'],
	['番', '', '', '一番', 'いちばん', 'number one'],
	['春', 'はる', 'spring'],
	['夏', 'なつ', 'summer'],
	['秋', 'あき', 'fall'],

	['冬', 'ふゆ', 'winter'],
	['東', 'ひがし', 'east', '東風', 'ひがしかぜ', 'easterly wind', '東きょう', 'とうきょう', 'Tokyo'],
	['西', 'にし', 'west', '西風', 'にしかぜ', 'westerly wind'],
	['南', 'みなみ', 'south', '南風', 'みなみかぜ', 'southerly wind'],
	['北', 'きた', 'north', '北風', 'きたかぜ', 'northerly wind'],
	['高', '', '', '高い', 'たかい', 'high / expensive', '高田さん', 'たかださん', 'Mr./Ms. Takada'],

	['多', '', '', '多い', 'おおい', 'many', '多くの人', 'おおくのひと', 'many people', '雨が多い', 'あめがおおい', 'a lot of rain'],
	['少', '', '', '少し', 'すこし', 'a few / a little', '少ない', 'すくない', 'few'],
	['強', '', '', '強い', 'つよい', 'strong', '勉強', 'べんきょう', 'to study', '強まる', 'つよまる', 'become stronger', '強める', 'つよめる', 'to make stronger'],
	['弱', '', '', '弱い', 'よわい', 'weak', '弱まる', 'よわまる', 'to weaken', '弱める', 'よわめる', 'to make weak', '弱る', 'よわる', 'grow weak'],
	['昨', '', '', '昨日', 'きのう', 'yesterday'],
	['暑', '', '', '暑い', 'あつい', 'hot'],
	['寒', '', '', '寒い', 'さむい', 'cold'],
	['空', 'そら', 'sky', '空気', 'くうき', 'air', '空ける', 'あける', 'to empty', '空', 'から', 'empty']
];

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

var chp_6_kanji = ['思', '終', '始', '物', '肉', '事', '茶', '酒', '牛', '鳥', '湯', '野', '魚', '味', '悪', '料', '理', '米', '品', '和', '洋', '夜', '言', '貝'];
var chp_6_words = [
	['思', '', '', '思う', 'おもう', 'to think'],
	['終', '', '', '終わり', 'おわり', 'end', '終わる', 'おわる', 'to come to an end', '終える', 'おえる', 'to bring to an end'],
	['始', '', '', '始まる', 'はじまる', 'to start', '始める', 'はじめる', 'to (which I) begin'],
	['物', 'もの', 'thing', '飲み物', 'のみもの', 'beverage'],

	['肉', 'にく', 'meat', 'ぶた肉', 'ぶたにく', 'pork'],
	['事', 'こと', 'thing', '食事をする', 'しょくじをする', 'have a meal'],
	['茶', 'ちゃ', 'tea', 'お茶', 'おちゃ', 'tea', '茶道', 'さどう', 'tea ceremony'],
	['酒', 'さけ', 'sake / alcohol', 'お酒', 'おさけ', 'sake', '日本酒', 'にほんしゅ', 'Japanese sake'],
	['牛', 'うし', 'cow', '牛肉', 'ぎゅうにく', 'beef'],
	['鳥', 'とり', 'bird', '鳥肉', 'とりにく', 'chicken meat'],

	['湯', 'ゆ', 'hot water', 'お湯', 'おゆ', 'hot water'],
	['野', 'の', 'field', '野さい', 'やさい', 'vegetables', '中野', 'なかの', 'Nakano'],
	['魚', 'さかな', 'fish'],
	['味', 'あじ', 'taste / flavor', '味わう', 'あじわう', 'to taste / appreciate', '味見する', 'あじみする', 'to taste a sample', '味そ', 'みそ', 'fermented soybean paste'],
	['悪', '', '', '悪い', 'わるい', 'bad', '味が悪い', 'あじがわるい', 'taste bad', '悪い天気', 'わるいてんき', 'bad weather'],
	['料', 'りょう', 'materials / fee', 'ちょう味料', 'ちょうみりょう', 'seasoning'],

	['理', 'り', 'justice / truth', '日本料理', 'にほんりょうり', 'Japanese cuisine'],
	['米', 'こめ', 'rice', 'お米', 'おこめ', 'uncooked rice', '米国', 'べいこく', 'America'],
	['品', 'しな', 'goods / quality', '食料品', 'しょくりょうひん', 'groceries / foodstuffs', 'インスタント食品', 'インスタントしょくひん', 'instant food'],
	['和', '', '', '和風料理', 'わふうりょうり', 'Japanese-style cuisine', '和食', 'わしょく', 'Japanese cuisine', '和らげる', 'やわらげる', 'to soften / make calm', '和らぐ', 'やわらぐ', 'soften / become calm'],
	['洋', '', '', '洋食', 'ようしょく', 'Western Cuisine', '洋風の家', 'ようふうのいえ', 'Western-style house'],
	['夜', 'よる', 'night', '今夜', 'こんや', 'tonight', '夜食を作る', 'やしょくをつくる', 'make a late night meal'],
	['言', 'こと', 'word', '言う', 'いう', 'to say'],
	['貝', 'かい', 'shellfish', '貝料理', 'かいりょうり', 'shellfish cuisine']
];

var chp_7_kanji = [];
var chp_7_words = [];

function Chapter(name, kanji, words) {
	this.name = name;
	this.kanji_arr = kanji;
	this.words_arr = words;
}

const CH1 = new Chapter("chapter_one", chp_1_kanji, chp_1_words);
const CH2 = new Chapter("chapter_two", chp_2_kanji, chp_2_words);
const CH3 = new Chapter("chapter_three", chp_3_kanji, chp_3_words);
const CH4 = new Chapter("chapter_four", chp_4_kanji, chp_4_words);
const CH5 = new Chapter("chapter_five", chp_5_kanji, chp_5_words);
const CH6 = new Chapter("chapter_six", chp_6_kanji, chp_6_words);
const CH7 = new Chapter("chapter_seven", chp_7_kanji, chp_7_words);
const CH_OTHER = new Chapter("other", [], []);
const CH_FRONT = new Chapter("front_page", [], []);

var chapters = [CH1, CH2, CH3, CH4, CH5, CH6, CH7, CH_OTHER, CH_FRONT];

var kanji_index = 0;
var word_index = 0;
var curr_arr;

//for quiz
var quizzing = false;
var finished_indexes = new Set([]);
var chosen_words = [];
var random_kanji_index;
var random_word_index;

function load_tab_contents() {
	$(function() {
		for (let i = 0; i < chapters.length - 1; i++) {
			let curr_chp = chapters[i];
			helper_load($("#" + curr_chp.name), curr_chp.kanji_arr, i);
		}
	});
}

function helper_load(element, array, chapter_index) {
	for (var i = 0; i < array.length; i++) {
		var button = document.createElement("button");
		button.className = "kanji_btn";
		button.setAttribute('onclick', 'open_modal("' + array[i] + '", ' + chapter_index +')');
		button.innerHTML = array[i];
		element.append(button);
	}
	var quiz_button = document.createElement("button");
	quiz_button.setAttribute('onclick', 'load_quiz(' + chapter_index + ')');
	quiz_button.className = "kanji_btn";
	quiz_button.innerHTML = "QUIZ";
	element.append(quiz_button);
}

function load_quiz(chapter_index) {
	quizzing = true;
	let chapter = chapters[chapter_index];
	curr_arr = chapter.words_arr;
	kanji_arr = chapter.kanji_arr;


	for (let i = 0; i < kanji_arr.length; i++) {
		let setup_arr = [curr_arr[i].length / 3];
		chosen_words.push(setup_arr);
	}

	choose_rng();
	chosen_words[random_kanji_index].push(curr_arr[random_kanji_index][random_word_index * 3]);

	document.getElementById("kanji_gif").style.display = "none";
	document.getElementById("display_kanji").innerHTML = "";
	document.getElementById("display_hiragana").innerHTML = curr_arr[random_kanji_index][random_word_index * 3  +1];
	document.getElementById("display_english").innerHTML = curr_arr[random_kanji_index][random_word_index * 3 + 2];
	document.getElementById("myModal").style.backgroundImage = "url('360_F_466134779_AgMg3t7KNO5mu6JMSvgf4sgYqnPcXBXs.jpg')";
	document.getElementById("check").style.display = "block";
	document.getElementById("left").style.display = "none";
	document.getElementById("quiz_time").style.display = "block";
	document.body.style.overflow = "hidden";
	modal.style.display = "block";
}

function choose_rng() {
	random_word_index = -1;
	while (random_word_index == -1) {
		random_kanji_index = random_kanji_rng();
		console.log("Chosen kanji Index: " +random_kanji_index)
		if (curr_arr[random_kanji_index].length / 3 == 1) {
			console.log("That kanji array only had one word! Nice Luck!")
			finished_indexes.add(random_kanji_index);
			random_word_index = 0;
			break;
		}
		random_word_index = random_word_rng(random_kanji_index);
		console.log("Chosen word Index: " + random_word_index)
	}
}

function random_kanji_rng() {
	let random_index = -1;
	let find_new_num = true;
	let tried_nums = new Set([-1]);
	while (find_new_num) {
		let old_size = tried_nums.size;
		while (old_size == tried_nums.size) {
			random_index = Math.floor(Math.random() * curr_arr.length)
			tried_nums.add(random_index);
		}
		find_new_num = finished_indexes.has(random_index);
	}
	return random_index;
}

function random_word_rng(random_kanji) {
	let find_new_num = true;
	let random_index = -1;
	let tried_nums = new Set([-1]);
	while (find_new_num) {
		let old_size = tried_nums.size;
		while (old_size == tried_nums.size) {
			random_index = Math.floor(Math.random() * curr_arr[random_kanji].length / 3)
			tried_nums.add(random_index);
		}
		if (curr_arr[random_kanji][random_index * 3 + 1] == '') {
			chosen_words[random_kanji].push(curr_arr[random_kanji][random_index * 3]);
			if(chosen_words[random_kanji][0] == chosen_words[random_kanji].length - 1) {
				random_index = -1;
				finished_indexes.add(random_kanji);
				break;
			}
		}
		find_new_num = chosen_words[random_kanji].includes(curr_arr[random_kanji][random_index * 3]);
	} 

	return random_index;
}


function show_correct() {
	var shown_kanji = curr_arr[random_kanji_index][random_word_index * 3];
	resize_kanji(shown_kanji);
	document.getElementById("display_kanji").innerHTML = shown_kanji;
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
		evt.target.className += " active";
	}

// Get the modal
var modal = document.getElementById("myModal");

function open_modal(kanji, chapter_index) {
		let chapter = chapters[chapter_index];
		curr_arr = chapter.words_arr;
		kanji_index = chapter.kanji_arr.indexOf(kanji);
	
		if (chapter.name != "other") {
			document.getElementById("kanji_gif").setAttribute("src", "gifs/" + chapter.name + "_" + kanji_index + ".gif");
		}
		document.getElementById("kanji_gif").style.display = "block";
		document.getElementById("display_kanji").innerHTML = curr_arr[kanji_index][0];
		document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][1];
		document.getElementById("display_english").innerHTML = curr_arr[kanji_index][2];
		document.body.style.overflow = "hidden";
		modal.style.display = "block";
}

//drawing board js
const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = (window.innerWidth / 6) + (window.innerWidth / 50);
const canvasOffsetY =  (window.innerHeight / 8) + (window.innerHeight / 50);
const default_brush_size = window.innerHeight / 25;
let img_data;

canvas.width = window.innerWidth - canvasOffsetX - (window.innerWidth / 6);
canvas.height = window.innerHeight - canvasOffsetY - (window.innerHeight / 5);

let isPainting = false;
let lineWidth = default_brush_size;
let startX;
let startY;

window.addEventListener("keydown", e => {
	if (modal.style.display != "block") {
		if (e.key >= 1 && e.key <= 9) {
			openTab(e, chapters[e.key - 1].name);
			make_tab_active(e.key);
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
		} else if (e.key == "f") {
			show_correct();
		}
}
});

function make_tab_active(active_tab_num) {
	let tabs = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tabs.length; i++) {
		if (i == active_tab_num - 1) {
			tabs[i].className += " active";
		} else {
			tabs[i].className = tabs[i].className.replace(" active", "");
		}
	}
}

function close_modal() {
	if (quizzing) {
		document.getElementById("myModal").style.backgroundColor = "rgba(0,0,0,0.4)";
		finished_indexes.clear();
		chosen_words.splice(0, chosen_words.length);
		document.getElementById("check").style.display = "none";
		quizzing = false;
	}
	
	helper_resize("30vw", "35%", "16%", default_brush_size);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	word_index = 0;
	isPainting = false;
	ctx.beginPath();
	document.getElementById("myModal").style.backgroundImage = "none";
	document.getElementById("quiz_time").style.display = "none";
	document.body.style.overflow = "auto";
	document.getElementById("left").style.display = "block";
	modal.style.display = "none";
	
}

function clear_drawing() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// function save_drawing() {
// 	img_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
// 	clear_drawing();
// }

// function show_drawing() {
// 	ctx.putImageData(img_data, 0, 0);
// }

function go_left() {
	if (word_index > 0) {
		word_index--;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var shown_kanji = curr_arr[kanji_index][word_index * 3];
		const change_this = document.getElementById("display_kanji");
		if (quizzing) {
			change_this.innerHTML = "";
		} else {
			resize_kanji(shown_kanji);
			change_this.innerHTML = shown_kanji;
		}
		document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][(word_index * 3) + 1];
		document.getElementById("display_english").innerHTML = curr_arr[kanji_index][(word_index * 3) + 2];
	}
}

function go_right() {
	//USE RNG ALGO TO CHOOSE NEXT ONE!
	if (quizzing) {
		if (finished_indexes.size != curr_arr.length) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			choose_rng();
			let shown_kanji = curr_arr[random_kanji_index][random_word_index * 3];
			chosen_words[random_kanji_index].push(curr_arr[random_kanji_index][random_word_index * 3]);
			if (chosen_words[random_kanji_index][0] == chosen_words[random_kanji_index].length - 1) {
				console.log("Used all words of this kanji" + curr_arr[random_kanji_index][0])
				console.log("This is the chosen word list" + chosen_words[random_kanji_index])
				finished_indexes.add(random_kanji_index);
			}
			resize_kanji(shown_kanji);
			document.getElementById("display_kanji").innerHTML = "";
			document.getElementById("display_hiragana").innerHTML = curr_arr[random_kanji_index][(random_word_index * 3) + 1];
			document.getElementById("display_english").innerHTML = curr_arr[random_kanji_index][(random_word_index * 3) + 2];
		} else {
			// console.log(chosen_words)
			// console.log("FINISHED!")
			//TODO 
		}
	} else {
		if (word_index < (curr_arr[kanji_index].length / 3) - 1) {
			word_index++;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			var shown_kanji = curr_arr[kanji_index][word_index * 3];
			const change_this = document.getElementById("display_kanji");
			resize_kanji(shown_kanji);
			change_this.innerHTML = shown_kanji;
			document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][(word_index * 3) + 1];
			document.getElementById("display_english").innerHTML = curr_arr[kanji_index][(word_index * 3) + 2];
		}
	}
}

function resize_kanji(shown_kanji) {
	switch (shown_kanji.length) {
		case 1: 
			helper_resize("30vw", "35%", "15%", default_brush_size);
			break;
		case 2:
			helper_resize("28vw", "22%", "17%", default_brush_size);
			break;
		case 3:
			helper_resize("20vw", "22%", "24%", default_brush_size - 10);
			break;
		case 4:
			helper_resize("15vw", "22%", "30%", default_brush_size - 15);
			break;
		case 5:
			helper_resize("12vw", "22%", "32%", default_brush_size - 20);
			break;
		case 6:
			helper_resize("10vw", "22%", "34%", default_brush_size - 20);
			break;
		case 8:
			helper_resize("7vw", "24%", "36%", default_brush_size - 22);
			break;
		default:
			break;
	}
}

function helper_resize(font_size, left, top, brush_size) {
	const change_this = document.getElementById("display_kanji");
	change_this.style.fontSize = font_size
	change_this.style.left = left;
	change_this.style.top = top;
	lineWidth = brush_size;
}


//TODO QUIZ
//DOES NOT ALLOW DRAWING, NO GIFS, USE THE RNG SET STRAT TO RANDOMIZE 

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
