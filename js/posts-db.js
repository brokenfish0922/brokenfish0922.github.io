const allPosts = [
    {
        url: 'udontype.html',
        image: 'images/udonintro.png',
        category: '讚岐烏龍麵巡禮',
        title: '讚岐烏龍麵種類簡介',
        excerpt: '釜玉、湯烏龍、醬油烏龍... 這麼多種類怎麼點？一篇搞懂讚岐烏龍麵的各種吃法！',
        date: '2025年9月15日',
        tags: ['香川', '美食', '烏龍麵']
    },
    {
        url: 'hanamaruudon.html',
        image: 'images/20250818-hanamaruudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: 'はなまるうどん 田町店',
        excerpt: '在地人也喜愛的連鎖烏龍麵店，價格實惠，選擇多樣，食物非常美味。',
        date: '2025年9月15日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'Merikenya.html',
        image: 'images/20250811-merikenyaudon.png',
        category: '讚岐烏龍麵巡禮',
        title: '讚岐烏龍麵 めりけんや高松駅前店',
        excerpt: '高松車站旁烏龍麵首選！朝食夜膳，旅人與當地人的美味補給站！',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'HayashiSeimenjo.html',
        image: 'images/20250820-hayasiudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: 'はやし家製麺所　高松空港店',
        excerpt: '麵條Q彈有嚼勁，炸物跟關東煮都很好吃。',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'Sakaeda.html',
        image: 'images/20250814-sakaedaudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: 'さか枝うどん 南新町店',
        excerpt: '商店街裡的平價烏龍麵天堂。',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'Mikakawa.html',
        image: 'images/20250819-miyakawaudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: '宮川製麵所',
        excerpt: '創業超過60年，是當地的老字號製麵所。',
        date: '2025年9月16日',
        tags: ['香川', '美食', '烏龍麵']
    },
    {
        url: 'SanukiMengyo.html',
        image: 'images/20250820-sanukiudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: 'さぬき麺業　高松空港店',
        excerpt: '麵業三代，堅持手作勁道烏龍麵。',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'AjiSho.html',
        image: 'images/20250813-ajisoudon.jpg',
        category: '讚岐烏龍麵巡禮',
        title: '手打烏龍麵 味庄',
        excerpt: '高松車站旁的晨光第一味。',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'ShodoshimaFerry.html',
        image: 'images/20250812-shipudon.png',
        category: '讚岐烏龍麵巡禮',
        title: '小豆島渡輪-烏龍麵',
        excerpt: '嗯~~肚子很餓可以吃一下。',
        date: '2025年9月16日',
        tags: ['香川', '高松', '美食', '烏龍麵']
    },
    {
        url: 'akiyoshi.html',
        image: 'images/20250816-akitai.jpg',
        category: '愛媛鯛魚飯',
        title: '松山鯛魚飯 秋嘉 本店',
        excerpt: '愛媛「鯛魚飯」雙重享受，極致美味！新鮮海鮮搭配道地風味，讓您筷子停不下來！',
        date: '2025年9月17日',
        tags: ['愛媛', "松山", '大街道', '美食', '鯛魚飯']
    },
    {
        url: 'kadoya.html',
        image: 'images/20250815-kadoyatai.jpg',
        category: '愛媛鯛魚飯',
        title: 'かどや 道後椿坂店',
        excerpt: '位於道後溫泉商店街內，方便又美味。',
        date: '2025年9月17日',
        tags: ['愛媛', "松山", '道後溫泉', '美食', '鯛魚飯']
    },
    {
        url: 'goichi.html',
        image: 'images/20250817-goichi.jpg',
        category: '在地美食',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '炸雞酥脆多汁，白飯無限續加，高CP值飽足你的味蕾與心靈！',
        date: '2025年9月17日',
        tags: ['愛媛', "松山", '大街道', '美食', '唐揚雞', '定食']
    },
    {
        url: 'miyoshi.html',
        image: 'images/20250817-miyosi.jpg',
        category: '在地美食',
        title: '広島風 お好焼き みよし 駅前店',
        excerpt: '品嚐愛媛在地「三津浜燒」，感受傳統與創新的完美融合！',
        date: '2025年9月17日',
        tags: ['愛媛', "松山", '三津浜', '美食', '三津浜燒']
    },
    {
        url: 'donburiya.html',
        image: 'images/20250814-donburi.jpg',
        category: '在地美食',
        title: 'ドン☆ぶり屋',
        excerpt: '份量滿點、價格實惠、口味多樣，新居濱在地冠軍丼飯，滿足你的大胃口！',
        date: '2025年9月17日',
        tags: ['愛媛', '美食', '丼飯', '土手燒丼']
    },
    {
        url: 'maishokuya.html',
        image: 'images/20250813-maishoku.jpg',
        category: '在地美食',
        title: '香川の食堂 まいしょく家 兵庫町店',
        excerpt: '高松必訪平價食堂，在地好米、新鮮海味，盡享道地家常味！',
        date: '2025年9月17日',
        tags: ['香川', '高松', '美食', '定食', '唐揚雞']
    },
    {
        url: '"menou.html',
        image: 'images/20250812-menou.png',
        category: '在地美食',
        title: '徳島ラーメン麺王 高松駅前店',
        excerpt: '豚骨醬油德島拉麵，免費生蛋，替玉多變，深夜至福首選！',
        date: '2025年9月17日',
        tags: ['香川', '德島', '高松', '美食', '拉麵', '餃子']
    },
    {
        url: 'gyozanoosho.html',
        image: 'images/20250819-kyoza.jpg',
        category: '在地美食',
        title: '餃子の王将 高松南新町店',
        excerpt: '方便又便宜，好吃C/P值高',
        date: '2025年9月17日',
        tags: ['香川', '高松', '美食', '餃子', '炒飯']
    },
    {
        url: 'yoridorimidori.html',
        image: 'images/20250811-ajitori.jpg',
        category: '在地美食',
        title: '骨付鳥-寄鳥味鳥',
        excerpt: '香川名物「骨付鳥」必吃！家庭式居酒屋溫馨氛圍，嫩雞香嫩多汁，老雞越嚼越香，高松在地聚餐首選！',
        date: '2025年9月17日',
        tags: ['香川', '高松', '美食', '骨付鳥', '居酒屋', '飲料', '啤酒']
    },
    {
        url: 'setoyoshi.html',
        image: 'images/20250812-sedoyosi.jpg',
        category: '在地美食',
        title: '瀬戸よ志',
        excerpt: '小豆島名物素麵，到此一遊可品嘗看看。',
        date: '2025年9月17日',
        tags: ['香川', '小豆島', '美食', '素麵']
    },
    {
        url: 'umie.html',
        image: 'images/20250811-umie.jpg',
        category: '咖啡與甜點',
        title: 'umie',
        excerpt: '北濱Alley裡復古工業風咖啡館，坐擁瀨戶內海海景，藝術與美食的完美融合，讓你忘卻時間流動的悠閒之地。',
        date: '2025年9月18日',
        tags: ['香川', '高松', '美食', '咖啡', '飲料', '甜點']
    },
    {
        url: 'minami.html',
        image: 'images/20250814-minami.jpg',
        category: '咖啡與甜點',
        title: '南珈琲店',
        excerpt: '品味昭和復古風情，咖啡與厚片吐司的極致享受！',
        date: '2025年9月18日',
        tags: ['香川', '高松', '美食', '咖啡', '飲料', '早餐']
    },
    {
        url: 'shirasagi.html',
        image: 'images/20250815-sirasagi.jpg',
        category: '咖啡與甜點',
        title: '白鷺珈琲',
        excerpt: '道後溫泉站前復古咖啡館，窗外電車美景，藝術甜點，網美必訪！',
        date: '2025年9月18日',
        tags: ['愛媛', '松山', '道後溫泉', '美食', '咖啡', '飲料', '早餐']
    },
    {
        url: 'wordsworth.html',
        image: 'images/20250816-The Garden of Wordsworth.jpg',
        category: '咖啡與甜點',
        title: 'The Garden of Wordsworth',
        excerpt: '讓人彷彿置身於英式庭園，以其優雅寧靜的氛圍和精緻的餐點，為訪客提供了一段遠離塵囂的悠閒時光。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '咖啡', '飲料', '早餐']
    },
    {
        url: 'komeda.html',
        image: 'images/20250818-komeda.jpg',
        category: '咖啡與甜點',
        title: '客美多(コメダ)珈琲店 松山山西店',
        excerpt: '以其寬敞舒適的空間、划算的活力早餐聞名，無論是單獨一人或與親友團體都能在此輕鬆享受愉快的咖啡時光。',
        date: '2025年9月19日',
        tags: ['愛媛', '松山', '美食', '咖啡', '飲料', '早餐']
    },
    {
        url: 'kuguri.html',
        image: 'images/20250820-Cafe Kuguri.jpg',
        category: '咖啡與甜點',
        title: 'Cafe Kuguri',
        excerpt: '坐落於住宅區中的人氣咖啡廳，以其時尚沉穩的裝潢、能讓人忘卻日常的悠閒氛圍，以及多樣又美味的餐點而廣受好評。',
        date: '2025年9月19日',
        tags: ['香川', '高松', '美食', '咖啡', '飲料', '早餐']
    },
    {
        url: 'shodosimaice.html',
        image: 'images/20250812-shodoice.jpg',
        category: '咖啡與甜點',
        title: '小豆島橄欖霜淇淋&檸檬果凍奶昔',
        excerpt: '小豆島橄欖公園特色甜點。',
        date: '2025年9月19日',
        tags: ['香川', '小豆島', '美食', '冰品', '甜點', '飲料']
    },
    {
        url: 'setouchigelatomare.html',
        image: 'images/20250813-MARE.jpg',
        category: '咖啡與甜點',
        title: '瀬戸内ジェラート MARE',
        excerpt: '活用瀨戶內及四國時令水果等在地食材為特色，提供多樣化美味義式冰淇淋而廣受好評。',
        date: '2025年9月19日',
        tags: ['香川', '高松', '美食', '冰品', '甜點']
    },
    {
        url: 'karari.html',
        image: 'images/20250816-karari.jpg',
        category: '觀光景點區美食',
        title: '道の駅 内子フレッシュパークからり',
        excerpt: '這是一間以「地產地銷」為理念的餐廳，訪客能在此品嚐到內子豬肉等在地特色食材所製成的料理，並享用附設的當地新鮮蔬菜沙拉吧，在窗外自然景色的陪伴下，愜意地享受內子町的美味。',
        date: '2025年9月19日',
        tags: ['愛媛', '道の駅', '美食', '定食', '冰品', '甜點']
    },
    {
        url: 'ehimescience.html',
        image: 'images/20250818-science.jpg',
        category: '觀光景點區美食',
        title: '愛媛県総合科学博物館餐廳',
        excerpt: '這是一間在科學博物館內，提供咖哩、烏龍麵、定食及輕食等多樣化餐點的餐廳，為參觀民眾提供了一個可以輕鬆用餐的方便選擇。',
        date: '2025年9月19日',
        tags: ['香川', '美食', '定食', '拉麵', '咖哩']
    },
    {
        url: 'kitchensetouchi.html',
        image: 'images/20250819-kitchen setouchi.jpg',
        category: '觀光景點區美食',
        title: '四國水族館-kitchen setouchi',
        excerpt: '提供融入了海豚、海獺等水族館生物元素的特色餐點而聞名，為遊客在參觀之餘，帶來了兼具視覺與味覺趣味的用餐體驗。',
        date: '2025年9月19日',
        tags: ['香川', '美食', '燒豚玉子飯', '咖哩', '拉麵']
    },
    {
        url: 'emifullmasaki.html',
        image: 'images/20250815-MASAKI.jpg',
        category: '觀光景點區美食',
        title: 'エミフル MASAKI美食街',
        excerpt: '提供多元化餐飲選擇的大型美食廣場，從日式、中式、韓式料理到漢堡、甜點等應有盡有，並設有適合親子共餐的座位區，能滿足不同年齡層顧客的用餐需求。',
        date: '2025年9月19日',
        tags: ['愛媛', '美食', '甜點', '鯛魚燒', '章魚燒', '餃子', '炒飯']
    },
    {
        url: 'dogoonsen.html',
        image: 'images/20250815-onsenstreet.jpg',
        category: '觀光景點區美食',
        title: '道後溫泉商店街美食',
        excerpt: '道後溫泉商店街是一條充滿活力的拱廊街，匯集了各式在地小吃與美食，讓人在享受溫泉文化之餘，也能透過邊走邊吃的方式，體驗道後獨有的魅力。',
        date: '2025年9月19日',
        tags: ['愛媛', '松山', '道後溫泉', '美食', '甜點', '冰品', '蜜柑', '果汁']
    },
    {
        url: 'yatai.html',
        image: 'images/20250813-yatai.jpg',
        category: '觀光景點區美食',
        title: '讚岐高松祭屋台',
        excerpt: '讚岐高松祭的美食屋台提供了一個品嚐當地特色與感受祭典熱鬧氛圍的絕佳機會，從經典的炒麵、章魚燒，到香川特有的讚岐烏龍麵、骨付鳥等在地美食應有盡有，讓參與者能在享受花火與遊行之餘，也能大飽口福。',
        date: '2025年9月19日',
        tags: ['香川', '高松', '祭典', '屋台', '甜點', '冰品', '炒麵', '烤肉']
    },
    {
        url: 'okasi.html',
        image: 'images/okasi.png',
        category: '零食大集合',
        title: '零食大集合',
        excerpt: '在自助旅行的篇章中，「當地零食」扮演著一個低調卻極其重要的角色，它不僅是填補行程空檔與飢餓的選擇，更是一把能輕易開啟在地生活樣貌的鑰匙，以及製造個人專屬回憶的媒介。',
        date: '2025年9月18日',
        tags: ['香川', '高松', '小豆島', '愛媛', '松山', '道後溫泉', '美食', '甜點', '飲料', '麵包', '超市', '蜜柑', '果汁']
    }
    // ... 在此處加入您所有的文章資訊 ...
];
