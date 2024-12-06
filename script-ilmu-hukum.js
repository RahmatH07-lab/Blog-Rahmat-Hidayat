function searchTopicfunction searchTopics() {
    const input = document.getElementById('searchInputIlmu').value.toLowerCase();
    const topics = document.querySelectorAll('.law-card');

    topics.forEach(topic => {
        const title = topic.querySelector('h3').textContent.toLowerCase();
        const summary = topic.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || summary.includes(input)) {
            topic.style.display = '';
        } else {
            topic.style.display = 'none';
        }
    });
}

function goToLawPage(pageNumber) {
    const topicsPerPage = 6; // Jumlah topik per halaman
    const topics = document.querySelectorAll('.law-card');
    const totalPages = Math.ceil(topics.length / topicsPerPage);

    if (pageNumber > totalPages) return;

    topics.forEach((topic, index) => {
        if (
            index >= (pageNumber - 1) * topicsPerPage &&
            index < pageNumber * topicsPerPage
        ) {
            topic.style.display = '';
        } else {
            topic.style.display = 'none';
        }
    });
}
