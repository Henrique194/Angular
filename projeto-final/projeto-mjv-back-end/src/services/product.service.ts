import { ProductEntity } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repository";
import { GenericService } from "../utils/service/GenericService.service";

export const ProductService = new GenericService(ProductRepository);