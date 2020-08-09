// ( function () {
//     const tweet = document.getElementById( 'tweet-input' );
//     tweet.addEventListener( 'change', () => {
//         document.getElementById( 'tweet-btn' ).disabled = !(tweet-input).checkValidity();
//     } );
    
// } )();

// function enableBtn() {
//     if ( document.getElementById( 'tweet-input' ).value !== '' ) {
//         document.getElementById( 'tweet-btn' ).disabled = false;
//     } else {
//         document.getElementById( 'tweet-btn' ).disabled = true;
//     }

//let btnCursor = document.getElementById( "tweet-btn" ).style.cursor;

// if ( tweet-input.value != '' ) {
//     document.getElementById( 'tweet-btn' ).style.cursor = none;
// } else {
//     document.getElementById( 'tweet-btn' ).style.cursor = none;
// }

( function () {
    document.getElementById( 'tweet-btn' )
        .addEventListener( 'click', function (myTweet) {
            myTweet = document.getElementById( 'tweet-input' ).value;
            let node = document.createElement( 'DIV' );
            let textnode = document.createTextNode( myTweet );
            node.appendChild( textnode );
            // document.getElementById( "tweet-display" ).appendChild( node );
            element = document.getElementById( 'tweet-display' );
            element.insertBefore( node, element.firstChild );
            document.getElementById( 'tweet-input' ).value = '';
        } );
} )();