import {
    Request,
    Response
} from "express";
import orderService from "../services/order.service";
import Order from "../database/models/order.model";

async function create(request: Request, response: Response) {
    return await orderService.create(request)
    .then((order: Order) => {
        response.status(201);
        response.json(order);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    })
};

async function getAll(request: Request, response: Response) {
    return await orderService.getAll()
    .then((categories: Order[]) => {
        response.status(200);
        response.json(categories);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    });
}

async function getOne(id: number, request: Request, response: Response) {
    return await orderService.getOne(id).then((category: Order | null) => {
        if (category) {
            response.status(200);
            response.json(category);
            return;
        }
        response.status(404);
        response.json({ message: `The order with id ${id} doesn't exist.` });
        return;
    })
}

async function del(id: number, request: Request, response: Response) {
    return await orderService.del(id).then((category: Order | any) => {
        if (category) {
            response.status(200);
            response.json({ message: `The order with id ${id} is deleted.` });
            return;
        }
        response.status(404);
        response.json({ message: `The category with id ${id} can not be deleted or doesn't exist.` });
        return;
    })
}

async function edit(request: Request, response: Response) {
    await orderService.edit(request)
    .then((category) => {
        response.status(201);
        response.json(category);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    })
};



export default {
    create,
    getAll,
    getOne,
    del,
    edit,
}