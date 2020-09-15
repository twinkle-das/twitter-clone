const twitterUsers=[
    'Lusan Das',
    'Marzia Kjellberg',
    'PewDiePie',
    'Virat Kohli',
    'Steve Jobs',
    'Mark Zukerberg',
    'Marie Curie',
    'Arnab Goswami',
    'Bernie',
    'Cinderella',
    'Princess Diana',
    'Charles Darwin',
    'Danielle',
    'Queen Elizabeth',
    'ShahRukh Khan',
    'Kanika Sarkar',
    'Niranjan Sarkar',
    'Manish Singh Rajput',
    'Leonardo Di Caprio',
    'Rohit Sharma'
];

(function() {
    const tweetBtn = document.querySelector('#tweet-btn');
    const timeLine = document.querySelector('#tweet-display');
    const inputTweet = document.querySelector('#tweet-input');
    const inputSearch = document.querySelector('#input-search');
    const searchResult = document.querySelector('#search-result');

    tweetBtn.addEventListener('click', function() {
        const node = document.createElement('DIV');
        const textnode = document.createTextNode(inputTweet.value);
        node.appendChild(textnode);
        timeLine.insertBefore(node, timeLine.firstChild);
        document.getElementById('tweet-input').value = '';
        tweetBtn.classList.remove('active');
        tweetBtn.disabled = true;
    });

    inputTweet.addEventListener('keyup', function(e) {
        if(e.target.value !== '') {
            tweetBtn.classList.add('active');
            tweetBtn.disabled = false;
        } else {
            tweetBtn.classList.remove('active');
            tweetBtn.disabled = true;
        }
    });

    inputSearch.addEventListener('keyup', function(event) {
        let searchQuery = event.target.value;
        let filteredResults = twitterUsers.filter((twitterUser) => {
            return twitterUser.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
        });
        searchResult.innerHTML = '';
        filteredResults.forEach((result) => {
            const searchNode = document.createElement('DIV');
            searchNode.innerHTML = result;
            searchResult.appendChild(searchNode);
        });
        if(searchQuery.toLowerCase() !== '') {
            searchResult.classList.add('visible');
        } else {
            searchResult.classList.remove('visible');
        }
    })

})();