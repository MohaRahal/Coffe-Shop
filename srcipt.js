
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
            });
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
        const searchIcon = document.getElementById('search-icon');
        const searchBox = document.getElementById('search-box');

        searchIcon.addEventListener('click', function () {
            searchBox.classList.toggle('show');
        });

        // Fechar a caixa de pesquisa quando clicar fora dela
        document.addEventListener('click', function (e) {
            if (!searchIcon.contains(e.target) && !searchBox.contains(e.target)) {
                searchBox.classList.remove('show');
            }
        });
    });



