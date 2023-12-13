import express from 'express';

import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
} from "../controllers/ArticleController.js";

const router = express.Router();

router.get("/articles", getAllArticles);

router.get("/articles/:id", getArticleById);

router.post("/articles", createArticle);

router.patch("/articles/:id", updateArticle);

router.delete("/articles/:id", deleteArticle);

export default router;