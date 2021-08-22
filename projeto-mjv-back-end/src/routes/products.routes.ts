import { Request, Response, Router } from "express";
import { ProductEntity } from "../entities/product.entity";
import { ProductService } from "../services/product.service";
import { queryProductCreator } from "../utils/functions/queryProductCreator.function";
import { responseEmitter } from "../utils/functions/responseEmitter.function";

const productRouter = Router();
const productService = new ProductService();

productRouter.get('/', async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.send(products);
})

productRouter.get('/product', async (req: Request, res: Response) => {
    const name = req.query.name as string;
    const id = req.query.id as string;
    if(!name && !id) {
        res.send("Nenhum Parâmetro Específicado:\nId E Nome Faltando!");
    } else {
        const queryProduct = queryProductCreator(name, id);
        await responseEmitter(res, queryProduct, productService);    
    }
});

productRouter.post('/create', async (req: Request, res: Response) => {
    const receivedProduct = req.body as ProductEntity[];
    await productService.insertProduct(receivedProduct);
    res.send(receivedProduct);
})

productRouter.put('/update', async (req: Request, res: Response) => {
    const receivedProduct = req.body as ProductEntity;
    if(receivedProduct.id) {
        console.log(receivedProduct.id);
        await productService.updateProduct(receivedProduct.id, receivedProduct);
        res.send(receivedProduct);
    } else { res.status(400).send(`ID Não Especificado!\n`); }
});

productRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const productRemoved = await productService.removeProductById(id);
    res.send(productRemoved);
});

export default productRouter;