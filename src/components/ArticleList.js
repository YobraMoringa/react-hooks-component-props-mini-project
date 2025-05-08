import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {

    const allPosts = posts.map(({
        id,
        title,
        preview,
        minutes,
        date }) => {
        return <Article key={id} title={title} preview={preview} date={date} minutes={minutes} />
    })

    return (
        <main>
            {allPosts}
        </main>
    )
}

export default ArticleList;