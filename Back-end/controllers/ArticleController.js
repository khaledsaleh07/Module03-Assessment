import Article  from "../models/article.js";
import bcrypt from "bcrypt";

// get all articles
const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//get single article by id
const getArticleById = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findByPk(id);
        if (article) {
            res.json(article);
        }
        else {
            res.status(404).json({ error: "article not found!" });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//create a new article
const createArticle = async (req, res) => {
    const articleData = req.body;
    try {
        const article = await Article.create(articleData);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json(error.errors[0].message);
    }
}

//update article
const updateArticle = async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;
    try {
        const article = await Article.findByPk(id);
        if(article) {
            Object.assign(article, updatedFields);
            await article.save();
            res.json(article);
        } else {
            res.status(404).json({ error: "article not found" });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }

}

// delete article by id
const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findByPk(id);
        if (article) {
            await article.destroy();
            res.status(204).json({ message: "article is deleted" })
        } else {
            res.status(404).json({error: "article not found" })
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
};