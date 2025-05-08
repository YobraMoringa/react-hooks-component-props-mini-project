import React from "react";

function Article({
    title,
    preview,
    minutes,
    date = "January 1, 1970",
}) {
    // Bonus Feature: Minutes to Read
    function postReadDuration() {
        if (minutes < 30) {
            const coffee = "☕";
            const coffeeArray = [];
            // ADD KEY FOR THIS ARRAY
            for (let i = 0; i < Math.ceil(minutes / 5); i++) {
                coffeeArray.push(coffee)
            }
            return coffeeArray.map((coffeeEmoji) => {
                return coffeeEmoji;
            })

        } else {
            Math.ceil(minutes / 10)
            const bentoBox = "🍱";
            const bentoBoxArray = [];
            // ADD KEY FOR THIS ARRAY
            for (let i = 0; i < Math.ceil(minutes / 10); i++) {
                bentoBoxArray.push(bentoBox);
            }
            return bentoBoxArray.map((bentoBoxEmoji) => {
                return bentoBoxEmoji;
            });
        }
    }

    return (
        <article>
            <h3>{title}</h3>

            <small>
                {`${date} . `}
                {postReadDuration()}
                {`${minutes} minutes read`}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;