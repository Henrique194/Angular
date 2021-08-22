import { Permission } from "./permissions.model";

export enum RoleId {
    ADMIN = 1,
    USER_MANAGER = 2,
    PRODUCT_MANAGER = 3,
    CLIENT = 4,
}

export interface Role {
    id: RoleId,
    permissions: Permission[],
}