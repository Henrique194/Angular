import { Request, Response, Router } from "express";
import { ProductEntity } from "../entities/product.entity";
import { ProductService } from "../services/product.service";
import { variableRemover } from "../utils/functions/variableRemover.function";
import { responseEmitter } from "../utils/functions/responseEmitter.function";

const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const products = await ProductService.get();
    res.send(products);
})

userRouter.get('/product', async (req: Request, res: Response) => {
    const name = req.query.name;
    const id = req.query.id;
    const filteredVariable = variableRemover(name, id);
    await responseEmitter(ProductService, res, filteredVariable);    
});

userRouter.post('/create', async (req: Request, res: Response) => {
    const receivedProduct = req.body;
    await ProductService.insert(receivedProduct);
    res.send(receivedProduct);
})

userRouter.put('/update', async (req: Request, res: Response) => {
    const receivedProduct = req.body as ProductEntity;
    if(receivedProduct.id) {
        console.log(receivedProduct.id);
        await ProductService.update(receivedProduct.id, receivedProduct);
        res.send(receivedProduct);
    } else { res.status(400).send(`ID Não Especificado!\n`); }
});

userRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const productRemoved = await ProductService.removeById(id);
    if(!productRemoved) {
        return res.status(404).send( `Não Existe Produto com o Id: ${ id }` );
    }
    return res.send(productRemoved);
});

export default userRouter;