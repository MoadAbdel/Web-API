import { DataTypes, Model } from 'sequelize'
import sequelize from '../instance'
import User from './user.model';

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  modelName: 'order',
  tableName: 'orders',
  timestamps: false,
  underscored: true,
});

User.hasOne(Order, {
  foreignKey: {
    allowNull: false
  }
})

export default Order;