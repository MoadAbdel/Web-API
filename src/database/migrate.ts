import sequelize from './instance';

import User from './models/user.model';
import Category from './models/category.model';
import Product from './models/product.model';
import Order from './models/order.model';
import OrderHasProduct from './models/order_has_product.model';

async function migrate() {
  try {
    // Authenticate to the database
    await sequelize.authenticate();

    // Create tables
    await User.sync().then(() => console.log('Table \'users\' has been successfully created'));
    await Category.sync().then(() => console.log('Table \'categories\' has been successfully created'));
    await Product.sync().then(() => console.log('Table \'products\' has been successfully created', '\n'));
    await Order.sync().then(() => console.log('Table \'orders\' has been successfully created', '\n'));
    await OrderHasProduct.sync().then(() => console.log('Table \'orders_has_products\' has been successfully created', '\n'));
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
}

migrate();
