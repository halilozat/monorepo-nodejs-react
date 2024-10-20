import { Sequelize } from 'sequelize';

// Veritabanı bağlantı bilgileri burada tanımlanır
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres' // Kullandığınız veritabanına göre değişebilir
});

export default sequelize;
