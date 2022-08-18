import { Injectable, NotFoundException } from "@nestjs/common";

import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";

@Injectable()
export class AuthorService {
    private authors: Author[] = [];

    create(createAuthorDto: CreateAuthorDto) {
        const currentMaxId = this.authors[this.authors.length - 1]?.id || 0;
        const id = currentMaxId + 1;
        const author = {
            id,
            ...createAuthorDto,
        };

        this.authors.push(author);

        return author;
    }

    findAll() {
        return this.authors;
    }

    findOne(id: number) {
        const index = this.authors.findIndex( author => author.id === id );

        return this.authors[index];
    }

    update(id: number, updateAuthorDto: UpdateAuthorDto) {
        const author = this.findOne(id);

        const newAuthor = {
            ...author,
            ...updateAuthorDto,
        };

        const index = this.authors.findIndex( author => author.id === id );

        this.authors[index] = newAuthor;

        return newAuthor;
    }

    remove(id: number) {
        const index = this.authors.findIndex( author => author.id === id );

        if (index === -1) {
            throw new NotFoundException("Autor não encontrado.");
        }

        this.authors.splice(index, 1);

        return `This action removes a #${id} author`;
    }
}
