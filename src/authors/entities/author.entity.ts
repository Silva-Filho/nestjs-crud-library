import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { Book } from "../../books/entities/book.entity";

@Entity( { name: "authors" } )
export class Author {
    @PrimaryGeneratedColumn()
        id: number;

    @Column( { 
        name: "name",
        type: "varchar", 
        length: 120 
    } )
        name: string;
    
    @Column( { 
        name: "age",
        type: "int4", 
        nullable: true, 
    } )
        // Talvez com interrogação?
        // age?: number;
        age: number;
    
    @OneToMany( () => Book, ( book: Book ) => book.author )
        books: Book[];
}
