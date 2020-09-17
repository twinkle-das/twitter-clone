const twitterUsers = [
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
    let timeLine = document.querySelector('#tweet-display');
    let tweetArr = JSON.parse(localStorage.getItem('tweet')) || [];
    const tweetBtn = document.querySelector('#tweet-btn');
    const inputTweet = document.querySelector('#tweet-input');
    const inputSearch = document.querySelector('#input-search');
    const searchResult = document.querySelector('#search-result');

    function renderTweets() {
        timeLine.innerHTML = ''
        if(localStorage.getItem('tweet') != '') {
            tweetArr.forEach((tweet) => {
                const node = document.createElement('DIV');
                node.innerText = tweet.value;
                timeLine.insertBefore(node, timeLine.firstChild);})
        } else {
            const node = document.createElement('DIV');
            node.innerText = inputTweet.value;
            timeLine.insertBefore(node, timeLine.firstChild);
        }
    }

    renderTweets();

    tweetBtn.addEventListener('click', function() {
        tweetArr.push({
            id: tweetArr.length + 1,
            value: inputTweet.value
        })
        localStorage.setItem('tweet', JSON.stringify(tweetArr));
        console.log(tweetArr)
        renderTweets();
        inputTweet.value = '';
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