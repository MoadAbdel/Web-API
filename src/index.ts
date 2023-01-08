import { Application, Request, Response } from 'express';
import Express from 'express';

const bodyParser = require('body-parser');

const app: Application = Express();
const port: number = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const categoryRoute = require('./routes/category.route')
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const orderRoute = require('./routes/order.route');

app.use("/category", categoryRoute);
app.use("/user/", userRoute);
app.use("/product/", productRoute);
app.use("/order/", orderRoute);

app.listen(port, () => {
  console.log(`Cleanier is listening on port ${port}`);
});
