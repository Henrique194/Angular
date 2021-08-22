import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("produto")
export class ProductEntity {
    @Column( { type: "boolean" } )
    available!: boolean;

    @Column( { type: "varchar", length: 2000, nullable: true } )
    description?: string;

    @PrimaryGeneratedColumn( { type: "integer" } )
    id?: number;

    @Column( { name: "img_url", type: "varchar", length: 150, nullable: true } )
    imgUrl?: string;

    @Column( { type: "varchar", length: 50 } )
    name!: string;

    @Column( { type: "numeric" } )
    price!: number;

}