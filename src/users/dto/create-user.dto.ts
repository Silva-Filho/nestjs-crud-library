import {
    IsEmail,
    IsIdentityCard,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsPositive,
    IsString,
    Length,
    MaxLength
} from "class-validator";

export class CreateUserDto {
    @MaxLength( 120 )
    @IsString()
    @IsNotEmpty()
        name: string;

    @IsPositive()
    @IsInt()
    @IsOptional()
        age: number;

    @MaxLength( 50 )
    @IsEmail()
    @IsNotEmpty()
        email: string;

    @IsPhoneNumber( "BR" )
    // @Length( 11, 11 )
    @IsString()
    @IsOptional()
        telephone: string;

    @IsIdentityCard( "pt-BR" )
    @Length( 11, 11 )
    @IsString()
    @IsNotEmpty()
        cpf: string;
}
