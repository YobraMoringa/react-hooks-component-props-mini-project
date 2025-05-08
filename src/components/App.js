import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

/*
  App
    Header returns header>h1
    About returns img+p
    ArticleList return main
      Article return h3+small+p
*/