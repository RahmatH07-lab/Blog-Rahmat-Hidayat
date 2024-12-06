function searchArticlfunction searchArticles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.news-card');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const summary = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || summary.includes(input)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}

function goToPage(pageNumber) {
    const articlesPerPage = 6; // Jumlah artikel per halaman
    const articles = document.querySelectorAll('.news-card');
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    if (pageNumber > totalPages) return;

    articles.forEach((article, index) => {
        if (
            index >= (pageNumber - 1) * articlesPerPage &&
            index < pageNumber * articlesPerPage
        ) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}￼Enter
