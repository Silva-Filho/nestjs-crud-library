import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";

import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository( Book )
        private booksRepository: Repository<Book>,
    ) {}

    async create( createBookDto: CreateBookDto ): Promise<Book> {
        const book = this.booksRepository.create( createBookDto );

        return await this.booksRepository.save( book );
    }

    async findAll(): Promise<Book[]> {
        return await this.booksRepository.find();
    }

    async findOne( id: number ): Promise<Book> {
        const book = await this.booksRepository.findOneBy( { id } );

        if ( !book ) {
            throw new NotFoundException( "Livro não encontrado." );
        }

        return book;
    }

    async update( id: number, updateBookDto: UpdateBookDto ): Promise<Book> {
        const book = await this.booksRepository.findOneBy( { id } );

        if ( !book ) {
            throw new NotFoundException( "Livro não encontrado." );
        }

        const editedBook = await this.booksRepository.update( { id }, updateBookDto );

        if ( !editedBook.affected ) {
            throw new EntityNotFoundError( Book, id );            
        }

        return await this.booksRepository.findOneBy( { id } );
    }

    async remove( id: number ) {
        const book = await this.booksRepository.findOneBy( { id } );

        if ( !book ) {
            throw new NotFoundException( "Livro não encontrado." );
        }

        const deletedBook = await this.booksRepository.delete( id );

        if ( !deletedBook.affected ) {
            throw new EntityNotFoundError( Book, id );            
        }

        return `O livro de id #${id} foi removido.`;
    }
}
