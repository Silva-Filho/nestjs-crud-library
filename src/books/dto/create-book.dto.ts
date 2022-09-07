import { 
    // IsDate, 
    IsDateString, 
    IsInt, 
    IsNotEmpty, 
    // IsNumber, 
    IsOptional, 
    IsPositive, 
    IsString, 
    MaxLength 
} from "class-validator";

export class CreateBookDto {
    @IsPositive()
    @IsInt()
    @IsNotEmpty()
        authorId: number;
    
    @MaxLength( 200 )
    @IsString()
    @IsNotEmpty()
        name: string;

    @MaxLength( 100 )
    @IsString()
    @IsOptional()
        publisher: string;

    @MaxLength( 50 )
    @IsString()
    @IsNotEmpty()
        genre: string;

    // @IsDate()
    @IsDateString()
    @IsOptional()
        publishedAt: string;
}
