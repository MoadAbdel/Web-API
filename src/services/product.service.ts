import {
    Request,
    Response
} from "express";

import Product from "../database/models/product.model";

async function create(request: Request) {
    return await Product.create(request.body, { fields: ["name", "description", "price", "stock"]})
}

async function getAll() {
    return await Product.findAll();
}

async function getOne(id: number) {
    return await Product.findOne({ where: { id } });
}

async function del(id: number) {
    return await Product.destroy({ where: { id } });
}
async function edit(request: Request) {
    await Product.update(request.body, {
        where: {
            id: request.params.id
        },
        fields: ["name", "description", "price", "stock"]
    });
    return await Product.findByPk(request.params.id);
}

export default {
    create,
    getAll,
    getOne,
    del,
    edit
}