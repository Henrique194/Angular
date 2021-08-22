import { getRepository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { CRUD } from "../utils/functions/CRUD.function";

export class ProductRepository {

    static getAll() {
        return CRUD.read(ProductEntity);
    }

    static getById(id: number) {
        return CRUD.read( ProductEntity, { where: { id } } );
    }
    
    static getByName(name: string) {
        return CRUD.read( ProductEntity, { where: { name } } );
    }
    
    static insert(products: ProductEntity[]) {
        return CRUD.create(ProductEntity, products);
    }

    static update(id: number, product: ProductEntity) {
        return CRUD.update(ProductEntity ,id, product);
    }


    static remove(products: ProductEntity[]) {
        return CRUD.delete(ProductEntity, products);
    }
}
