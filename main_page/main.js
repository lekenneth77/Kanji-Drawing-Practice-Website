var chp_1_kanji = ['日', '本', '学', '生', '名', '年', '何', '月', '人', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '先', '話', '語', '大'];
var chp_1_words = [
	['日', 'ひ', 'day', '日本', 'にほん', 'Japan', '日ようび', 'にちようび', 'Sunday'],
	['本', 'ほん', 'book', '日本', 'にほん', 'Japan'],
	['学', '', '', '学年', 'がくねん', 'school year', '学こう', 'がっこう', 'school', '学ぶ', 'まなぶ', 'to learn'],
	['生', 'なま', 'raw', '学生', 'がくせい', 'student', '生まれ', 'うまれ', 'born in', '生きる', 'いきる', 'to live'],
	['名', '', '', '名まえ', 'なまえ', 'name', '名いし', 'めいし', 'name card'],

	['年', 'とし', 'year', '学年', 'がくねん', 'school year'],
	['何', 'なん / なに', 'what', '何ご', 'なにご', 'what language', '何ですか', 'なんですか', 'What is it?', '何年生', 'なんねんせい', 'what year student'],
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
	['間', 'あいだ', 'between', '一時間', 'いちじかん', 'one hour'],
	['半', 'はん', 'half', '四時間半', 'よじかんはん', '4 and a half hours', '九時半', 'くじはん', '9:30'],
	['上', 'うえ', 'top / above'],
	['下', 'した', 'below, under, lower'],
	['分', 'ぷん / ふん', 'minute(s)', '分かる', 'わかる', 'to understand'],
	['小', '', '', '小さい', 'ちいさい', 'little / small'],
	['好', '', '', '好き', 'すき', 'be fond of / like'],
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
	['明', '', '', '明日', 'あした', 'tomorrow', '明かり', 'あかり', 'light', '明るい', 'あかるい', 'bright'],
	['午', '', '', '午前', 'ごぜん', 'A.M.', '午後', 'ごご', 'P.M.'],
	['昼', 'ひる', 'daytime / noon', '昼ごはん', 'ひるごはん', 'lunch'],
	['来', '', '', '来月', 'らいげつ', 'next month', '来年', 'らいねん', 'next year', '来週', 'らいしゅう', 'next week', '来る', 'くる', 'to come', '来ない', 'こない', 'not come', '来ます', 'きます', '(will) come', '来ません', 'きません', '(will) not come'],

	['行', '', '', '行く', 'いく', 'to go', '行きます', 'いきます', 'to go', 'ぎん行', 'ぎんこう', 'bank', '行う', 'おこなう', 'to do / carry out'],
	['聞', '', '', '聞く', 'きく', 'to hear / listen', '聞きます', 'ききます', 'to hear / listen', 'しん聞', 'しんぶん', 'newspaper'],
	['食', '', '', '食べる', 'たべる', 'to eat', '食べます', 'たべます', 'to eat'],
	['出', 'で', 'origin', '出かける', 'でかける', 'to go out', '出る', 'でる', 'to leave / attend', '出しん', 'しゅっしん', 'hometown'],
	['飲', '', '', '飲む', 'のむ', 'to drink', '飲みます', 'のみます', 'to drink'],
	['入', '', '', '入る', 'はいる', 'to go in', '入ります', 'はいります', '(will) go in'],

	['休', '', '', '休む', 'やすむ', 'to rest', '休みましょう', 'やすみましょう', 'Let\'s take a rest', '休みの日', 'やすみのひ', 'holiday'],
	['夕', 'ゆう', 'evening', '夕ごはん', 'ゆうごはん', 'dinner', '夕方', 'ゆうがた', 'evening'],
	['今', 'いま', 'now', '今日', 'きょう', 'today', '今月', 'こんげつ', 'this month', '今年', 'ことし', 'this year', '今朝', 'けさ', 'this morning'],
	['週', 'しゅう', 'week', '週末', 'しゅうまつ', 'weekend', '今週', 'こんしゅう', 'this week', '来週', 'らいしゅう', 'next week', '先週', 'せんしゅう', 'last week', '一週間', 'いっしゅうかん', 'one week'],
	['曜', '', '', '日曜日', 'にちようび', 'Sunday', '月曜日', 'げつようび', 'Monday', '曜日', 'ようび', 'day of the week'],
	['毎', 'まい', 'every', '毎日', 'まいにち', 'everday', '毎週', 'まいしゅう', 'every week', '毎月', 'まいつき', 'every month', '毎年', 'まいねん / まいとし', 'every year'],

	['回', 'かい', 'times', '三回', 'さんかい', 'three times', '何回', 'なんかい', 'how many times', '回り', 'まわり', 'surrounding', '回る', 'まわる', 'to go / turn around'],
	['見', '', '', '見る', 'みる', 'to see'],
	['起', '', '', '起きる', 'おきる', 'to wake / get up'],
	['読', '', '', '読む', 'よむ', 'to read'],
	['火', 'ひ / ほ / か', 'fire', '火曜日', 'かようび', 'Tuesday'],
	['水', 'みず', 'water', '水曜日', 'すいようび', 'Wednesday'],
	['木', 'き', 'tree / wood', '木曜日', 'もくようび', 'Thursday'],
	['金', 'かね', 'money', '金曜日', 'きんようび', 'Friday'],
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
	['強', '', '', '強い', 'つよい', 'strong', '勉強', 'べんきょう', 'to study'],
	['弱', '', '', '弱い', 'よわい', 'weak'],
	['昨', '', '', '昨日', 'きのう', 'yesterday'],
	['暑', '', '', '暑い', 'あつい', 'hot'],
	['寒', '', '', '寒い', 'さむい', 'cold'],
	['空', 'そら', 'sky', '空気', 'くうき', 'air', '空ける', 'あける', 'to empty']
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
	['父', 'ちち', '(my) father', 'お父さん', 'おとうさん', 'father'],
	['母', 'はは', '(my) mother', 'お母さん', 'おかあさん', 'mother'],

	['兄', 'あに', '(my) older brother', 'お兄さん', 'おにいさん', 'older brother'],
	['姉', 'あね', '(my) older sister', 'あ姉さん', 'おねえさん', 'older sister'],
	['弟', 'おとうと', '(my) little brother', '弟さん', 'おとうとさん', ' younger brother', '兄弟', 'きょうだい', 'siblings'],
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
	['事', 'こと', 'thing', '食事', 'しょくじ', 'meal', '食事をする', 'しょくじをする', 'have a meal'],
	['茶', 'ちゃ', 'tea', 'お茶', 'おちゃ', 'tea', '茶道', 'さどう', 'tea ceremony'],
	['酒', 'さけ', 'sake / alcohol', 'お酒', 'おさけ', 'sake', '日本酒', 'にほんしゅ', 'Japanese sake'],
	['牛', 'うし', 'cow', '牛肉', 'ぎゅうにく', 'beef'],
	['鳥', 'とり', 'bird', '鳥肉', 'とりにく', 'chicken meat'],

	['湯', 'ゆ', 'hot water', 'お湯', 'おゆ', 'hot water'],
	['野', 'の', 'field', '野さい', 'やさい', 'vegetables', '中野', 'なかの', 'Nakano'],
	['魚', 'さかな', 'fish'],
	['味', 'あじ', 'taste / flavor', '味わう', 'あじわう', 'to taste', '味見する', 'あじみする', 'to taste a sample', '味そ', 'みそ', 'miso'],
	['悪', '', '', '悪い', 'わるい', 'bad', '味が悪い', 'あじがわるい', 'taste bad', '悪い天気', 'わるいてんき', 'bad weather'],
	['料', 'りょう', 'materials / fee', 'ちょう味料', 'ちょうみりょう', 'seasoning'],

	['理', 'り', 'justice / truth', '日本料理', 'にほんりょうり', 'Japanese cuisine'],
	['米', 'こめ', 'rice', 'お米', 'おこめ', 'uncooked rice', '米国', 'べいこく', 'America'],
	['品', 'しな', 'goods / quality', '食料品', 'しょくりょうひん', 'groceries', '食品', 'しょくひん', 'food'],
	['和', '', '', '和風料理', 'わふうりょうり', 'Jap-style cuisine', '和食', 'わしょく', 'Japanese cuisine', '和らげる', 'やわらげる', 'to soften / to calm'],
	['洋', '', '', '洋食', 'ようしょく', 'Western Cuisine', '洋風の家', 'ようふうのいえ', 'Western-like house'],
	['夜', 'よる', 'night', '今夜', 'こんや', 'tonight', '夜食を作る', 'やしょくをつくる', 'make nightly meal'],
	['言', 'こと', 'word', '言う', 'いう', 'to say'],
	['貝', 'かい', 'shellfish', '貝料理', 'かいりょうり', 'shellfish cuisine']
];

var chp_7_kanji = ['同', '長', '市', '場', '主', '電', '売', '買', '着', '切', '円', '引', '安', '店', '員', '色', '黒', '白', '青', '赤', '黄', '服', '返', '花', '屋', '暗'];
var chp_7_words = [
	['同', '', '', '同じ', 'おなじ', 'the same'],
	['長', '', '', '長い', 'ながい', 'long', '長そでのシャツ', 'ながそでのシャツ', 'long-sleeved shirt'],
	['市', 'いち', 'city / market', 'オースティン市', 'オースティンし', 'city of Austin'],
	['場', 'ば', 'place', '市場', 'いちば', 'market'],
	[ '主', 'ぬし / あるじ', 'owner / master', '主人', 'しゅじん', 'master / husband'],
	['電', '', '', '電気', 'でんき', 'electricity', '電話', 'でんわ', 'telephone'],
	['売', '', '', '売る', 'うる', 'to sell', '売り出し', 'うりだし', 'sale'],
	['買', '', '', '買う', 'かう', 'to buy', '買い物', 'かいもの', 'shopping'],

	['着', '', '', '着る', 'きる', 'to wear', '着物', 'きもの', 'kimono', '水着', 'みずぎ', 'swimwear', '上着', 'うわぎ', 'coat', '着ける', 'つける', 'to put on / wear'],
	['切', '', '', '切る', 'きる', 'to cut', '切って', 'きって', 'stamp'],
	['円', 'えん', 'yen',  '三百円', 'さんびゃくえん', '300 yen'],
	['引', '', '', '引く', 'ひく', 'to pull', '百円引き', 'ひゃくえんびき', '100 yen off'],
	['安', '', '', '安い', 'やすい', 'cheap', '安らか', 'やすらか', 'peaceful'],
	['店', 'みせ', 'shop / store', '食料品店', 'しょくりょうひんてん', 'grocery store', '洋品店', 'ようひんてん', 'clothing store'],

	['員', '', '', 'デパートの店員', 'デパートのてんいん', 'clerk of dep. store'],
	['色', 'いろ', 'color', '何色ですか', 'なにいろですか', 'What color is it?', '茶色', 'ちゃいろ', 'brown color', '色々', 'いろいろ', 'various', '色々な物', 'いろいろなもの', 'various things'],
	['黒', 'くろ', 'black', '黒いかばん', 'くろいかばん', 'black bag', '黒ずむ', 'くろずむ / くろばむ', 'to become dark'],
	['白', 'しろ', 'white', '白いドレス', 'しろいドレス', 'white dress'],
	['青', 'あお', 'blue', '青い空', 'あおいそら', 'blue sky'],
	['赤', 'あか', 'red', '赤いセーター', 'あかいセーター', 'red sweater', '赤らむ', 'あからむ', 'blush / become red'],

	['黄', '', '', '黄色いくつ', 'きいろいくつ', 'yellow shoes'],
	['服', 'ふく', 'clothes', '洋服', 'ようふく', 'Western clothes', '和服', 'わふく', 'Japanese clothes'],
	['返', '', '', '返る', 'かえる', 'to return', '返品', 'へんぴん', 'returned goods'],
	['花', 'はな', 'flower', '花屋', 'はなや', 'flower shop', '生け花', 'いけばな', 'flower arranging'],
	['屋', 'や', 'store', '肉屋', 'にくや', 'butcher shop', '魚屋', 'さかなや', 'fish store', '本屋', 'ほんや', 'book store', '酒屋', 'さけや', 'liquor store'],
	['暗', '', '', '暗い', 'くらい', 'dark', '暗い色', 'くらいいろ', 'dark color', '暗がり', 'くらがり', 'darkness']
];

var chp_8_kanji = ['私', '京', '都', '寺', '神', '社', '内', '曲', '目', '所', '見物', '着く', '予', '約', '車', '早', '歩', '旅', '館', '前に', '後で', '乗', '待', '駅', '止', '客', '地', '図', '海'];

var chp_8_words = [
	['私', 'わたし', 'I / me'],
	['京', 'みやこ', 'capital', '東京', 'とうきょう', 'Tokyo'],
	['都', 'みやこ', 'capital', '京都', 'きょうと', 'Kyoto'],
	['寺', 'てら', 'temple'],
	['神', 'かみ', 'god', '神道', 'しんとう', 'Shinto'],

	['社', 'やしろ', 'Shinto shrine', '神社', 'じんじゃ', 'shrine', '会社', 'かいしゃ', 'company / business', '社会学', 'しゃかいがく', 'Sociology'],
	['内', 'うち', 'inside / within', '国内', 'こくない', 'within the country'],
	['曲', '', '', '曲がる', 'まがる', 'to turn / bend'],
	['目', 'め', 'eye', '二本目の道', 'にほんめのみち', '2nd Street', '五つ目のがど', 'いつつめのがど', '5th Corner', '四番目', 'よんばんめ', 'Fourth'],
	['所', 'ところ', 'place', '場所', 'ばしょ', 'place', '近所', 'きんじょ', 'neighborhood', '名所', 'めいしょ', 'famous place'],
	['見物', 'けんぶつ', 'sight seeing / visit'],
	['着く', 'つく', 'to arrive'],

	['予', '', '', '予約', 'よやく', 'reservation', '予め', 'あらかじめ', 'in advance', '予て', 'かねて', 'in advance', ],
	['約', '', '', '予約', 'よやく', 'reservation'],
	['車', 'くるま', 'car / vehicle', '電車', 'でんしゃ', 'electric train', 'グリーン車', 'グリーンしゃ', 'first class car/riage'],
	['早', '', '', '早い', 'はやい', 'early', '早く起きた', 'はやくおきた', 'woke up early'],
	['歩', 'ぽ', 'step', '歩いて行く', 'あるいていく', 'to go on feet', 'さん歩する', 'さんぽする', 'to take a walk', 'と歩', 'とほ', '(on) foot'],
	['旅', 'たび', 'trip / travel', '一人旅', 'ひとりたび', 'travelling alone', '国内旅行', 'こくないりょこう', 'domestic travel'],
	['館', 'やかた', 'mansion', '旅館', 'りょかん', 'traditional Jap. inn'],
	['前に', 'まえに', 'before'],
	['後で', 'あとで', 'later'],

	['乗', '', '', '乗る', 'のる', 'to ride / get on', '乗り物', 'のりもの', 'vehicle'],
	['待', '', '', '待つ', 'まつ', 'to wait'],
	['駅', 'えき', 'station', '東京駅', 'とうきょうえき', 'Tokyo station'],
	['止', '', '', '止まる', 'とまる', 'to stop', '電車が止まった', 'でんしゃがとまった', 'the train stopped', '～を止めました', '～をとめました', 'Stopped ~'],
	['客', 'きゃく', 'guest / customer', '乗客', 'じょうきゃく', 'passenger', 'かんこう客', 'かんこうきゃく', 'tourist'],
	['地', '', '', '地下てつ', 'ちかてつ', 'subway', '地味な色', 'じみないろ', 'drab color'],
	['図', '', '', '地図', 'ちず', 'map', '図書館', 'としょかん', 'library'],
	['海', 'うみ', 'sea / ocean', '北海道', 'ほっかいどう', 'Hokkaido', '海外旅行', 'かいがいりょこう', 'Overseas travel']
];

var chp_9_kanji = ['新', '開', '公', '園', '住', '屋ね', 'ろう下', 'てんじょう', '階', '広', '部屋', '直', '戸', '古', '門', '室', '伝', '洗', '建', '友', '貸', '日本間', '洋間', '台所', '借', '置', '静', '庭', '便', '利', '不', '家事', '電子'];

var chp_9_words = [
	['新', 'にい / あらた', 'new', '新し', 'あたらしい', 'new', '新聞', 'しんぶん', 'newspaper'],
	['開', 'かい', 'opening', '開ける', 'あける', 'to open'],
	['公', 'おおやけ', 'public', '公園', 'こうえん', 'park'],
	['園', 'その', 'garden', '公園', 'こうえん', 'park', '動物園', 'どうぶつえん', 'zoo'],
	['住', '', '', '住む', 'すむ', 'to live / reside', '住まい', 'すまい', 'residence', '住所', 'じゅうしょ', 'address'],
	['屋ね', 'やね', 'roof'],
	['ろう下', 'ろうか', 'corridor'],
	['天じょう', 'てんじょう', 'ceiling'],

	['階', 'かい', 'floor / story', '二階', 'にかい', '2nd floor', '階だん', 'かいだん', 'stairs'],
	['広', '', '', '広い', 'ひろい', 'broad / spacious'],
	['部屋', 'へや', 'room', '勉強部屋', 'べんきょうべや', 'study room'],
	['直', '', '', '直す', 'なおす', 'to fix / correct'],
	['戸', 'と', 'door', '戸を開ける', 'とおあける', 'to open door', '神戸', 'こうべ', 'Kobe'],
	['古', '', '', '古い', 'ふるい', 'old', '中古', 'ちゅうこ', 'secondhand merch'],
	['門', 'かど', 'gate', '大きい門', 'おおきいもん', 'large gate'],

	['室', 'むろ', 'cellar', '和室', 'わしつ', 'Jap-style room', '洋室', 'ようしつ', 'Westernlike room', '客室', 'きゃくしつ', 'guest room', 'しん室', 'しんしつ', 'bedroom', 'よく室', 'よくしつ', 'bathroom', '空室', 'くうしつ', 'vacant room'],
	['伝', '', '', '手伝う', 'てつだう', 'help', '伝える', 'つたえる', 'to tell / convey'],
	['洗', '', '', '洗う', 'あらう', 'to wash', 'お手洗い', 'おてあらい', 'toliet', '洗めん所', 'せんめんじょ', 'wash stand', '洗たくき', 'せんたくき', 'washing machine', '洗たく物', 'せんたくもの', 'laundry'],
	['建', '', '', '建てる', 'たてる', 'to build', '建物', 'たてもの', 'building', '二階建て', 'にかいだて', 'two-story'],
	['友', 'とも', 'friend', '友だち', 'ともだち', 'friend'],
	['貸', '', '', '貸す', 'かす', 'to rent out/ lend'],
	['日本間', 'にほんま', 'Jap. style room'],
	['洋間', 'ようま', 'westernlike room'],
	['台所', 'だいどころ', 'kitchen'],

	['借', '', '', '借りる', 'かりる', 'to borrow / rent'],
	['置', '', '', '置く', 'おく', 'to put / set', '物置', 'ものおき', 'storage room'],
	['静', '', '', '静か', 'しずか', 'quiet'],
	['庭', 'にわ', 'garden / yard'],
	['便', '', '', '便利', 'べんり', 'convenient', '不便', 'ふべん', 'inconvenient', '便り', 'たより', 'news / things'],
	['利', '', '', '利く', 'きく', 'to take effect', '便利', 'べんり', 'convenient'],
	['不', '', '', '不動さん屋', 'ふどうさんや', 'real estate agent', '不便', 'ふべん', 'inconvenient'],
	['家事', 'かじ', 'housework'],
	['電子', 'でんし', 'microwave']
];

var chp_10_kanji = ['自', '路', '交', '通', '転', '駐', '教', '閉', '窓', '消', '変', '故', '差', '点', '信', '号', '部品', '入る', '入れる', '出る', '出す', '走', '帰', '横', '働', '工', '速', '違', '反', '歩行しゃ', '歩道', '近道', '回り道'];

var chp_10_words = [
	['自', '', '', '自動車', 'じどうしゃ', 'automobile', '自分で', 'じぶんで', 'on one\'s own', '自ら', 'みずから', 'oneself / personally'],
	['路', 'みち', 'road / path', '道路', 'どうろ', 'road', '道路地図', 'どうろちず', 'road map'],
	['交', '', '', '交通', 'こうつう', 'traffic', '交ぜる', 'まぜる', 'to mix'],
	['通', '', '', '交通', 'こうつう', 'transportation', '通る', 'とおる', 'to pass through', '一方通行', 'いっぽうつうこう', 'one-way traffic'],
	
	['転', '', '', '運転手', 'うんてんしゅ', 'driver', '自転車', 'じてんしゃ', 'bicycle', '運転のし方', 'うんてんのしかた', 'the way to operate'],
	['駐', '', '', '駐車場', 'ちゅうしゃじょう', 'parking lot', '駐車する', 'ちゅうしゃする', 'to park'],
	['教', '', '', '教える', 'おしえる', 'to teach', '教か書', 'きょうかしょ', 'textbook', '教室', 'きょうしつ', 'classroom', '教会', 'きょうかい', 'church'],
	['閉', '', '', '閉じる', 'とじる', 'to close'],
	['窓', 'まど', 'window', '窓を閉める', 'まどをしめる', 'to close window', '窓を開ける', 'まどをあける', 'to open window'],
	['消', '', '', '消す', 'けす', 'to turn off / erase', '消える', 'きえる', 'to die out', '消しゴム', 'けしゴム', 'pencil eraser'],

	['変', '', '', '変える', 'かえる', 'to change', '大変だ', 'たいへんだ', 'there\'s trouble'],
	['故', 'ゆえ　/ こ', 'reason / cause'],
	['差', '', '', '交差点', 'こうさてん', 'intersection', '差す', 'さす', 'to hold'],
	['点', '', '', '百点', 'ひゃくてん', '100 points', '点ける', 'つける', 'to light / turn on'],
	['信', '', '', '信じる', 'しんじる', 'to believe', '信号が変わる', 'しんごうがかわる', 'traffic light turns ~'],
	['号', '', '', '信号', 'しんごう', 'traffic light', '電話番号', 'でんわばんごう', 'telephone number'],
	['部品', 'ぶひん', 'parts'],
	['入る', 'はいる', 'to come in'],
	['入れる', 'いれる', 'to put in'],
	['出る', 'でる', 'speeds up'],
	['出す', 'だす', 'to increase speed'],

	['走', '', '', '走る', 'はしる', 'to run'],
	['帰', '', '', '帰る', 'かえる', 'to return'],
	['横', 'よこ', 'side', '道路を横切る', 'どうろをよこぎる', 'to cross road', '横だん歩道', 'おうだんほどう', 'pedestrian crossing'],
	['働', '', '', '働く', 'はたらく', 'to work'],
	['工', 'たくみ', 'craftsman', '工事中', 'こうじちゅう', 'under construction', '工学', 'こうがく', 'engineering'],
	['速', '', '', '速い', 'はやい', 'speed', '速い速度', 'はやいそくど', 'fast speed', '時速', 'じそく', 'speed per hour', '高速道路', 'こうそくどうろ', 'freeway'],
	['違', '', '', '違う', 'ちがう', 'to be different / mistaken', '交通違反', 'こうつういはん', 'violation of traffic laws'],
	['反', '反', 'opposite / against', '交通違反', 'こうつういはん', 'violation of traffic laws'],
	['歩行しゃ', 'ほこうしゃ', 'pedestrian / walker'],
	['歩道', 'ほどう', 'footpath'],
	['近道', 'ちかみち', 'short cut'],
	['回り道', 'まわりみち', 'detour route']
];

var chp_11_kanji = ['体', '頭', '顔', '鼻', '耳', '歯', '首', '指', '足', '毛', '形', '丸', '角', '持', '立', '心', '配', '苦', '死', '元', '病', '院', '痛', '熱', '薬', '局', '気分が悪い', '風邪をひく', '食前', '食後'];

var chp_11_words = [
	['体', 'からだ', 'body', '人間の体', 'にんげんのからだ', 'human body'],
	['頭', 'あたま', 'head'],
	['顔', 'かお', 'face'],
	['鼻', 'はな', 'nose'],
	['耳', 'みみ', 'ear'],

	['歯', 'は', 'tooth'],
	['首', 'くび', 'neck', '手首', 'てくび', 'wrist', '首都', 'しゅと', 'capital (of a country)'],
	['指', 'ゆび', 'finger'],
	['足', 'あし', 'foot', '足首', 'あしくび', 'ankle', '一足', 'いっそく', 'one pair of footwear', '足の指', 'あしのゆび', 'toe'],
	['毛', 'け', 'hair / fur / wool', 'かみの毛', 'かみのけ', 'head hair'],
	['形', 'かたち', 'form / shape', 'ひし形', 'ひしがた', 'diamond shape'],

	['丸', '', '', '丸い', 'まるい', 'round'],
	['角', 'かど', 'corner / angle', '五つ目の角', 'いつつめのかど', '5th corner', '三角', 'さんかく', 'triangle', '四角い形', 'しかくいかたち', 'square/rectangular shape'],
	['持', '', '', '持つ', 'もつ', 'to have', '気持ち', 'きもち', 'feeling / emotion', '金持ち', 'かねもち', 'rich person', '持てる', 'もてる', 'to be popular'],
	['立', '', '', '立つ', 'たつ', 'to stand (up)'],
	['心', 'こころ', 'heart', '安心する', 'あんしんする', 'to feel relieved'],
	['配', '', '', '心配する', 'しんぱいする', 'to worry', '心配事', 'しんぱいごと', 'worries / troubles'],
	['苦', '', '', '苦しい', 'くるしい', 'painful', '苦手', 'にがて', 'bad at and dislike', '苦い', 'にがい', 'bitter'],
	['死', '', '', '死ぬ', 'しぬ', 'to die'],
	['元', 'もと', 'origin / basis', '元気', 'げんき', 'healthy and energetic'],
	['病', 'やまい', 'disease', '病気', 'びょうき', 'illness'],
	['院', '', '', '病院', 'びょういｎ', 'hospital', '入院', 'にゅういん', 'entering the hospital', '大学院', 'だいがくいん', 'grad school'],
	['痛', '', '', '痛い', 'いたい', 'painful', '痛み', 'いたみ', 'pain / ache', '頭が痛い', 'あたまがいたい', 'head aches', '頭痛', 'ずつう', 'headache'],
	['熱', '', '', '熱い', 'あつい', 'hot (not weather)', '熱がある', 'ねつがある', 'have a fever', '熱いお茶', 'あついおちゃ', 'hot tea'],
	['薬', 'くすり', 'medicine / chemical', '薬や', 'くすりや', 'drugstore'],
	['局', 'つぼね', 'court lady', '薬局', 'やっきょく', 'pharmacy'],
	['気分が悪い', 'きぶんがわるい', 'feel bad / sick'],
	['風ぜをひく', 'かぜをひく', 'catch a cold'],
	['食前', 'しょくぜん', 'before the meal'],
	['食後', 'しょくご', 'after the meal']
];

var chp_12_kanji = ['校', '卒', '業', '仕', '人生', '生まれる', '赤ちゃん', '中年', '就', '職', '退', '育', '若', '老', '愛', '恋', '初', '結', '婚', '式', '研', '究', '御', '医', '者', '師', '銀', '会社員', '駅員', '作家', '音楽家', '神父', '神主', '亡', '忙', '知', '存', '申', '召', '様', '社長', '部下'];

var chp_12_words = [
	['校', '', '', '学校', 'がっこう', 'school', '小学校', 'しょうがっこう', 'elementary school', '中学校', 'ちゅうがっこう', 'middle school', '高校', 'こうこう', 'high school', '入学', 'にゅうがく', 'entering school'],
	['卒', '', '', '卒業', 'そつぎょう', 'graduation'],
	['業', 'わざ', 'performance / act', '卒業', 'そつぎょう', 'graduation'],
	['仕', '', '', '仕事', 'しごと', 'work', '仕方がない', 'しかたがない', 'nothing can be done'],
	['人生', 'じんせい', 'life'],
	['生まれる', 'うまれる', 'to be born'],
	['赤ちゃん', 'あかちゃん', 'baby'],
	['中年', 'ちゅうねん', 'middle aged'],

	['就', '', '', '就職する', 'しゅうしょくする', 'to get a job'],
	['職', '', '', '就職する', 'しゅうしょくする', 'to get a job', '職場', 'しょくば', 'workplace', '職業', 'しょくぎょう', 'profession'],
	['退', '', '', '退職する', 'たいしょくする', 'to retire', '中退する', 'ちゅうたいする', 'to quit in the middle', '退学する', 'たいがくする', 'to quit school', '退院する', 'たいいんする', 'released from hospital'],
	['育', '', '', '育つ', 'そだつ', 'to grow up', '育てる', 'そだてる', 'to raise', '体育館', 'たいいくかん', 'gymnasium', '教育', 'きょういく', 'education'],
	['若', '', '', '若い', 'わかい', 'young'],
	['老', '', '', '老人', 'ろうじん', 'elderly person'],
	['愛', '', '', '愛する', 'あいする', 'to love', '恋愛', 'れんあい', 'romantic love', '愛しい', 'いとしい', 'dear / beloved'],

	['恋', 'こい', 'love', '恋人', 'こいびと', 'lover', '恋愛', 'れんあい', 'romantic love', '初恋', 'はつこい', 'first love', '恋しい', 'こいしい', 'dearly / beloved'],
	['初', '', '', '初めて', 'はじめて', 'first time', '初恋', 'はつこい', 'first love', '初め', 'はじめ', 'beginning'],
	['結', '', '', '結婚', 'けっこん', 'marriage', '結ぶ', 'むすぶ', 'tie / bind'],
	['婚', '', '', '婚約する', 'こんやくする', 'to get engaged', '結婚', 'けっこん', 'marriage', '結婚式', 'けっこんしき', 'marriage ceremony'],
	[ '式', '', '', '卒業式', 'そつぎょうしき', 'graduation ceremony', '様式', 'ようしき', 'western style', '和式', 'わしき', 'Japanese style', '結婚式', 'けっこん', 'marriage ceremony'],

	['研', '', '', '研究', 'けんきゅう', 'research', '研究所', 'けんきゅうじょ', 'research institute', '研究室', 'けんきゅうしつ', 'professor\'s office'],
	['究', '', '', '研究', 'けんきゅう', 'research'],
	['御', 'おん', 'honorific prefix', '御卒業', 'ごそつぎょう', 'your/their graduation', '御家族', 'ごかぞく', 'your/their family'],
	['医', '', '', '医学', 'いがく', 'study of medicine', '歯医者', 'はいしゃ', 'dentist', '医師', 'いし', 'medical doctor'],
	['者', 'もの', 'person', '学者', 'がくしゃ', 'scholar', '若者', 'わかもの', 'young person'],
	['師', '', '', '医師', 'いし', 'medical doctor', '教師', 'きょうし', 'teacher'],
	['銀', 'しろがね', 'silver', '銀行員', 'ぎんこういん', 'bank employee'],
	['会社員', 'かいしゃいん', 'company employee'],
	['駅員', 'えきいん', 'station attendant'],
	['作家', 'さっか', 'writer'],
	['音楽家', 'おんがくか', 'musician'],
	['神父', 'しんぷ', 'priest'],
	['間飯', 'かんめし', 'Shinto priest'],

	['亡', '', '', '亡くなる', 'なくなる', 'to pass away'],
	['忙', '', '', '忙しい', 'いそがしい', 'busy'],
	['知', '', '', '知っている', 'しっている', 'I know', '知らない', 'しらない', 'I don\'t know', 'ご存知だ', 'ごぞんじだ', 'you know (honorific)', '知る', 'しる', 'to (come to) know', '知らせ', 'しらせ', 'info / news'],
	['存', '', '', '存じている', 'ぞんじている', 'I know (humble)', '御存知だ', 'ごぞんじだ', 'you know (honorific)'],
	['申', '', '', '申す', 'もうす', 'to say (humble)', '申し上げる', 'もうしあげる', 'to say (very humble)'],
	['召', '', '', '召し上がる', 'めしあがる', 'to eat / drink (honorific)', 'お召しになる', 'おめしになる', 'to wear (honorific)'],
	['様', 'さま', 'Mr. / Ms.'],
	['社長', 'しゃちょう', 'company president'],
	['部下', 'ぶか', 'subordinate']
];

var chp_13_kanji = ['換', '際', '留', '守', '受', '器', '取', '報', '文', '打', '調', '間違い電話', '通話料', '長電話', '市外局番', 'かけ直す', '英', '映', '画', '郵', '紙', '送', '達', '宅', '重', '刊', '雑', '誌', '切手', '勉字を書く', '電子メール', '記', '放', '組', '試', '験', '忘', '困'];

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
const CH8 = new Chapter("chapter_eight", chp_8_kanji, chp_8_words);
const CH9 = new Chapter("chapter_nine", chp_9_kanji, chp_9_words);
const CH10 = new Chapter("chapter_ten", chp_10_kanji, chp_10_words);
const CH11 = new Chapter("chapter_eleven", chp_11_kanji, chp_11_words);
const CH12 = new Chapter("chapter_twelve", chp_12_kanji, chp_12_words);

var chapters = [CH1, CH2, CH3, CH4, CH5, CH6, CH7, CH8, CH9, CH10, CH11, CH12];

var kanji_index = 0;
var word_index = 0;
var curr_arr;
var unsure; //TODO make this better... only used in close_modal for THAT reason
var textbook2 = false;

//for quiz
var quizzing = false;
var quiz_list = [];
var current_question = 1;
var total_questions = 0;
var finished_indexes = new Set([]);
var chosen_words = [];
var random_kanji_index;
var random_word_index;

function load_tab_contents() {
	$(function() {
		for (let i = 0; i < chapters.length; i++) {
			let curr_chp = chapters[i];
			helper_load($("#" + curr_chp.name), curr_chp.kanji_arr, i);
		}
	});
	let text = document.lastModified;
	document.getElementById("last_updated").innerHTML = "Last Updated On: " + text;
}

function helper_load(element, array, chapter_index) {
	//creates quiz button
	var quiz_button = document.createElement("button");
	quiz_button.setAttribute('onclick', 'start_selection(' + chapter_index + ')');
	quiz_button.className = "kanji_btn quiz_buttons";
	quiz_button.id = "quiz_btn_" + chapter_index;
	quiz_button.innerHTML = "QUIZ";
	element.append(quiz_button);

	//creates select_all button
	var select_all_btn = document.createElement("button");
	select_all_btn.setAttribute('onclick', 'select_all(' + chapter_index + ')');
	select_all_btn.className = "kanji_btn quiz_buttons";
	select_all_btn.id = "select_all_btn_" + chapter_index;
	select_all_btn.innerHTML = "SELECT ALL";
	select_all_btn.style.color = "black";
	select_all_btn.style.backgroundColor = "#5DA9E9";
	select_all_btn.style.display = "none";
	element.append(select_all_btn);
	
	//creates cancel btn
	var cancel_btn = document.createElement("button");
	cancel_btn.setAttribute('onclick', 'cancel_selection(' + chapter_index + ')');
	cancel_btn.className = "kanji_btn quiz_buttons";
	cancel_btn.id = "cancel_btn_" + chapter_index;
	cancel_btn.innerHTML = "CANCEL";
	cancel_btn.style.backgroundColor = "#E12C59";
	cancel_btn.style.color = "black";
	cancel_btn.style.display = "none";
	element.append(cancel_btn);

	element.append(document.createElement("div"));
	//creates kanji buttons
	for (var i = 0; i < array.length; i++) {
		var button = document.createElement("button");
		button.className = "kanji_btn kanji_btn_" + chapter_index;
		button.setAttribute('onclick', 'open_modal("' + array[i] + '", ' + chapter_index +')');
		button.innerHTML = array[i];
		element.append(button);
	}
	
}

function switch_textbooks() {
	let y1 = document.getElementsByClassName("y1");
	let y2 = document.getElementsByClassName("y2");
	if (document.getElementById("switch").innerHTML == "Switch to Yookoso 2") {
		document.getElementById("switch").innerHTML = "Switch to Yookoso 1";
		for (let i = 0; i < y1.length; i++) {
			y1[i].style.display = "none";
		}
		for (let i = 0; i < y2.length; i++) {
			y2[i].style.display = "inline";
		}
		textbook2 = true;
	} else {
		document.getElementById("switch").innerHTML = "Switch to Yookoso 2";
		for (let i = 0; i < y2.length; i++) {
			y2[i].style.display = "none";
		}
		for (let i = 0; i < y1.length; i++) {
			y1[i].style.display = "inline";
		}
		textbook2 = false;
	}
	close_modal();
	openFront();
}

function start_selection(chapter_index) {
	if (quizzing) {
		if (quiz_list.length == 0) {
			alert("PLEASE SELECT WHICH KANJI YOU WANT TO QUIZ!")
		} else {
			load_quiz(chapter_index);
		}
	} else {
		unsure = chapter_index;
		quizzing = true;
		let quiz_btn = document.getElementById("quiz_btn_" + chapter_index);
		quiz_btn.innerHTML = "CONFIRM";
		quiz_btn.style.color = "black";
		quiz_btn.style.backgroundColor = "#82D173";

		document.getElementById("select_all_btn_" + chapter_index).style.display = "inline";
		document.getElementById("cancel_btn_" + chapter_index).style.display = "inline";

		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].disabled = true;
		}

	}
}

function select_all(chapter_index) { 
	for (let i = 0; i < chapters[chapter_index].kanji_arr.length; i++) {
		quiz_list.push(i);
	}
	let all_buttons = document.getElementsByClassName("kanji_btn_" + chapter_index);
	for (let i = 0; i < all_buttons.length; i++) {
		all_buttons[i].style.backgroundColor = "#ccc";
	}
}

function cancel_selection(chapter_index) {
	quizzing = false;
	quiz_list.splice(0, quiz_list.length);
	let quiz_btn = document.getElementById("quiz_btn_" + chapter_index);
	quiz_btn.innerHTML = "QUIZ";
	quiz_btn.style.color = "black";
	quiz_btn.style.backgroundColor = "";
	document.getElementById("select_all_btn_" + chapter_index).style.display = "none";
	document.getElementById("cancel_btn_" + chapter_index).style.display = "none";

	let all_buttons = document.getElementsByClassName("kanji_btn_" + chapter_index);
	for (let i = 0; i < all_buttons.length; i++) {
		all_buttons[i].style.backgroundColor = "";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].disabled = false;
	}
}


function load_quiz(chapter_index) {
	let chapter = chapters[chapter_index];
	curr_arr = chapter.words_arr;

	for (let i = 0; i < quiz_list.length; i++) {
		let setup_arr = [curr_arr[quiz_list[i]].length / 3];
		total_questions += setup_arr[0];
		if (curr_arr[quiz_list[i]][1] == "") {
			total_questions--;
		}
		chosen_words.push(setup_arr);
	}

	choose_rng();
	if (random_word_index == -2) {
		random_word_index = 0;
	}
	let shown_kanji = curr_arr[quiz_list[random_kanji_index]][random_word_index * 3];
	chosen_words[random_kanji_index].push(shown_kanji);
	resize_kanji(shown_kanji);
	let str = "";
	for (let i = 0; i < shown_kanji.length; i++) {
		str += "_";
	}
	if (shown_kanji.length > 5) {
		str = "";
	}
	document.getElementById("display_underline").style.display = "block";
	document.getElementById("display_underline").innerHTML = str;
	document.getElementById("display_kanji").innerHTML = "";
	document.getElementById("display_hiragana").innerHTML = curr_arr[quiz_list[random_kanji_index]][random_word_index * 3 + 1];
	document.getElementById("display_english").innerHTML = curr_arr[quiz_list[random_kanji_index]][random_word_index * 3 + 2];
	document.getElementById("myModal").style.backgroundImage = "url('images/background.jpg')";
	document.getElementById("kanji_gif").style.display = "none";
	document.getElementById("instant_quiz_btn").style.display = "none";
	document.getElementById("left").style.display = "none";
	document.getElementById("check").style.display = "block";
	document.getElementById("quiz_time").style.display = "block";
	document.getElementById("counter").innerHTML = "1 / " + total_questions;
	document.getElementById("counter").style.display = "block";

	document.body.style.overflow = "hidden";
	modal.style.display = "block";

	var board = canvas.getBoundingClientRect();
	offsetX = board.left;
	offsetY = board.top;
	canvas.width = window.innerWidth * (.8);
	canvas.height = window.innerHeight * (.69);

}

function choose_rng() {
	random_word_index = -1;
	while (random_word_index == -1 && finished_indexes.size != quiz_list.length) {
		random_kanji_index = random_kanji_rng();
		if (curr_arr[quiz_list[random_kanji_index]].length / 3 == 1) {
			finished_indexes.add(random_kanji_index);
			random_word_index = -2; //TODO pretty duct tapey, maybe find a better solution?
			break;
		}
		if(chosen_words[random_kanji_index][0] == chosen_words[random_kanji_index].length - 1) {
			random_word_index = -1;
			finished_indexes.add(random_kanji_index);
			continue;
		}
		random_word_index = random_word_rng(random_kanji_index);
	}
}

function random_kanji_rng() {
	let random_index = -1;
	let find_new_num = true;
	let tried_nums = new Set([-1]);
	while (find_new_num) {
		let old_size = tried_nums.size;
		while (old_size == tried_nums.size) {
			random_index = Math.floor(Math.random() * quiz_list.length)
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
			random_index = Math.floor(Math.random() * curr_arr[quiz_list[random_kanji_index]].length / 3)
			tried_nums.add(random_index);
			//IF THAT WORD ARRAY HAS AN ARRAY THAT INCLUDES THE SAME EXACT KANJI TWICE BUT WITH DIFFERENT MEANINGS, THIS WILL
			//INFINITE LOOP! DON'T DO THAT!!!
		}
		if (!chosen_words[random_kanji].includes(curr_arr[quiz_list[random_kanji_index]][random_index * 3]) && curr_arr[quiz_list[random_kanji_index]][random_index * 3 + 1] == '') {

			chosen_words[random_kanji].push(curr_arr[quiz_list[random_kanji_index]][random_index * 3]);
			if(chosen_words[random_kanji][0] == chosen_words[random_kanji].length - 1) {
				random_index = -1;
				finished_indexes.add(random_kanji);
				break;
			}
		}

		find_new_num = chosen_words[random_kanji].includes(curr_arr[quiz_list[random_kanji_index]][random_index * 3]);

	} 

	return random_index;
}


function show_correct() {
	if (quizzing) {
		let change_this = document.getElementById("display_kanji");
		if (change_this.innerHTML != "") {
			clear_drawing();
			change_this.innerHTML = "";
			document.getElementById("check").innerHTML = 'CHECK';
		} else {
			var shown_kanji = curr_arr[quiz_list[random_kanji_index]][random_word_index * 3];
			resize_kanji(shown_kanji);
			change_this.innerHTML = shown_kanji;
			document.getElementById("check").innerHTML = 'TRY AGAIN?';
		}
	}
}

function instant_quiz() {
	let keep_track = kanji_index;
	close_modal();
	quiz_list.push(keep_track);
	quizzing = true;
	load_quiz(unsure);
}

//TODO super duct tape
function openFront() {
	var i, tabcontent, tablinks, mainpage;
	tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
	tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById("front_page").style.display = "block";
}

//tab js
function openTab(evt, tabName) {
		var i, tabcontent, tablinks, mainpage;
		if (!quizzing) {
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
	}

// Get the modal
var modal = document.getElementById("myModal");

function open_modal(kanji, chapter_index) {
	if (quizzing) {
		let chapter = chapters[chapter_index];
		let index = chapter.kanji_arr.indexOf(kanji);
		let all_buttons = document.getElementsByClassName("kanji_btn_" + chapter_index);
		let check = quiz_list.indexOf(index);
		if (check != -1) {
			//remove
			all_buttons[index].style.backgroundColor = "";
			quiz_list.splice(check, 1);
		} else {
			//add
			all_buttons[index].style.backgroundColor = "#ccc";
			quiz_list.push(index);
		}
	} else {
		let chapter = chapters[chapter_index];
		curr_arr = chapter.words_arr;
		kanji_index = chapter.kanji_arr.indexOf(kanji);
		unsure = chapter_index;
		
		document.getElementById("kanji_gif").setAttribute("src", "gifs/" + chapter.name + "_" + kanji_index + ".gif");
		document.getElementById("display_underline").style.display = "none";
		resize_kanji(curr_arr[kanji_index][0]);
		document.getElementById("line_width").value = lineWidth;
		document.getElementById("kanji_gif").style.display = "block";
		document.getElementById("instant_quiz_btn").style.display = "block";
		document.getElementById("display_kanji").innerHTML = curr_arr[kanji_index][0];
		document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][1];
		document.getElementById("display_english").innerHTML = curr_arr[kanji_index][2];
		document.body.style.overflow = "hidden";
		modal.style.display = "block";

		var board = canvas.getBoundingClientRect();
		offsetX = board.left;
		offsetY = board.top;
		canvas.width = window.innerWidth * (.8);
		canvas.height = window.innerHeight * (.69);

	}
}

//drawing board js
const canvas = document.getElementById('drawing_board');
const ctx = canvas.getContext('2d');
const toolbar = document.getElementById('toolbar');

let brush_size = Math.round(window.innerHeight / 30);
let drawing_stack = [];

let isPainting = false;
let lineWidth = brush_size;
let offsetX;
let offsetY;

window.addEventListener("keydown", e => {
	if (modal.style.display != "block") {
		if (!quizzing) {
			//TODO SUPER DUCTTAPE MAKE CLEANER
			if (textbook2) {
				let index = parseInt(e.key);
				if (e.key >= 1 && e.key <= 6) {
					openTab(e, chapters[index + 6].name);
					make_tab_active(index + 7);
				}
				if (e.key == 7) {
					openTab(e, "help");
					make_tab_active(14);
				} else if (e.key == 8) {
					openTab(e, "about");
					make_tab_active(15);
				} else if (e.key == 0) {
					openTab(e, "front_page");
					make_tab_active(e.key);
				}
			} else {
				if (e.key >= 1 && e.key <= 7) {
					openTab(e, chapters[e.key - 1].name);
					make_tab_active(e.key);
				}
				if (e.key == 8) {
					openTab(e, "help");
					make_tab_active(14);
				} else if (e.key == 9) {
					openTab(e, "about");
					make_tab_active(15);
				} else if (e.key == 0) {
					openTab(e, "front_page");
					make_tab_active(e.key);
				}
			}
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
		} else if (e.code == "KeyF") {
			show_correct();
		} else if (e.code == "KeyZ") {
			undo();
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
		document.getElementById("check").innerHTML = 'CHECK';
		document.getElementById("check").style.display = "none";
		document.getElementById("counter").style.display = "none";
		total_questions = 0;
		current_question = 1;
		cancel_selection(unsure);
		quizzing = false;
	}
	
	helper_resize("30vw", "35%", "16%");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	word_index = 0;
	kanji_index = 0;
	drawing_stack.splice(0, drawing_stack.length);
	isPainting = false;
	ctx.beginPath();
	document.getElementById("myModal").style.backgroundImage = "none";
	document.getElementById("quiz_time").style.display = "none";
	document.body.style.overflow = "auto";
	document.getElementById("left").style.display = "block";
	modal.style.display = "none";
	
}

toolbar.addEventListener('change', e => {
	if(e.target.id === 'line_width') {
        lineWidth = e.target.value;
    }
});

function clear_drawing() {
	drawing_stack.push(ctx.getImageData(0, 0, canvas.width, canvas.height)); 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function undo() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.putImageData(drawing_stack.pop(), 0, 0);
}

function go_left() {
	if (word_index > 0) {
		word_index--;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing_stack.splice(0, drawing_stack.length);
		var shown_kanji = curr_arr[kanji_index][word_index * 3];
		const change_this = document.getElementById("display_kanji");
		resize_kanji(shown_kanji);
		change_this.innerHTML = shown_kanji;
		document.getElementById("display_hiragana").innerHTML = curr_arr[kanji_index][(word_index * 3) + 1];
		document.getElementById("display_english").innerHTML = curr_arr[kanji_index][(word_index * 3) + 2];
	}
}

function go_right() {
	if (quizzing) {
		if (finished_indexes.size != quiz_list.length) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			choose_rng();
			if (random_word_index != -2 && finished_indexes.size == quiz_list.length) {
				close_modal();
				return;
			}
			if (random_word_index == -2) {
				random_word_index = 0;
			}
			let shown_kanji = curr_arr[quiz_list[random_kanji_index]][random_word_index * 3];
			chosen_words[random_kanji_index].push(curr_arr[quiz_list[random_kanji_index]][random_word_index * 3]);
			if (chosen_words[random_kanji_index][0] == chosen_words[random_kanji_index].length - 1) {
				finished_indexes.add(random_kanji_index);
			}
			resize_kanji(shown_kanji);
			let str = "";
			for (let i = 0; i < shown_kanji.length; i++) {
				str += "_";
			}
			if (shown_kanji.length > 5) {
				str = "";
			}
			document.getElementById("display_underline").innerHTML = str;
			document.getElementById("display_kanji").innerHTML = "";
			document.getElementById("display_hiragana").innerHTML = curr_arr[quiz_list[random_kanji_index]][(random_word_index * 3) + 1];
			document.getElementById("display_english").innerHTML = curr_arr[quiz_list[random_kanji_index]][(random_word_index * 3) + 2];
			current_question++;
			document.getElementById("check").innerHTML = 'CHECK';
			document.getElementById("counter").innerHTML = current_question + " / " + total_questions;
			drawing_stack.splice(0, drawing_stack.length);
		} else {
			close_modal();
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
			drawing_stack.splice(0, drawing_stack.length);
		}
	}
}

function resize_kanji(shown_kanji) {
	switch (shown_kanji.length) {
		case 1: 
			helper_resize("30vw", "35%", "15%");
			resize_underline("45vw", "38.5%", "25%", "0");
			break;
		case 2:
			helper_resize("28vw", "22%", "17%");
			resize_underline("35vw", "27.5%", "2%", "10.5vw");
			break;
		case 3:
			helper_resize("20vw", "22%", "24%");
			resize_underline("30vw", "24.5%", "0", "5vw");
			break;
		case 4:
			helper_resize("15vw", "22%", "30%");
			resize_underline("24vw", "23.5%", "-1%", "2.8vw");
			break;
		case 5:
			helper_resize("12vw", "22%", "32%");
			resize_underline("21vw", "23%", "-1%", "1.5vw");
			break;
		case 6:
			helper_resize("10vw", "22%", "34%");
			break;
		case 7:
			helper_resize("8vw", "24%", "36%");
			break;
		case 8:
			helper_resize("7vw", "24%", "36%");
			break;
		default:
			break;
	}
}

function helper_resize(font_size, left, top) {
	const change_this = document.getElementById("display_kanji");
	change_this.style.fontSize = font_size
	change_this.style.left = left;
	change_this.style.top = top;
	document.getElementById("line_width").value = lineWidth;
}

function resize_underline(font_size, left, bottom, letter_spacing) {
	const change_this = document.getElementById("display_underline");
	change_this.style.fontSize = font_size
	change_this.style.left = left;
	change_this.style.bottom = bottom;
	change_this.style.letterSpacing = letter_spacing;
}

function display_help(id, elem, arrow) {
	if (elem.style.textDecoration != "underline") {
		document.getElementById(id).style.display = "block";
		document.getElementById(arrow).innerHTML = "&#8681;";
		elem.style.textDecoration = "underline";
	} else {
		document.getElementById(id).style.display = "none";
		document.getElementById(arrow).innerHTML = "&#8680;";
		elem.style.textDecoration = "";
	}
}



const draw = (e) => {
	if(!isPainting) {
			return;
	}
	
	ctx.lineWidth = lineWidth;
	ctx.lineCap = 'round';
	ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
	ctx.stroke();
}

canvas.addEventListener('pointerdown', (e) => {
	drawing_stack.push(ctx.getImageData(0, 0, canvas.width, canvas.height)); //push image before drawing
	isPainting = true;
});

canvas.addEventListener('pointerup', e => {
	isPainting = false;
	ctx.stroke();
	ctx.beginPath();
});

canvas.addEventListener('pointermove', draw);
