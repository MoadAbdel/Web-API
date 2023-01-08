import { Router, Request, Response } from "express";

import productController from "../controllers/product.controller";



const router = Router();

// C
router.post('/', async (request: Request, response: Response) => {
    await productController.create(request, response)
});
// R
router.get('/', async(request: Request, response: Response) => {
    await productController.getAll(request, response)
});

router.get('/:id', async (request: Request, response: Response) => {
    await productController.getOne(Number(request.params.id), request, response)
});
// U
router.patch('/:id', async(request: Request, response: Response) => {
    await productController.edit(request, response)
});
// D
router.delete('/:id',  async(request: Request, response: Response) => {
    await productController.del(Number(request.params.id), request, response)

});

module.exports = router;