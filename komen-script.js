import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXEByrfTGH-D7RpBbVQWDoQx7d1bgfH64",
    authDomain: "blog-rahmat-hidayat.firebaseapp.com",
    projectId: "blog-rahmat-hidayat",
    storageBucket: "blog-rahmat-hidayat.firebasestorage.app",
    messagingSenderId: "422260670210",
    appId: "1:422260670210:web:309beb5182f62af1890c1b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("komentarForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah refresh halaman
    submitComment();
});

async function submitComment() {
    const commentText = document.getElementById("commentInput").value;
    if (commentText.trim() === "") return alert("Komentar tidak boleh kosong!");

    try {
        await addDoc(collection(db, "comments"), {
            text: commentText,
            timestamp: serverTimestamp()
        });
        document.getElementById("commentInput").value = ""; // Reset input
        loadComments(); // Refresh komentar
    } catch (error) {
        console.error("Error: ", error);
    }
}

function loadComments() {
    document.getElementById("commentsList").innerHTML = ""; // Bersihkan list dulu

    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            const comment = doc.data().text;
            document.getElementById("commentsList").innerHTML += `<div class="comment">${comment}</div>`;
        });
    });
}

loadComments(); // Panggil saat halaman dibuka
