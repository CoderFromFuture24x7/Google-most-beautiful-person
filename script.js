document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('search-box').value.toLowerCase().trim();

  const beautyQuestions = [
    "who is the most beautiful person on earth",
    "who is most beautiful person",
    "who is the most beautiful person"
  ];

  if (beautyQuestions.includes(query)) {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
  } else {
    alert('No results found for this query.');
  }
});
