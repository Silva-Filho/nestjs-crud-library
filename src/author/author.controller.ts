import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from "@nestjs/common";

import { AuthorService } from "./author.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Controller("author")
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    findAll() {
        return this.authorService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: number) {
        const user = this.authorService.findOne(id);

        if (!user) {
            throw new NotFoundException("Autor não encontrado.");
        }

        return user;
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorService.update(id, updateAuthorDto);
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.authorService.remove(id);
    }
}
