import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleId } from "../models/roles.model";


@Entity("usuario")
export class UserEntity {
    @PrimaryGeneratedColumn( { type: "integer" } )
    id?: number;

    @Column( { type: "varchar", length: 25 } )
    email!: string;

    @Column( { type: "varchar", length: 15 } )
    password!: number;

    @Column( { type: "smallint", name: "role_id" } )
    roleId!: RoleId;
    
}