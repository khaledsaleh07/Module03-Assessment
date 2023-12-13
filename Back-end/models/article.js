import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Article = sequelize.define(
    "Article", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM("drama", "love", "comedy", "children"),
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "User",
                key: "id",
            },
        },
    },
    { timestamps: true }
);

export default Article;