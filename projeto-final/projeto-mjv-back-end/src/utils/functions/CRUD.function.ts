import { EntityTarget, FindManyOptions, getConnectionManager, getRepository, Repository } from "typeorm";

export class CRUD {

    static create<T, K>(entity: EntityTarget<K>, entries: T | T[]){
        const repository = getRepository(entity);
        if(Array.isArray(entries)) {
            return repository.save(entries);
        }
        return repository.save(entries);
    }

    static read<T, K>(entity: EntityTarget<T>, options?: FindManyOptions<K> | undefined) {
        const repository = getRepository(entity);
        if(options) {
            return repository.findOne(options);
        }
        return repository.find();
    }

    static update<T, K>(entity: EntityTarget<K>, id: number, entry: T) {
        const repository = getRepository(entity);
        return repository.update(id, entry);
    }

    static delete<T>(entity: EntityTarget<T>, entries: T | T[]) {
        const repository = getRepository(entity);
        if( Array.isArray(entries) ) {
            return repository.remove(entries);
        }
        return repository.remove(entries);
    }
}