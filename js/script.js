// --- 這是最終修正後的 script.js ---

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
    },
    '2025all': {
        name: '2025四國行程總覽',
        listUrl: '../2025.html',
        posts: [
           { title: '2005四國之旅-第一天行程總覽', url: 'day01.html' },
           { title: '2005四國之旅-第二天行程總覽', url: 'day02.html' },
           { title: '2005四國之旅-第三天行程總覽', url: 'day03.html' },
           { title: '2005四國之旅-第四天行程總覽', url: 'day04.html' },
           { title: '2005四國之旅-第五天行程總覽', url: 'day05.html' },
           { title: '2005四國之旅-第六天行程總覽', url: 'day06.html' },
           { title: '2005四國之旅-第七天行程總覽', url: 'day07.html' },
           { title: '2005四國之旅-第八天行程總覽', url: 'day08.html' },
           { title: '2005四國之旅-第九天行程總覽', url: 'day09.html' },
           { title: '2005四國之旅-第十天行程總覽', url: 'day70.html' }
        ]
    },
    'category-jinja': {
        name: '神社與寺廟',
        listUrl: 'category-jinja.html',
        posts: [
           { title: '西の滝 龍水寺', url: 'ryusuitemple.html' },
           { title: '金刀比羅宮', url: 'kotohiragu.html' },
           { title: '屋島寺', url: 'yashimajitemple.html' },
           { title: '屋島神社', url: 'yashimajinja.html' },
           { title: '伊佐爾波神社', url: 'isaniwajinja.html' }
        ]
    },
    'oldstreets': {
        name: '古蹟與老街',
        listUrl: 'oldstreets.html',
        posts: [
           { title: '佛生山', url: 'busshozan.html' },
           { title: '內子町', url: 'uchiko.html' },
           { title: '三津濱老街', url: 'mitsuhama.html' }
        ]
    },
    'naturalscenery': {
        name: '自然風景與觀光景點',
        listUrl: 'naturalscenery.html',
        posts: [
           { title: '錢形砂繪', url: 'heneitongbao.html' },
           { title: '寒霞溪', url: 'kankakei.html' },
           { title: '天使之路', url: 'angelroad.html' },
           { title: '小豆島橄欖公園', url: 'shodoshimaolivepark.html' },
           { title: '屋島', url: 'yashima.html' }
        ]
    },
    'shoppingstreet': {
        name: '商店街與購物中心',
        listUrl: 'shoppingstreet.html',
        posts: [
           { title: '道後溫泉商店街', url: 'dogohaikarastreet.html' },
           { title: '高松中央商店街', url: 'takamatsushopping.html' }
        ]
    },
    'exhibitionvenues': {
        name: '展覽場館',
        listUrl: 'exhibitionvenues.html',
        posts: [
           { title: 'Jump 快閃店', url: 'jumpstore.html' },
           { title: '毛巾美術館', url: 'towelmuseum.html' },
           { title: '愛媛縣綜合科學博物館', url: 'ehimescience.html' },
           { title: '四國水族館', url: 'shikokuaquarium.html' }
        ]
    },
    '2025other': {
        name: '其他',
        listUrl: '2025other.html',
        posts: [
           { title: '小豆島渡輪', url: 'shodoshimaferry2.html' },
           { title: '讚岐高松祭(含浴衣)', url: 'sanukitakamatsumatsuri.html' },
           { title: '平成租車', url: 'heiseicar.html' }
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

    if (document.getElementById("commentList")) {
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
    if (faders.length > 0) {
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
    }

    // 5. 標籤頁切換功能
    if (document.querySelector('.content-selector')) {
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
        handleStateChange();
    }

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

        if (lightboxImg && foodImages.length > 0 && closeBtn) {
            foodImages.forEach(image => {
                image.addEventListener('click', () => {
                    lightbox.style.display = 'block';
                    lightboxImg.src = image.src;
                });
            });

            const closeLightbox = () => {
                lightbox.style.display = 'none';
            }
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (event) => {
                if (event.target === lightbox) {
                    closeLightbox();
                }
            });
        }
    }

    // 10. 照片輪播
    // 為每個輪播組件初始化
    const carousels = document.querySelectorAll('.photo-carousel');
    
    carousels.forEach((carousel) => {
        initCarousel(carousel);
    });
    
    // 初始化單個輪播
    function initCarousel(carouselElement) {
        let currentPhotoIndex = 0;
        const images = carouselElement.querySelectorAll('.carousel-image');
        const totalPhotos = images.length;
        
        // 更新總照片數
        const totalPhotosElement = carouselElement.querySelector('.total-photos');
        if (totalPhotosElement) {
            totalPhotosElement.textContent = totalPhotos;
        }
        
        // 手機版照片資訊顯示切換
        function togglePhotoInfo() {
            const currentPhotoInfo = images[currentPhotoIndex].querySelector('.photo-info');
            if (currentPhotoInfo) {
                currentPhotoInfo.classList.toggle('show');
            }
        }
        
        // 切換照片時隱藏資訊（手機版）
        function hidePhotoInfo() {
            const allPhotoInfos = carouselElement.querySelectorAll('.photo-info');
            allPhotoInfos.forEach(info => info.classList.remove('show'));
        }
        
        // 更新照片顯示
        function updatePhotoDisplay() {
            // 隱藏所有照片
            images.forEach(img => img.classList.remove('active'));
            
            // 顯示當前照片
            images[currentPhotoIndex].classList.add('active');
            
            // 動態調整容器高度以適應照片比例
            adjustCarouselHeight();
            
            // 更新縮略圖
            const thumbnails = carouselElement.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            if (thumbnails[currentPhotoIndex]) {
                thumbnails[currentPhotoIndex].classList.add('active');
            }
            
            // 更新指示器
            const indicators = carouselElement.querySelectorAll('.indicator');
            indicators.forEach(indicator => indicator.classList.remove('active'));
            if (indicators[currentPhotoIndex]) {
                indicators[currentPhotoIndex].classList.add('active');
            }
            
            // 更新計數器
            const currentPhotoElement = carouselElement.querySelector('.current-photo');
            if (currentPhotoElement) {
                currentPhotoElement.textContent = currentPhotoIndex + 1;
            }
            
            // 切換照片時隱藏照片資訊（手機版）
            hidePhotoInfo();
        }
        
        // 動態調整輪播高度以適應照片比例
        function adjustCarouselHeight() {
            const currentImage = images[currentPhotoIndex].querySelector('img');
            const carouselImagesContainer = carouselElement.querySelector('.carousel-images');
            
            if (currentImage && carouselImagesContainer) {
                function setHeight() {
                    // 確保圖片已載入且有尺寸資訊
                    if (currentImage.naturalWidth === 0 || currentImage.naturalHeight === 0) {
                        return;
                    }
                    
                    const containerWidth = carouselImagesContainer.offsetWidth;
                    const imageAspectRatio = currentImage.naturalWidth / currentImage.naturalHeight;
                    let newHeight = containerWidth / imageAspectRatio;
                    
                    // 限制高度在最小值和最大值之間
                    const minHeight = window.innerWidth <= 768 ? 200 : 300;
                    const maxHeight = window.innerWidth <= 768 ? 500 : 600;
                    
                    newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
                    carouselImagesContainer.style.height = newHeight + 'px';
                }
                
                // 如果圖片已經載入完成
                if (currentImage.complete && currentImage.naturalWidth > 0) {
                    setHeight();
                } else {
                    // 等待圖片載入完成
                    currentImage.addEventListener('load', setHeight, { once: true });
                }
            }
        }
        
        // 切換照片
        function changePhoto(direction) {
            currentPhotoIndex += direction;
            
            // 循環處理
            if (currentPhotoIndex >= totalPhotos) {
                currentPhotoIndex = 0;
            } else if (currentPhotoIndex < 0) {
                currentPhotoIndex = totalPhotos - 1;
            }
            
            updatePhotoDisplay();
        }
        
        // 直接跳轉到指定照片
        function goToPhoto(index) {
            currentPhotoIndex = index;
            updatePhotoDisplay();
        }
        
        // 自動播放功能（已停用）
        // let autoPlayInterval;
        // 
        // function startAutoPlay() {
        //     autoPlayInterval = setInterval(() => {
        //         changePhoto(1);
        //     }, 4000); // 每4秒切換一次
        // }
        // 
        // function stopAutoPlay() {
        //     clearInterval(autoPlayInterval);
        // }
        
        // 事件監聽器設定
        function setupEventListeners() {
            // 左右切換按鈕
            const prevBtn = carouselElement.querySelector('.carousel-btn.prev');
            const nextBtn = carouselElement.querySelector('.carousel-btn.next');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => changePhoto(-1));
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => changePhoto(1));
            }
            
            // 手機版資訊按鈕
            const infoToggle = carouselElement.querySelector('.info-toggle');
            if (infoToggle) {
                infoToggle.addEventListener('click', togglePhotoInfo);
            }
            
            // 縮略圖點擊
            const thumbnails = carouselElement.querySelectorAll('.thumbnail');
            thumbnails.forEach((thumb, index) => {
                thumb.addEventListener('click', () => goToPhoto(index));
            });
            
            // 指示器點擊
            const indicators = carouselElement.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => goToPhoto(index));
            });
            
            // 滑鼠懸停控制自動播放（已停用）
            // carouselElement.addEventListener('mouseenter', stopAutoPlay);
            // carouselElement.addEventListener('mouseleave', startAutoPlay);
            
            // 觸摸手勢支援（移動設備）
            let touchStartX = 0;
            let touchEndX = 0;
            
            carouselElement.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            carouselElement.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        changePhoto(1); // 向左滑動，下一張
                    } else {
                        changePhoto(-1); // 向右滑動，上一張
                    }
                }
            }
        }
        
        // 啟動輪播功能
        setupEventListeners();
        
        // 確保所有第一張照片都載入後才調整高度
        const firstImages = Array.from(carousels).map(c => c.querySelector('.carousel-image.active img'));
        
        Promise.all(
            firstImages.map(img => {
                if (img && img.complete && img.naturalWidth > 0) {
                    return Promise.resolve();
                } else if (img) {
                    return new Promise(resolve => {
                        img.addEventListener('load', resolve, { once: true });
                    });
                }
                return Promise.resolve();
            })
        ).then(() => {
            // 所有第一張圖片都載入完成後，調整高度
            adjustCarouselHeight();
            // 自動播放已停用
            // startAutoPlay();
        });
        
        // 視窗大小改變時重新調整高度
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                adjustCarouselHeight();
            }, 100);
        });
    }
    
    // 全域鍵盤控制（可選）
    // 如果你希望方向鍵只控制第一個輪播，可以加入這段
    /*
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const firstCarousel = carousels[0];
            if (firstCarousel) {
                const prevBtn = firstCarousel.querySelector('.carousel-btn.prev');
                const nextBtn = firstCarousel.querySelector('.carousel-btn.next');
                
                if (e.key === 'ArrowLeft' && prevBtn) {
                    prevBtn.click();
                } else if (e.key === 'ArrowRight' && nextBtn) {
                    nextBtn.click();
                }
            }
        }
    });
    */

    // 11. 影片播放器控制 S
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        const video = videoContainer.querySelector('.custom-video-player');
        const playPauseBtn = videoContainer.querySelector('.play-pause-btn');
        const playIcon = playPauseBtn.querySelector('i');

        // 點擊按鈕時，播放或暫停影片
        playPauseBtn.addEventListener('click', () => {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        });

        // 當影片開始播放時
        video.addEventListener('play', () => {
            videoContainer.classList.add('is-playing');
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        });

        // 當影片暫停時
        video.addEventListener('pause', () => {
            videoContainer.classList.remove('is-playing');
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        });

        // 當使用者使用原生控制器操作時，也能同步按鈕狀態
        video.addEventListener('playing', () => {
             videoContainer.classList.add('is-playing');
        });
    }
    // 影片播放器控制 E


});
