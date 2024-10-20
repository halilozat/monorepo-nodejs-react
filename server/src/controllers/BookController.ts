import { Request, Response } from 'express';
import { Book } from '../models/book';

class BookController {
    /**
     * GET all books
     */
    public async getAllBooks(req: Request, res: Response) {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books', error });
        }
    }

    /**
     * GET a single book by ID
     */
    public async getBook(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const book = await Book.findByPk(id);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error finding the book', error });
        }
    }

    /**
     * POST a new book
     */
    public async createBook(req: Request, res: Response) {
        const { name, userId } = req.body;
        try {
            const newBook = await Book.create({ name, userId });
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: 'Error creating new book', error });
        }
    }

    /**
     * UPDATE a book by ID
     */
    public async updateBook(req: Request, res: Response) {
        const { id } = req.params;
        const { name, userId } = req.body;
        try {
            const book = await Book.findByPk(id);
            if (book) {
                book.name = name;
                book.userId = userId;
                await book.save();
                res.status(200).json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating the book', error });
        }
    }

    /**
     * DELETE a book by ID
     */
    public async deleteBook(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const book = await Book.findByPk(id);
            if (book) {
                await book.destroy();
                res.status(200).json({ message: 'Book deleted' });
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting the book', error });
        }
    }
}

export default new BookController();