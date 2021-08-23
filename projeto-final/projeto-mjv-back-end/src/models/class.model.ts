import { GenericRepository } from "../utils/repository/GenericRepository.repository";

export type Class = new (...args: any[]) => {};
export type Repository = GenericRepository<Class>;