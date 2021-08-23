import { Response } from "express";
import { Repository } from "../../models/class.model";
import { GenericService } from "../service/GenericService.service";


export async function responseEmitter<T extends GenericService<Repository>, K>(productService: T, res: Response, param: K) {
    let foundProduct = undefined;
    const numericRepresentation = Number(param);

    if(!Number.isNaN(numericRepresentation)) {
        foundProduct = await productService.getById(numericRepresentation);
        return res.send(foundProduct);
    }

    switch(typeof param) {
        case "string":
            foundProduct = await productService.getByName(param);
            return res.send(foundProduct);
        default:
            return res.status(400).send("Query Param Inválido!");
    }
}
