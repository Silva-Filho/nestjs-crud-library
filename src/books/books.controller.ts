import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete, 
    NotFoundException
} from "@nestjs/common";

import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller( "books" )
export class BooksController {
    constructor( private readonly booksService: BooksService ) {}

    @Post()
    async create( @Body() createBookDto: CreateBookDto ) {
        return await this.booksService.create( createBookDto );
    }

    @Get()
    async findAll() {
        return await this.booksService.findAll();
    }

    @Get( ":id" )
    async findOne( @Param( "id" ) id: number ) {
        /* const book = await this.booksService.findOne( id );

        if ( !book ) {
            throw new NotFoundException( "Livro não encontrado." );
        }

        return book; */
        return await this.booksService.findOne( id );
    }

    @Patch( ":id" )
    async update( 
        @Param( "id" ) id: number, 
        @Body() updateBookDto: UpdateBookDto 
    ) {
        return await this.booksService.update( id, updateBookDto );
    }

    @Delete( ":id" )
    async remove( @Param( "id" ) id: number ) {
        return await this.booksService.remove( id );
    }
}
