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
        tags: ['愛媛', '大街道', '美食', '鯛魚飯']
    },
    {
        url: 'kadoya.html',
        image: 'images/20250815-kadoyatai.jpg',
        category: '愛媛鯛魚飯',
        title: 'かどや 道後椿坂店',
        excerpt: '位於道後溫泉商店街內，方便又美味。',
        date: '2025年9月17日',
        tags: ['愛媛', '道後溫泉', '美食', '鯛魚飯']
    },
    {
        url: 'goichi.html',
        image: 'images/20250817-goichi.jpg',
        category: '在地美食',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '炸雞酥脆多汁，白飯無限續加，高CP值飽足你的味蕾與心靈！',
        date: '2025年9月17日',
        tags: ['愛媛', '大街道', '美食', '唐揚雞', '定食']
    },
    {
        url: 'miyoshi.html',
        image: 'images/20250817-miyosi.jpg',
        category: '在地美食',
        title: '広島風 お好焼き みよし 駅前店',
        excerpt: '品嚐愛媛在地「三津浜燒」，感受傳統與創新的完美融合！',
        date: '2025年9月17日',
        tags: ['愛媛', '三津浜', '美食', '三津浜燒']
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
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '白鷺珈琲',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'shirasagi.html',
        image: 'images/20250815-sirasagi.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },
    {
        url: 'goichi.html',
        image: 'image2025/food/goichi_cover.jpg',
        category: '咖啡與甜點',
        title: '唐揚げ食堂 ごいち 本店',
        excerpt: '位於今治市的超人氣炸雞食堂，外皮酥脆肉質多汁，是當地人也愛排隊的平民美食。',
        date: '2025年9月18日',
        tags: ['愛媛', '美食', '炸雞', 'B級美食']
    },                
    {
        url: 'umie.html', // 假設您有這篇文章
        image: 'image2025/cafe/umie_cover.jpg',
        category: '咖啡與甜點',
        title: 'umie',
        excerpt: '高松港邊的倉庫改造咖啡廳，擁有絕佳的海景視野和獨特的文青氛圍，是享受悠閒下午的絕佳去處。',
        date: '2025年9月17日',
        tags: ['香川', '咖啡廳', '海景', '甜點']
    }
    // ... 在此處加入您所有的文章資訊 ...
];
