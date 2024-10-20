import { DataTypes, Model } from 'sequelize';
import sequelize from './database'; // Yapılandırdığınız sequelize instance'ınızı import edin

// Book modeli için bir interface tanımlayın
interface BookAttributes {
    id?: number;
    title: string;
    author: string;
    publishDate: Date;
    pageCount: number;
    genres: string[];
    description?: string;
}

// Sequelize modelini genişleten Book sınıfı
class BookModel extends Model<BookAttributes> implements BookAttributes {
    public id!: number;
    public title!: string;
    public author!: string;
    public publishDate!: Date;
    public pageCount!: number;
    public genres!: string[];
    public description?: string;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

BookModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.DATEONLY, // Sadece tarih bilgisi
        allowNull: false
    },
    pageCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genres: {
        type: DataTypes.ARRAY(DataTypes.STRING), // PostgreSQL için ARRAY tipi
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'books'
});

export default BookModel;
