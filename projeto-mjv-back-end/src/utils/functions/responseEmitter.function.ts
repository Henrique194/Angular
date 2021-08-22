import { Response } from "express";
import { QueryProductParam } from "../../models/queryProductParam.model";
import { ProductService } from "../../services/product.service";


export async function responseEmitter(res: Response, query: QueryProductParam, productService: ProductService) {
    if(query.type === "id") {
        const product = await productService.getProductById(query.id);
        res.send(product);
    } else {
        const product = await productService.getProductByName(query.name);
        res.send(product);
    }
    
}