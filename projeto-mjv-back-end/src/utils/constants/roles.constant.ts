import { Permission } from "../../models/permissions.model";
import { Role, RoleId } from "../../models/roles.model";

export const ADMIN_ROLE: Role = {
    id: RoleId.ADMIN,
    permissions: [ 
        Permission.CREATE_PRODUCT,
        Permission.REMOVE_PRODUCT,
        Permission.CREATE_USER,
        Permission.REMOVE_USER,
        Permission.ACESS,
     ]
}

export const USER_MANAGER_ROLE: Role = {
    id: RoleId.USER_MANAGER,
    permissions: [ 
        Permission.CREATE_USER,
        Permission.REMOVE_USER,
        Permission.ACESS,
     ]
}

export const PRODUCT_MANAGER_ROLE: Role = {
    id: RoleId.PRODUCT_MANAGER,
    permissions: [ 
        Permission.CREATE_PRODUCT,
        Permission.REMOVE_PRODUCT,
        Permission.ACESS,
     ]
}


export const CLIENT: Role = {
    id: RoleId.CLIENT,
    permissions: [ 
        Permission.ACESS,
     ]
}