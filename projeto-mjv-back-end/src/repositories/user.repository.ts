import { UserEntity } from "../entities/user.entity";
import { GenericRepository } from "../utils/repository/GenericRepository.repository";

export const UserRepository = new GenericRepository(UserEntity);