import { Request, Response, Router } from "express";
import { ProductEntity } from "../entities/product.entity";
import { ProductService } from "../services/product.service";
import { variableRemover } from "../utils/functions/variableRemover.function";
import { responseEmitter } from "../utils/functions/responseEmitter.function";

const productRouter = Router();
const productService = new ProductService();

productRouter.get('/', async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.send(products);
})

productRouter.get('/product', async (req: Request, res: Response) => {
    const name = req.query.name;
    const id = req.query.id;
    const filteredVariable = variableRemover(name, id);
    await responseEmitter(productService, res, filteredVariable);    
});

productRouter.post('/create', async (req: Request, res: Response) => {
    const receivedProduct = req.body;
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
    if(!productRemoved) {
        return res.status(404).send( `Não Existe Produto com o Id: ${ id }` );
    }
    return res.send(productRemoved);
});

export default productRouter;