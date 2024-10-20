import { Router } from 'express';
import BookController from '../controllers/BookController';

const bookRoutes = Router();

bookRoutes.get('/', BookController.getAllBooks);
bookRoutes.post('/', BookController.createBook);
bookRoutes.put('/:id', BookController.updateBook);
bookRoutes.delete('/:id', BookController.deleteBook);

export default bookRoutes;
