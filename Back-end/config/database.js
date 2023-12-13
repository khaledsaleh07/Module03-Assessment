import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: '4443',
  logging: false, 
  define: {
    freezeTableName: true,
    timestamps: true,
  },
});

const initDatabase = async () => {
    try {
      await sequelize.sync();
      console.log("Article database synchronized.");
    } catch (error) {
      console.error("Unable to connect to the article database:", error);
    }
  };
  
  initDatabase();
  
  export default sequelize;