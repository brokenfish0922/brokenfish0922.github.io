// --- 這是修正後的 script.js ---

const API_URL = "https://script.google.com/macros/s/AKfycbz3m96hBGXd17144khL3jse4qS-Wo4kGi6X1-RWUW48p71jx8cOPXPlK1LVkHj-4m-TLg/exec"; 
const PAGE_ID = window.location.pathname;

// --- 全域函式定義 ---

async function loadComments() {
  const list = document.getElementById("commentList");
  if (!list) return;

  try {
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
  } catch (error) {
    console.error("載入留言失敗:", error);
  }
}

function generateTagPage() {
    const tagTitleElement = document.getElementById('tag-title');
    const tagDescriptionElement = document.getElementById('tag-description');
    const postsContainer = document.getElementById('posts-container');

    if(!tagTitleElement || !tagDescriptionElement || !postsContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const tagName = urlParams.get('tag');

    if (!tagName) {
        tagTitleElement.textContent = '找不到標籤';
        tagDescriptionElement.textContent = '請確認您的連結是否正確。';
        return;
    }
    
    // 假設 allPosts 變數存在於另一個 <script> 標籤中
    if (typeof allPosts !== 'undefined') {
        const filteredPosts = allPosts.filter(post => post.tags.includes(tagName));

        document.title = `標籤: ${tagName} - 47制霸中`;
        tagTitleElement.innerHTML = `<i class="fas fa-tag"></i> 標籤: ${tagName}`;
        tagDescriptionElement.textContent = `為您找到 ${filteredPosts.length} 篇與「${tagName}」相關的文章。`;
        
        if (filteredPosts.length > 0) {
            let postsHTML = '';
            filteredPosts.forEach(post => {
                postsHTML += `
                    <div class="post-card">
                        <a href="${post.url}" class="post-card-link-wrapper">
                            <img src="${post.image}" alt="${post.title}" class="post-card-image">
                            <div class="post-card-content">
                                <span class="post-card-category">${post.category}</span>
                                <h3>${post.title}</h3>
                                <p class="post-card-excerpt">${post.excerpt}</p>
                                <div class="post-card-meta">
                                    <span class="date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                                    <span class="read-more">閱讀更多 &rarr;</span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
            });
            postsContainer.innerHTML = postsHTML;
        } else {
            postsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">抱歉，目前沒有與這個標籤相關的文章。</p>';
        }
    }
}

const navigationData = {
    'category-shikoku-udon': { 
        name: '讚岐烏龍麵巡禮',
        listUrl: 'category-shikoku-udon.html',
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
        ]
    },
    'category-taimeshi': {
        name: '愛媛鯛魚飯',
        listUrl: 'category-taimeshi.html',
        posts: [
            { title: '松山鯛魚飯 秋嘉 本店', url: 'akiyoshi.html' },
            { title: 'かどや 道後椿坂店', url: 'kadoya.html' }
        ]
    },
    'category-local-food': {
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
    'category-coffee': {
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
    'category-spot-food': {
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
    'okasi': {
        name: '零食大集合',
        listUrl: 'okasi.html',
        posts: [
           { title: '零食大集合', url: 'okasi.html' }
        ]
    }
};

function generatePostNavigation() {
    const article = document.querySelector('article.single-post-content');
    const navContainer = document.querySelector('.post-navigation');

    if (!article || !navContainer) return;

    const categoryId = article.dataset.categoryId;
    const postId = article.dataset.postId;

    if (!categoryId || !postId) return;

    const category = navigationData[categoryId];
    if (!category) return;

    const currentPostIndex = category.posts.findIndex(post => post.url === postId);
    if (currentPostIndex === -1) return;

    const prevPost = category.posts[currentPostIndex - 1];
    const nextPost = category.posts[currentPostIndex + 1];

    let prevLinkHTML = '<div class="nav-previous"></div>';
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

    let nextLinkHTML = '<div class="nav-next"></div>';
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

    navContainer.innerHTML = `
        <div class="nav-links">
            ${prevLinkHTML}
            ${nextLinkHTML}
        </div>
        ${backToListHTML}
    `;
}

// --- 唯一的 DOMContentLoaded 監聽器 ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. 留言板功能初始化
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");

    if (commentForm) {
      commentForm.addEventListener("submit", async e => {
        e.preventDefault();
        const submitButton = commentForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = '傳送中...';
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        try {
          const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ page: PAGE_ID, name, message })
          });
          if (!response.ok) {
            throw new Error(`伺服器錯誤: ${response.statusText}`);
          }
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          loadComments();
        } catch (error) {
          console.error("提交留言失敗:", error);
          alert("抱歉，留言送出失敗，請稍後再試。");
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = '送出留言';
        }
      });
    }

    if (commentList) {
      loadComments();
    }

    // 2. 導覽列漢堡選單
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

    // 3. 回到頂部按鈕
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. 滾動淡入動畫
    const faders = document.querySelectorAll('.fade-in-section, .timeline-item');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 5. 【核心修正】標籤頁切換功能
    function showTab(contentType) {
        const validTabs = ['itinerary', 'food', 'sights', 'others'];
        if (!validTabs.includes(contentType)) {
            contentType = 'itinerary';
        }

        document.querySelectorAll('.content-area').forEach(area => area.classList.remove('active'));
        document.querySelectorAll('.selector-btn').forEach(btn => btn.classList.remove('active'));

        const activeContent = document.getElementById(contentType);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        const activeButton = document.querySelector(`.selector-btn[data-content-type='${contentType}']`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    function handleStateChange() {
        const contentType = window.location.hash.substring(1) || 'itinerary';
        showTab(contentType);
    }

    document.querySelectorAll('.selector-btn').forEach(button => {
        const onclickValue = button.getAttribute('onclick');
        if (onclickValue) {
            const match = onclickValue.match(/'(.*?)'/);
            if (match && match[1]) {
                const contentType = match[1];
                button.dataset.contentType = contentType;
                button.removeAttribute('onclick');
                button.addEventListener('click', () => {
                    window.location.hash = contentType;
                });
            }
        }
    });

    window.addEventListener('hashchange', handleStateChange);
    handleStateChange(); // 頁面初次載入時執行

    // 6. 自動生成文章目錄
    function generateTOC() {
        const content = document.querySelector('.entry-content');
        const tocContainer = document.getElementById('toc-container');
        if (!content || !tocContainer) return;

        const headings = content.querySelectorAll('h3');
        if (headings.length < 2) {
             tocContainer.style.display = 'none';
             return;
        }

        let tocHTML = '<h4><i class="fas fa-list-ol"></i> 本文目錄</h4><ul>';
        headings.forEach((heading, index) => {
            const id = 'toc-heading-' + index;
            heading.setAttribute('id', id);
            tocHTML += `<li><a href="#${id}">${heading.textContent}</a></li>`;
        });
        tocHTML += '</ul>';
        tocContainer.innerHTML = tocHTML;
    }
    generateTOC();
    
    // 7. 標籤頁面內容生成
    if (document.getElementById('posts-container')) {
        generateTagPage();
    }

    // 8. 文末上下頁導覽
    generatePostNavigation();

    // 9. 圖片燈箱
    const lightbox = document.getElementById('image-lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const foodImages = document.querySelectorAll('.food-card-image-wrapper img');
        const closeBtn = document.querySelector('.lightbox-close');

        foodImages.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = image.src;
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 10. 照片輪播
    const carousel = document.getElementById('aquarium-carousel');
    if (carousel) {
        let currentPhotoIndex = 0;
        const photoImages = carousel.querySelectorAll('.carousel-image');
        const totalPhotos = photoImages.length;
        if (totalPhotos > 0) {
            // ... (此處省略輪播功能的詳細程式碼，因為它很長且與目前問題無關)
            // 確保您的照片輪播完整邏輯放在這裡
        }
    }
});
