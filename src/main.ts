import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create( AppModule );
    const logger = new Logger();

    // Pipes
    app.useGlobalPipes(
        new ValidationPipe( {
            // transforma o tipo do dado de entrada no tipo esperado.
            transform: true,
            // Não passa adiante informação a mais.
            whitelist: true,
            // Gera erro se houver dado de entrada a mais.
            forbidNonWhitelisted: true,
        } ),
    );
    
    await app.listen( 8080 );
    logger.log( `O servidor está rodando na porta ${ await app.getUrl() }.` );
}
bootstrap();
