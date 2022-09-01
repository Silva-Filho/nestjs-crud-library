import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    NotFoundException, 
    Patch, 
    Param, 
    Post, 
    Put, 
} from "@nestjs/common";

import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Controller( "authors" )
export class AuthorsController {
    constructor( private readonly authorsService: AuthorsService ) {}

    @Post()
    async create( @Body() createAuthorDto: CreateAuthorDto ) {
        return await this.authorsService.create( createAuthorDto );
    }

    @Get()
    async findAll() {
        return await this.authorsService.findAll();
    }

    @Get( ":id" )
    async findOne( @Param( "id" ) id: number ) {
        const user = await this.authorsService.findOne( id );

        if ( !user ) {
            throw new NotFoundException( "Autor não encontrado." );
        }

        return user;
    }

    @Patch( ":id" )
    async update( 
        @Param( "id" ) id: number, 
        @Body() updateAuthorDto: UpdateAuthorDto 
    ) {
        return await this.authorsService.update( id, updateAuthorDto );
    }

    @HttpCode( 204 )
    @Delete( ":id" )
    async remove( @Param( "id" ) id: number ) {
        return await this.authorsService.remove( id );
    }
}
