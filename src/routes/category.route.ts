import {
    Router,
    Request,
    Response
} from "express";

import Category from "../database/models/category.model";
import categoryController from "../controllers/category.controller";

const router = Router();

router.post('/', async (request: Request, response: Response) => { 
    await categoryController.create(request, response)
});

router.get('/', async (request: Request, response: Response) => {
    await categoryController.getAll(request, response)
});

router.get('/:id', async (request: Request, response: Response) => {
    await categoryController.getOne(Number(request.params.id), request, response)
});


router.patch('/:id', async (request: Request, response: Response) => {
    await categoryController.edit(request, response)
});

router.delete('/:id', async (request: Request, response: Response) => {
    await categoryController.del(Number(request.params.id), request, response)
});

module.exports = router;