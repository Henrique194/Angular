import { UserRepository } from "../repositories/user.repository";
import { GenericService } from "../utils/service/GenericService.service";

export const UserService = new GenericService(UserRepository);