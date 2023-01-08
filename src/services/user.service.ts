import {
    Request,
    Response
} from "express";

import User from "../database/models/user.model";

async function create(request: Request) {
    return await User.create(request.body, { fields: ["firstname", "lastname", "password", "email", "username"] })
}

async function getAll() {
    return await User.findAll();
}

async function getOne(id: number) {
    return await User.findOne({ where: { id } });
}

async function del(id: number) {
    return await User.destroy({ where: { id } });
}
async function edit(request: Request) {
    await User.update(request.body, {
        where: {
            id: request.params.id
        },
        fields: ["firstname", "lastname", "password", "email", "username"]
    });
    return await User.findByPk(request.params.id);
}

export default {
    create,
    getAll,
    getOne,
    del,
    edit
}