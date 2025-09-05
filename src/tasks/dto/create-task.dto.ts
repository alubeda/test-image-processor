import { IsString, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    imagePath: string
}
