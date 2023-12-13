import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css"

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/articles/");
                setArticles(response.data);
            } catch (error) {
                console.log("error: ", error);
            }
        }
        fetchArticles();
    },[articles])
    return (
        <div className="main-div">
            {articles.length > 0 && (
                <div className="articles-div">
                    {articles.map(article => (
                        <div className="single-article" key={article.id}>
                            <h2>{article.title}</h2>
                            <h3>{article.author}</h3>
                            <p>{article.body}</p>
                            <img src={article.imageUrl} className="article-img"/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Articles;