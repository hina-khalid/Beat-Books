import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const LoadingComponent = () => {
    const quotes = [
        "\“A reader lives a thousand lives before he dies...The man who never reads lives only one.\” - George R.R.Martin",
        "\“Until I feared I would lose it, I never loved to read. One does not love breathing.\” - Harper Lee",
        "\“Never trust anyone who has not brought a book with them.\” - Lemony Snicket",
        "\“You can never get a cup of tea large enough or a book long enough to suit me.\” - C.S. Lewis",
        "\“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.\” - Groucho Marx",
        "\“Thats the thing about books. They let you travel without moving your feet.\” - Jhumpa Lahiri",
        "\“In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.\” - Mortimer J. Adler",
        "\“Reading one book is like eating one potato chip.\” - Diane Duane",
        "\“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.\” - Dr. Seuss",
        "\“Fill your house with stacks of books, in all the crannies and all the nooks.\” - Dr. Seuss"
    ];

    function randomQuote() {
        const random = Math.floor(Math.random() * quotes.length);
        return quotes[random];
    }

    return (
        <div className="loadingBox">
            <h1>Loading Beats</h1>
            <BeatLoader />
            <h3>{randomQuote()}</h3>
        </div>
    );
}


export default LoadingComponent;