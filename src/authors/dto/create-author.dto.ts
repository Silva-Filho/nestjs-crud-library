import { 
    IsInt,
    IsNotEmpty, 
    // IsNumber, 
    IsOptional, 
    IsPositive, 
    IsString, 
    MaxLength 
} from "class-validator";

export class CreateAuthorDto {
    /* @IsNumber()
    @IsOptional()
        id?: number; */

    @MaxLength( 120 )
    @IsString()
    @IsNotEmpty()
        name: string;
        // nome: string;

    @IsPositive()
    @IsInt()
    @IsOptional()
        // age?: number;
        age: number;
        // idade: number;
}
