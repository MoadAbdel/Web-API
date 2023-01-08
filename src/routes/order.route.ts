import {
    Router,
    Request,
    Response
} from "express";

import Order from "../database/models/order.model";
import orderController from "../controllers/order.controller";

const router = Router();

router.post('/', async (request: Request, response: Response) => {
    await orderController.create(request, response)
});

router.get('/', async (request: Request, response: Response) => {
    await orderController.getAll(request, response)
});

router.get('/:id', async (request: Request, response: Response) => {
    await orderController.getOne(Number(request.params.id), request, response)
});

router.patch('id', async (request: Request, response, Response) => {
    await orderController.edit(request, response)
});

router.delete('/', async (request: Request, response: Response) => {
    await orderController.del(Number(request.params.id), request, response)
});

module.exports = router;