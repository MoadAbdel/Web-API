import { DataTypes, Model } from 'sequelize'
import sequelize from '../instance'

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true

  },
  firstname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true

  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true

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
  modelName: 'user',
  tableName: 'users',
  timestamps: false,
  underscored: true,
  defaultScope: {
    attributes: {
      exclude: ['password']
    }
  }
});

export default User;