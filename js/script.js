const API_URL = "https://script.google.com/macros/s/AKfycbx4MDziXG5E6VSOa8vvjpEU_7tJRbaU57i3GpzgCCvAon5tTYibL3HETv3h9FD6om55eg/exec"; 
const PAGE_ID = window.location.pathname;  // 以網址路徑當成頁面ID

async function loadComments() {
  let res = await fetch(`${API_URL}?page=${encodeURIComponent(PAGE_ID)}`);
  let comments = await res.json();
  let list = document.getElementById("commentList");
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

document.getElementById("commentForm").addEventListener("submit", async e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      page: PAGE_ID,  // 🔹 存入頁面ID
      name,
      message
    })
  });

  document.getElementById("message").value = "";
  loadComments();
});

loadComments();

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('nav-active');
        });

        // 可選：點擊選單項目後自動關閉選單
        mainNavUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavUl.classList.contains('nav-active')) {
                    mainNavUl.classList.remove('nav-active');
                }
            });
        });
    }

    // 回到頂部按鈕的 JavaScript (如果你還沒有的話)
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // 當捲動超過 300px 時顯示按鈕
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
