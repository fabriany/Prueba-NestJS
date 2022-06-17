 import { IsString, IsDate, IsNotEmpty } from "class-validator";
 import { PartialType } from "@nestjs/mapped-types";

 export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    readonly document: string;

    @IsString()
    @IsNotEmpty()
    readonly documentType: string;

    @IsDate()
    @IsNotEmpty()
    readonly birthDate: Date;
 } 

 export class UpdateUserDto extends PartialType(CreateUserDto) {}