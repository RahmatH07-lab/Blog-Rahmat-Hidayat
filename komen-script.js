import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCXEByrfTGH-D7RpBbVQWDoQx7d1bgfH64",
    authDomain: "blog-rahmat-hidayat.firebaseapp.com",
    projectId: "blog-rahmat-hidayat",
    storageBucket: "blog-rahmat-hidayat.firebasestorage.app",
    messagingSenderId: "422260670210",
    appId: "1:422260670210:web:309beb5182f62af1890c1b",
    measurementId: "G-ZTE7H54P1G"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi untuk menyimpan komentar
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const komentar = document.querySelector('textarea[name="komentar"]').value;

    try {
        await addDoc(collection(db, "komentar"), {
            teks: komentar,
            timestamp: new Date()
        });
        alert("Komentar berhasil dikirim!");
        document.querySelector('textarea[name="komentar"]').value = ''; // Kosongkan textarea setelah mengirim komentar
        loadKomentar(); // Panggil fungsi untuk memuat ulang komentar
    } catch (e) {
        console.error("Error menambahkan dokumen: ", e);
    }
});

// Fungsi untuk memuat komentar
async function loadKomentar() {
    const q = query(collection(db, "komentar"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const komentarContainer = document.createElement('div');

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const p = document.createElement('p');
        p.textContent = data.teks;
        komentarContainer.appendChild(p);
    });

    const sectionKomentar = document.querySelector('.section form').parentElement;
    sectionKomentar.appendChild(komentarContainer);
}

// Panggil fungsi loadKomentar saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadKomentar);
