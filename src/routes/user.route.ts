import { Router, Request, Response } from "express";

import userController from "../controllers/user.controller";



const router = Router();

// C
router.post('/', async (request: Request, response: Response) => {
    await userController.create(request, response)
});
// R
router.get('/', async(request: Request, response: Response) => {
    await userController.getAll(request, response)
});

router.get('/:id', async (request: Request, response: Response) => {
    await userController.getOne(Number(request.params.id), request, response)
});
// U
router.patch('/:id', async(request: Request, response: Response) => {
    await userController.edit(request, response)
});
// D
router.delete('/:id',  async(request: Request, response: Response) => {
    await userController.del(Number(request.params.id), request, response)

});

module.exports = router;