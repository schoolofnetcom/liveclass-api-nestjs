import { IsNotEmpty } from "class-validator";

export class CreateTodoDTO {
    @IsNotEmpty({ message: 'Campo obrigatório' })
    name: string;
}