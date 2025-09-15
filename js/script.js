const API_URL = "你的 Google Apps Script 網址"; 
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
