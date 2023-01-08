import { DataTypes, Model } from 'sequelize'
import sequelize from '../instance'

import Category from './category.model';


class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true

  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: true,
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    allowNull: true,
  },
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'product',
  tableName: 'products',
  timestamps: false,
  underscored: true,
});

Category.hasMany(Product, {
  foreignKey: {
    allowNull: false
  }
});

export default Product;