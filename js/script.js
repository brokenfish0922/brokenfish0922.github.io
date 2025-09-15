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
