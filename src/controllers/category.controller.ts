import {
    Request,
    Response
} from "express";
import categoryService from "../services/category.service";
import Category from "../database/models/category.model";

async function create(request: Request, response: Response) {
    return await categoryService.create(request)
    .then((category: Category) => {
        response.status(201);
        response.json(category);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    })
};

async function getAll(request: Request, response: Response) {
    return await categoryService.getAll()
    .then((categories: Category[]) => {
        response.status(200);
        response.json(categories);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    });
}

async function getOne(id: number, request: Request, response: Response) {
    return await categoryService.getOne(id).then((category: Category | null) => {
        if (category) {
            response.status(200);
            response.json(category);
            return;
        }
        response.status(404);
        response.json({ message: `The category with id ${id} doesn't exist.` });
        return;
    })
}

async function del(id: number, request: Request, response: Response) {
    await categoryService.del(id).then((category: Category | any) => {
        if (category) {
            response.status(200);
            response.json({ message: `The category with id ${id} is deleted.` });
            return;
        }
        response.status(404);
        response.json({ message: `The category with id ${id} can not be deleted or doesn't exist.` });
        return;
    })
}

async function edit(request: Request, response: Response) {
    await categoryService.edit(request)
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