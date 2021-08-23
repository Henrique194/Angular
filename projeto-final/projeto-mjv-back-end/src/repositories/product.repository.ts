import { ProductEntity } from "../entities/product.entity";
import { GenericRepository } from "../utils/repository/GenericRepository.repository";

export const ProductRepository = new GenericRepository(ProductEntity);
 