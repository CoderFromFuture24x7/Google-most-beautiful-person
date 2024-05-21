document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const query = document.getElementById('search-box').value.toLowerCase();
    
    if (query === 'who is the most beautiful person on earth') or (query === 'Who is the most beautiful person on earth') or (query.toLowerCase() === 'who is most beautiful person on earth') or (query.toLowerCase() === 'who is the most beautiful person') or (query.toLowerCase() === 'who is most beautiful person'){
        document.querySelector('.container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
    } else {
        alert('No results found for this query.');
    }
});
