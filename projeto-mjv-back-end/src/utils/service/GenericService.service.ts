import { Class } from "../../models/class.model";
import { GenericRepository } from "../repository/GenericRepository.repository";

export class GenericService<T extends GenericRepository<Class>> {

    repository: T;

    constructor(repository: T) {
        this.repository = repository;
    }

    get() {
        return this.repository.getAll();
    }

    getById(id: number) {
        return this.repository.getById(id);
    }

    getByName(name: string) {
        return this.repository.getByName(name);
    }

    insert<K>(products: K | K[]) {
        return this.repository.insert(products);
    }

    update<K>(id: number, product: K) {
        return this.repository.update(id, product);
    }

    removeByName(name: string) {
        return this.repository.getByName(name);
        // return ProductRepository.remove(foundProduct);
    }

    async removeById(id: number) {
        const foundProduct = await this.repository.getById(id);
        if(foundProduct) {
            return this.repository.remove(foundProduct);
        }
        return Promise.resolve(undefined);
    }
}