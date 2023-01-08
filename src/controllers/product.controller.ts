import {
    Request,
    Response
} from "express";
import productService from "../services/product.service";
import Product from "../database/models/product.model";

async function create(request: Request, response: Response) {
    return await productService.create(request)
    .then((category: Product) => {
        response.status(201);
        response.json(category);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    })
};

async function getAll(request: Request, response: Response) {
    return await productService.getAll()
    .then((categories: Product[]) => {
        response.status(200);
        response.json(categories);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    });
}

async function getOne(id: number, request: Request, response: Response) {
    return await productService.getOne(id).then((category: Product | null) => {
        if (category) {
            response.status(200);
            response.json(category);
            return;
        }
        response.status(404);
        response.json({ message: `The product with id ${id} doesn't exist.` });
        return;
    })
}

async function del(id: number, request: Request, response: Response) {
    await productService.del(id).then((category: Product | any) => {
        if (category) {
            response.status(200);
            response.json({ message: `The product with id ${id} is deleted.` });
            return;
        }
        response.status(404);
        response.json({ message: `The product with id ${id} can not be deleted or doesn't exist.` });
        return;
    })
}

async function edit(request: Request, response: Response) {
    await productService.edit(request)
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