import { DataTypes, Model } from 'sequelize'
import sequelize from '../instance'

class Category extends Model {}

Category.init({
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
  modelName: 'category',
  tableName: 'categories',
  timestamps: false,
  underscored: true,
});

export default Category;  