import {
    Request,
    Response
} from "express";
import userService from "../services/user.service";
import User from "../database/models/user.model";

async function create(request: Request, response: Response) {
    return await userService.create(request)
    .then((category: User) => {
        response.status(201);
        response.json(category);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    })
};

async function getAll(request: Request, response: Response) {
    return await userService.getAll()
    .then((categories: User[]) => {
        response.status(200);
        response.json(categories);
    }).catch((error: any) => {
        response.status(400);
        response.json({ error: error});
    });
}

async function getOne(id: number, request: Request, response: Response) {
    return await userService.getOne(id).then((category: User | null) => {
        if (category) {
            response.status(200);
            response.json(category);
            return;
        }
        response.status(404);
        response.json({ message: `The user with id ${id} doesn't exist.` });
        return;
    })
}

async function del(id: number, request: Request, response: Response) {
    await userService.del(id).then((category: User | any) => {
        if (category) {
            response.status(200);
            response.json({ message: `The user with id ${id} is deleted.` });
            return;
        }
        response.status(404);
        response.json({ message: `The user with id ${id} can not be deleted or doesn't exist.` });
        return;
    })
}

async function edit(request: Request, response: Response) {
    await userService.edit(request)
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