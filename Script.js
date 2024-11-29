// A// Array untuk menyimpan komentar yang dimoderasi
let pendingComments = [];
let approvedComments = [];

// Tangani pengiriman formulir komentar
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil data dari formulir
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // Simpan komentar ke daftar moderasi
  pendingComments.push({ username, email, comment });

  // Beri tahu pengguna
  alert('Komentar Anda telah dikirim untuk moderasi.');
  
  // Kosongkan formulir
  this.reset();

  console.log('Pending comments:', pendingComments);
});

// Fungsi untuk menyetujui komentar
function approveComment(index) {
  const approvedComment = pendingComments.splice(index, 1)[0];
  approvedComments.push(approvedComment);
  renderApprovedComments();
}

// Tampilkan komentar yang disetujui
function renderApprovedComments() {
  const approvedCommentsList = document.getElementById('approvedComments');
  approvedCommentsList.innerHTML = ''; // Kosongkan daftar sebelumnya
  
  approvedComments.forEach(comment => {
    const listItem = document.createElement('li');
    listItem.textContent = `${comment.username}: ${comment.comment}`;
    approvedCommentsList.appendChild(listItem);
  });
}￼Enter
let currentUser = null;

// Tangani login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;

  if (username) {
    currentUser = username;
    document.getElementById('loginStatus').textContent = `Selamat datang, ${currentUser}!`;
    alert(`Anda telah login sebagai ${currentUser}.`);
  }
});
