import { Injectable } from "@nestjs/common";

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
        return "This action returns all author";
    }

    findOne(id: number) {
        return `This action returns a #${id} author`;
    }

    update(id: number, updateAuthorDto: UpdateAuthorDto) {
        return `This action updates a #${id} author`;
    }

    remove(id: number) {
        return `This action removes a #${id} author`;
    }
}
