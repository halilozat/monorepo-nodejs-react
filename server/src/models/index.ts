import sequelize from './database';
import Book from './BookModel';

// Veritabanı ile senkronizasyon
sequelize.sync({ force: true }).then(() => {
    console.log('Tablolar başarıyla oluşturuldu.');
    // Örnek veri eklemek
    return Book.create({
        title: 'Example Book',
        author: 'John Doe',
        publishDate: new Date(),
        pageCount: 300,
        genres: ['Fiction', 'Adventure'],
        description: 'This is an example book.'
    });
}).then(book => {
    console.log('Kitap başarıyla eklendi:', book.toJSON());
}).catch(error => {
    console.error('Bir hata oluştu:', error);
});
