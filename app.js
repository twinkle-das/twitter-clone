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
    let tweetArr = localStorage.getItem('tweet').split(' ') || [];
    const tweetBtn = document.querySelector('#tweet-btn');
    const inputTweet = document.querySelector('#tweet-input');
    const inputSearch = document.querySelector('#input-search');
    const searchResult = document.querySelector('#search-result');
    const deleteTweet = document.querySelector('.deleteBtn');


    function renderTweets() {
        if(localStorage.getItem('tweet') != '') {
            const node = document.createElement('DIV');
            const textnode = document.createTextNode(localStorage.getItem('tweet'));
            node.appendChild(textnode);
            timeLine.insertBefore(node, timeLine.firstChild);
            deleteTweet.style.display = 'block';
        } else {
            timeLine.innerText = '';
        }

    }

    // tweetBtn.addEventListener('click', function() {
    //     const node = document.createElement('DIV');
    //     const textnode = document.createTextNode(inputTweet.value);
    //     node.appendChild(textnode);
    //     timeLine.insertBefore(node, timeLine.firstChild);
    //     localStorage.setItem('tweet', inputTweet.value);
    //     inputTweet.value = '';
    //     tweetBtn.classList.remove('active');
    //     tweetBtn.disabled = true;
    // });

    renderTweets();

    tweetBtn.addEventListener('click', function() {
        tweetArr.push(inputTweet.value);
        localStorage.setItem('tweet', tweetArr);
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

    deleteTweet.addEventListener('click', function() {
        alert('Are you sure you want to delete?');
        if(localStorage.getItem('tweet')) {
            localStorage.setItem('tweet', []);
            renderTweets();
            deleteTweet.style.display = 'none';
        }
    })

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