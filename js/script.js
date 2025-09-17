// --- 這是您修改後的 script.js ---

const API_URL = "https://script.google.com/macros/s/AKfycbz3m96hBGXd17144khL3jse4qS-Wo4kGi6X1-RWUW48p71jx8cOPXPlK1LVkHj-4m-TLg/exec"; 
const PAGE_ID = window.location.pathname;

async function loadComments() {
  // 【修正】在函式內部也做一次檢查，更加保險
  const list = document.getElementById("commentList");
  if (!list) return; // 如果找不到列表元素，就直接結束函式

  let res = await fetch(`${API_URL}?page=${encodeURIComponent(PAGE_ID)}`);
  let comments = await res.json();
  list.innerHTML = "";
  comments.reverse().forEach(c => {
    let card = document.createElement("div");
    card.className = "comment-card";
    card.innerHTML = `
      <div class="comment-header">
        ${c.name}
        <span class="comment-time">${new Date(c.time).toLocaleString()}</span>
      </div>
      <div class="comment-message">${c.message}</div>
    `;
    list.appendChild(card);
  });
}

// 【修正】先取得元素，並檢查是否存在
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

// 【修正】只有在 commentForm 存在時，才綁定 submit 事件
if (commentForm) {
  commentForm.addEventListener("submit", async e => {
    e.preventDefault();

    // 【建議】增加按鈕禁用功能，防止重複提交
    const submitButton = commentForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = '傳送中...';

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // 【建議】使用 try...catch 來捕捉錯誤
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          page: PAGE_ID,
          name,
          message
        })
      });

      // 檢查回應是否成功
      if (!response.ok) {
        // 如果伺服器回傳錯誤 (例如 500)，就拋出錯誤
        throw new Error(`伺服器錯誤: ${response.statusText}`);
      }

      document.getElementById("name").value = ""; // 成功後也清空名字
      document.getElementById("message").value = "";
      loadComments();

    } catch (error) {
      // 如果 fetch 過程出錯 (網路問題或上面拋出的錯誤)
      console.error("提交留言失敗:", error);
      alert("抱歉，留言送出失敗，請稍後再試。"); // 提示使用者
    } finally {
      // 無論成功或失敗，最後都恢復按鈕的狀態
      submitButton.disabled = false;
      submitButton.textContent = '送出留言';
    }
  });
}

// 【修正】只有在 commentList 存在時，才執行載入留言的函式
if (commentList) {
  loadComments();
}

// ▼▼▼ 以下的程式碼現在可以順利執行了 ▼▼▼

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('nav-active');
        });

        mainNavUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavUl.classList.contains('nav-active')) {
                    mainNavUl.classList.remove('nav-active');
                }
            });
        });
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- 文末導覽區塊程式碼 ---

// 這是您的「文章資料庫」，您未來新增文章時需要手動在此更新。
const navigationData = {
    // 這裡的 'shikoku-udon' 必須和您在 HTML 的 data-category-id 中設定的字串完全相同
    'category-shikoku-udon': { 
        name: '讚岐烏龍麵巡禮', // 分類名稱，會顯示在按鈕上
        listUrl: 'category-shikoku-udon.html', // 這個分類的列表頁面 URL
        // 請依照您希望的閱讀順序，在此處排列文章
        posts: [
            { title: '讚岐烏龍麵種類簡介', url: 'udontype.html' },
            { title: 'はなまるうどん 田町店', url: 'hanamaruudon.html' },
            { title: '讚岐烏龍麵 めりけんや高松駅前店', url: 'Merikenya.html' },
            { title: 'はやし家製麺所　高松空港店', url: 'HayashiSeimenjo.html' },
            { title: 'さか枝うどん 南新町店', url: 'Sakaeda.html' },
          { title: '宮川製麵所', url: 'Mikakawa.html' },
          { title: 'さぬき麺業　高松空港店', url: 'SanukiMengyo.html' },
          { title: '手打烏龍麵 味庄', url: 'AjiSho.html' },
          { title: '小豆島渡輪-烏龍麵', url: 'ShodoshimaFerry.html' }
            // ...未來請繼續在此加入同分類的其他文章...
        ]
    },
    'category-taimeshi': { // 您可以為其他分類建立新的項目
        name: '愛媛鯛魚飯',
        listUrl: 'category-taimeshi.html',
        posts: [
            { title: '松山鯛魚飯 秋嘉 本店', url: 'akiyoshi.html' },
            { title: 'かどや 道後椿坂店', url: 'kadoya.html' }
        ]
    },
    'category-local-food': { // 您可以為其他分類建立新的項目
        name: '在地美食',
        listUrl: 'category-local-food.html',
        posts: [
            { title: '唐揚げ食堂 ごいち 本店', url: 'goichi.html' },
          { title: '広島風 お好焼き みよし 駅前店', url: 'miyoshi.html' },
          { title: 'ドン☆ぶり屋', url: 'donburiya.html' },
          { title: '香川の食堂 まいしょく家 兵庫町店', url: 'maishokuya.html' },
          { title: '徳島ラーメン麺王 高松駅前店', url: 'menou.html' },
          { title: '餃子の王将 高松南新町店', url: 'gyozanoosho.html' },
          { title: '骨付鳥-寄鳥味鳥', url: 'yoridorimidori.html' },
          { title: '瀬戸よ志', url: 'setoyoshi.html' }
        ]
    },    
    'category-coffee': { // 您可以為其他分類建立新的項目
        name: '咖啡與甜點',
        listUrl: 'category-coffee.html',
        posts: [
            { title: 'umie', url: 'umie.html' },
          { title: '南珈琲店', url: 'minami.html' },
          { title: '白鷺珈琲', url: 'shirasagi.html' },
          { title: 'The Garden of Wordsworth', url: 'wordsworth.html' },
          { title: '客美多(コメダ)珈琲店 松山山西店', url: 'komeda.html' },
          { title: 'Cafe Kuguri', url: 'kuguri.html' },
          { title: '小豆島橄欖霜淇淋', url: 'shodosimaice.html' },
          { title: '瀬戸内ジェラート MARE', url: 'setouchigelatomare.html' }
        ]
    },    
    'category-spot-food': { // 您可以為其他分類建立新的項目
        name: '觀光景點區美食',
        listUrl: 'category-spot-food.html',
        posts: [
            { title: '道の駅 内子フレッシュパークからり', url: 'karari.html' },
          { title: '愛媛県総合科学博物館餐廳', url: 'ehimescience.html' },
          { title: '四國水族館-kitchen setouchi', url: 'kitchensetouchi.html' },
          { title: 'エミフル MASAKI美食街', url: 'emifullmasaki.html' },
          { title: '道後溫泉商店街美食', url: 'dogoonsen.html' },
          { title: '讚岐高松祭屋台', url: 'yatai.html' }
        ]
    },   
    'okasi': { // 您可以為其他分類建立新的項目
        name: '零食大集合',
        listUrl: 'okasi.html',
        posts: [
           { title: '零食大集合', url: 'okasi.html' }
        ]
    },
      'shikoku-all': { // 您可以為其他分類建立新的項目
        name: '2025四國之旅',
        listUrl: '2025.html',
        posts: [
            { title: '讚岐烏龍麵巡禮', url: 'category-shikoku-udon.html' },
          { title: '愛媛鯛魚飯', url: 'category-taimeshi.html' },
          { title: '在地美食', url: 'category-local-food.html' },
          { title: '咖啡與甜點', url: 'category-coffee.html' },
          { title: '觀光景點區美食', url: 'category-spot-food.html' },
          { title: '零食大集合', url: 'okasi.html' }
        ]
    }
};

/**
 * 根據頁面上的 data 屬性，生成「上一篇/下一篇」及「返回列表」的導覽區塊
 */
function generatePostNavigation() {
    const article = document.querySelector('article.single-post-content');
    const navContainer = document.querySelector('.post-navigation');

    // 如果頁面上找不到必要的元素，就直接結束，避免錯誤
    if (!article || !navContainer) return;

    const categoryId = article.dataset.categoryId;
    const postId = article.dataset.postId;

    // 如果文章沒有設定 categoryId 或 postId，也結束
    if (!categoryId || !postId) return;

    const category = navigationData[categoryId];
    // 如果在 navigationData 中找不到對應的分類，也結束
    if (!category) return;

    // 在分類的文章列表中，找到目前這篇文章是第幾個
    const currentPostIndex = category.posts.findIndex(post => post.url === postId);
    if (currentPostIndex === -1) return;

    // 取得上一篇和下一篇文章的資料
    const prevPost = category.posts[currentPostIndex - 1];
    const nextPost = category.posts[currentPostIndex + 1];

    // --- 開始產生 HTML ---

    let prevLinkHTML = '<div class="nav-previous"></div>'; // 預設為空
    if (prevPost) {
        prevLinkHTML = `
            <div class="nav-previous">
                <a href="${prevPost.url}" rel="prev">
                    <span class="nav-title"><i class="fas fa-arrow-left"></i> 上一篇</span>
                    <span class="post-title">${prevPost.title}</span>
                </a>
            </div>
        `;
    }

    let nextLinkHTML = '<div class="nav-next"></div>'; // 預設為空
    if (nextPost) {
        nextLinkHTML = `
            <div class="nav-next">
                <a href="${nextPost.url}" rel="next">
                    <span class="nav-title">下一篇 <i class="fas fa-arrow-right"></i></span>
                    <span class="post-title">${nextPost.title}</span>
                </a>
            </div>
        `;
    }

    const backToListHTML = `
        <div class="nav-back-to-list">
            <a href="${category.listUrl}">
                <i class="fas fa-list-ul"></i> 返回 [${category.name}] 完整列表
            </a>
        </div>
    `;

    // 將組合好的 HTML 放入導覽區塊容器中
    navContainer.innerHTML = `
        <div class="nav-links">
            ${prevLinkHTML}
            ${nextLinkHTML}
        </div>
        ${backToListHTML}
    `;
}

// 在網頁的 DOM 結構都載入完成後，執行我們的導覽生成函式
document.addEventListener('DOMContentLoaded', generatePostNavigation);
