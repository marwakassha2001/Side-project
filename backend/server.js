// In your main application file (e.g., server.js)
import sequelize from "./config/db.js";
import express from "express";
import cors from "cors";
import db from './models/index.js';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import AuthRoutes from './routes/AuthRoutes.js';
import MemeRoutes from './routes/MemeRouts.js';

dotenv.config();

const app = express();



// Sync the models only once when the application starts
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Failed to synchronize database: ", error);
  });

const port = process.env.PORT || 4000;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:4000",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/auth',AuthRoutes);
app.use('/meme',MemeRoutes)
app.listen(port, async () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
  try {
      await db.sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await db.sequelize.sync();
      console.log('Database synced!');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
})