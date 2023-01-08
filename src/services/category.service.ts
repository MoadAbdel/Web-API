import {
    Request,
    Response
} from "express";

import Category from "../database/models/category.model";

async function create(request: Request) {
    return await Category.create(request.body, { fields: ["name", "description"] })
}

async function getAll() {
    return await Category.findAll();
}

async function getOne(id: number) {
    return await Category.findOne({ where: { id } });
}

async function del(id: number) {
    return await Category.destroy({ where: { id } });
}
async function edit(request: Request) {
    await Category.update(request.body, {
        where: {
            id: request.params.id
        },
        fields: ["name", "description"]
    });
    return await Category.findByPk(request.params.id);
}

export default {
    create,
    getAll,
    getOne,
    del,
    edit
}