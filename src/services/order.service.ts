import {
    Request,
    Response
} from "express";

import Order from "../database/models/order.model";

async function create(request: Request) {
    return await Order.create({ user_id: request.body.user_id }, { fields: ["user_id"]})
}

async function getAll() {
    return await Order.findAll();
}

async function getOne(id: number) {
    return await Order.findOne({ where: { id } });
}

async function del(id: number) {
    return await Order.destroy({ where: { id } });
}
async function edit(request: Request) {
    await Order.update(request.body, {
      where: {
        id: request.params.id
      },
});
    return await Order.findByPk(request.params.id);
  }

export default {
    create,
    getAll,
    getOne,
    del,
    edit,
    
}