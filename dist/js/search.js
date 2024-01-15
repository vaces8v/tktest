const searchButton = document.querySelector('.searchbar-button a');
searchButton.addEventListener('click', function() {
    const searchQuery = document.querySelector('.input-search input[type="search"]').value;
    window.location.href = `libary.html?search=${encodeURIComponent(searchQuery)}`;
});
