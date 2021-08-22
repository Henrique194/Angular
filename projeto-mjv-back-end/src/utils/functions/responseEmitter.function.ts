import { Response } from "express";
import { ProductService } from "../../services/product.service";


export async function responseEmitter<T>(productService: ProductService, res: Response, param: T) {
    let foundProduct = undefined;
    const numericRepresentation = Number(param);

    if(!Number.isNaN(numericRepresentation)) {
        foundProduct = await productService.getProductById(numericRepresentation);
        return res.send(foundProduct);
    }

    switch(typeof param) {
        case "string":
            foundProduct = await productService.getProductByName(param);
            return res.send(foundProduct);
        default:
            return res.status(400).send("Query Param Inválido!");
    }
}
