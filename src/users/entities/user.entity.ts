import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: "users" } )
export class User {
    @PrimaryGeneratedColumn()
        id: number;

    @Column( {
        name: "name",
        type: "varchar",
        length: 120,
        nullable: false,
    } )
        name: string;

    @Column( {
        name: "age",
        type: "int2",
        nullable: true,
    } )
        age: number;

    @Column( {
        name: "email",
        type: "varchar",
        length: 50,
        nullable: false,
        unique: true,
    } )
        email: string;

    @Column( {
        name: "telephone",
        type: "char",
        length: 11,
    } )
        telephone: string;

    @Column( {
        name: "cpf",
        type: "char",
        length: 11,
        nullable: false,
        unique: true,
    } )
        cpf: string;
}
