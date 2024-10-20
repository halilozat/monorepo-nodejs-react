import express from 'express';
import config from './config';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
