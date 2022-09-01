import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { Author } from "../../authors/entities/author.entity";

@Entity( { name: "books"} )
export class Book {
    @PrimaryGeneratedColumn()
        id: number;
    
    @Column( { 
        // name: "id_author",
        // name: "id_autor",
        // type: "int4",
    } )
        authorId: number;
    
    @Column( { 
        name: "name",
        type: "varchar",
        length: 200,
    } )
        name: string;

    @Column( {
        name: "publisher",
        type: "varchar",
        length: 100,
        nullable: true,
    } )
        publisher: string;

    @Column( {
        name: "genre",
        type: "varchar",
        length: 50,
    } )
        genre: string;

    @Column( {
        name: "published_at",
        type: "date",
        nullable: true,
    } )
        publishedAt: string;

    @ManyToOne( () => Author, ( author: Author ) => author.books )
    @JoinColumn()
        author: Author;
}
