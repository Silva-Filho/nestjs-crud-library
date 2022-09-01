import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";

import { Author } from "./entities/author.entity";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository( Author )
        private authorsRepository: Repository<Author>,
    ) {}

    async create( createAuthorDto: CreateAuthorDto ): Promise<Author> {
        const author = this.authorsRepository.create( createAuthorDto );

        return await this.authorsRepository.save( author );
    }

    async findAll(): Promise<Author[]> {
        return await this.authorsRepository.find();
    }

    async findOne( id: number ): Promise<Author> {
        const author = await this.authorsRepository.findOneBy( { id } );
        /* Ou (depreciado!!!!):
        const author = await this.authorsRepository.findOne({ where: { id } }); */

        if ( !author ) {
            throw new NotFoundException( "Autor não encontrado." );
        }

        return author; 
    }

    async update( id: number, updateAuthorDto: UpdateAuthorDto ): Promise<Author> {
        const author = await this.authorsRepository.findOneBy( { id } );

        if ( !author ) {
            throw new NotFoundException( "Autor não encontrado." );
        }

        /* const editedAuthor = Object.assign(author, updateAuthorDto);
        return await this.authorsRepository.save(editedAuthor); */

        const editedAuthor = await this.authorsRepository.update( { id }, updateAuthorDto );
        /* Talvez: 
        await this.authorsRepository.update(id, updateAuthorDto); */

        if ( !editedAuthor.affected ) {
            throw new EntityNotFoundError( Author, id );            
        }

        return await this.authorsRepository.findOneBy( { id } );
    }

    async remove( id: number ): Promise<string> {
        const author = await this.authorsRepository.findOneBy( { id } );

        if ( !author ) {
            throw new NotFoundException( "Autor não encontrado." );
        }

        const deletedAuthor = await this.authorsRepository.delete( id );

        if ( !deletedAuthor.affected ) {
            throw new EntityNotFoundError( Author, id );            
        }

        return `This action removes a #${id} author`;
    }
}
