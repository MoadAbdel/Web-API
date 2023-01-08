import { DataTypes, Model } from 'sequelize'
import sequelize from '../instance'
import Product from './product.model';
import Order from './order.model';

class OrderHasProduct extends Model {}

OrderHasProduct.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
 },
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'orderHasProduct',
  tableName: 'orders_has_products',
  timestamps: false,
  underscored: true,
});

OrderHasProduct.removeAttribute('id');

Product.hasMany(OrderHasProduct, {
  foreignKey: {
    allowNull: false
  }
});
Order.hasMany(OrderHasProduct, {
  foreignKey: {
    allowNull: false
  }
});

export default OrderHasProduct;