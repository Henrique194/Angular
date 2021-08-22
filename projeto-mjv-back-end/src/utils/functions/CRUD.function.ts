import { EntityTarget, FindManyOptions, getConnectionManager, getRepository, Repository } from "typeorm";

export class CRUD {

    static create<T, K>(entity: EntityTarget<K>, entries: T[]) {
        const repository = getRepository(entity);
        return repository.save(entries);
    }

    static read<T, K>(entity: EntityTarget<T>, options?: FindManyOptions<K> | undefined) {
        const repository = getRepository(entity);
        return repository.find(options);
    }

    static update<T, K>(entity: EntityTarget<K>, id: number, entry: T) {
        const repository = getRepository(entity);
        return repository.update(id, entry);
    }

    static delete<T>(entity: EntityTarget<T>, entries: T[]) {
        const repository = getRepository(entity);
        return repository.remove(entries);
    }
}