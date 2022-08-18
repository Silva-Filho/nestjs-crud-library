import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Pipes
    app.useGlobalPipes(
        new ValidationPipe({
            // transforma o tipo do dado de entrada no tipo esperado.
            transform: true,
            // Não passa adiante informação a mais.
            whitelist: true,
            // Gera erro se houver dado de entrada a mais.
            forbidNonWhitelisted: true,
        }),
    );

    await app.listen(8000);
}
bootstrap();
