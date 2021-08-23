import { Class } from "../../models/class.model";
import { CRUD } from "../functions/CRUD.function";

export class GenericRepository<T extends Class> {

    entity: T;

    constructor( entity: T ) {
        this.entity = entity;
    }

     getAll() {
        return CRUD.read(this.entity);
    }

     getById(id: number) {
        return CRUD.read( this.entity, { where: { id } } );
    }
    
     getByName(name: string) {
        return CRUD.read( this.entity, { where: { name } } );
    }

     insert<K>(products: K | K[]) {
        return CRUD.create(this.entity, products);
    }

     update<K>(id: number, product: K) {
        return CRUD.update(this.entity ,id, product);
    }


     remove<T>(products: T | T[]) {
        return CRUD.delete(this.entity, products);
    }
}