import express from 'express';
import db from './connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, async () => {
    await db();
  console.log(`Server is running on port ${PORT}`);
});