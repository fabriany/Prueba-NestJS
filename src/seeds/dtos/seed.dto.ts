import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateSeedDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly type: string;

    @IsNotEmpty()
    @IsString()
    readonly dnaOrigin: string;

    @IsNotEmpty()
    @IsNumber()
    readonly indoorCrop: number;

    @IsNotEmpty()
    @IsNumber()
    readonly outerCrop: number;

    @IsNotEmpty()
    @IsNumber()
    readonly indoorHeight: number;

    @IsNotEmpty()
    @IsNumber()
    readonly outerHeight: number;

    @IsNotEmpty()
    @IsNumber()
    readonly floweringTime: number;

    @IsNotEmpty()
    @IsString()
    readonly cropMonth: string;

    @IsNotEmpty()
    @IsString()
    readonly effect: string;

    @IsNotEmpty()
    @IsNumber()
    readonly thc: number;

    @IsNotEmpty()
    @IsNumber()
    readonly cbd: number;
}

export class UpdateSeedDto extends PartialType(CreateSeedDto) {}