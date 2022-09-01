import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Author } from "../authors/entities/author.entity";
import { Book } from "../books/entities/book.entity";

@Module( {
    imports: [
        TypeOrmModule.forRootAsync( {
            imports: [ ConfigModule ],
            useFactory: ( configService: ConfigService ) => ( {
                type: "postgres",
                host: configService.get( "DB_HOST" ),
                port: +configService.get( "DB_PORT" ),
                username: configService.get( "DB_USER" ),
                password: configService.get( "DB_PASSWORD" ),
                database: configService.get( "DB_DATABASE" ),
                entities: [ Author, Book ],
                synchronize: true,
                logging: true,
            } ),
            inject: [ ConfigService ],
        } ),
    ],
} )
export class DatabaseModule {}

/* 
TypeOrmModule.forRoot({
            type: process.env.DB_TYPE as any,
            host: process.env.DB_HOST,
            port: parseInt(<string>process.env.DB_PORT),
            username: process.env.DB_USER,
            password: String(process.env.DB_PASSWORD),
            database: process.env.DB_DATABASE,
            entities: [Author],
            synchronize: true,
        }),
 */
// entities: [__dirname + "./**/**/*entity{.ts,.js}"],
// autoLoadEntities: true,