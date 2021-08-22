import { ProductEntity } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repositoy";


export class ProductService {

    getProducts() {
        return ProductRepository.getAll();
    }

    getProductById(id: number) {
        return ProductRepository.getById(id);
    }

    getProductByName(name: string) {
        return ProductRepository.getByName(name);
    }

    insertProduct(products: ProductEntity | ProductEntity[]) {
        return ProductRepository.insert(products);
    }

    updateProduct(id: number, product: ProductEntity) {
        return ProductRepository.update(id, product);
    }

    removeProductByName(name: string) {
        return ProductRepository.getByName(name);
        // return ProductRepository.remove(foundProduct);
    }

    async removeProductById(id: number) {
        const foundProduct = await ProductRepository.getById(id);
        if(foundProduct) {
            return ProductRepository.remove(foundProduct);
        }
        return Promise.resolve(undefined);
    }
}