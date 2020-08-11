(function() {
    const tweetBtn=document.getElementById('tweet-btn');
    const timeLine=document.getElementById('tweet-display');
    const inputTweet=document.getElementById('tweet-input')
    tweetBtn.addEventListener('click', function() {
        const node=document.createElement('DIV');
        const textnode=document.createTextNode(inputTweet.value);
        node.appendChild(textnode);
        timeLine.insertBefore(node, timeLine.firstChild);
        document.getElementById('tweet-input').value='';
        tweetBtn.classList.removeAttribute('active');
        tweetBtn.disabled=true;
    });

    inputTweet.addEventListener('keyup', function(event) {
        if(event.target.value>0) {
            tweetBtn.classList.add('active');
            tweetBtn.disabled=false;
        } else {
            tweetBtn.classList.remove('active');
            tweetBtn.disabled=true;
        }
    });

})();