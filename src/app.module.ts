import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
// import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthorsModule } from "./authors/authors.module";
// import { Author } from "./authors/entities/author.entity";
// import { Book } from "./books/entities/book.entity";
import { DatabaseModule } from "./database/database.module";
import { BooksModule } from "./books/books.module";
import { UsersModule } from "./users/users.module";

@Module( {
    imports: [
        ConfigModule.forRoot( {
            // envFilePath: [".env"], 
            isGlobal: true,
            // cache: true,
        } ),
        /* TypeOrmModule.forRoot( {
            type: process.env.DB_TYPE as any,
            host: process.env.DB_HOST,
            port: parseInt( <string>process.env.DB_PORT ),
            username: process.env.DB_USER,
            password: String( process.env.DB_PASSWORD ),
            database: process.env.DB_DATABASE,
            entities: [ Author, Book ],
            synchronize: true,
            logging: true,
        } ), */
        DatabaseModule,
        AuthorsModule,
        BooksModule,
        UsersModule,
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
} )
export class AppModule { }
