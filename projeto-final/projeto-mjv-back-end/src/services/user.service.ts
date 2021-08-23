import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { CRUD } from "../utils/functions/CRUD.function";
import { GenericService } from "../utils/service/GenericService.service";

function getByEmail(email: string) {
    return CRUD.read(UserEntity, { where: { email } });
}

const Service = new GenericService(UserRepository);

export const UserService = Object.assign(Service, { getByEmail } );