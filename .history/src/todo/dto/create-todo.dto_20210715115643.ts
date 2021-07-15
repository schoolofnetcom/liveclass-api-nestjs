import { IsNotEmpty } from "class-validator";
import { DefaultResponseDTO } from "./default-response.dto";

export class CreateTodoDTO {
    @IsNotEmpty({ message: 'Campo obrigatório' })
    name: string;
}

export class CreateTodoResponseDTO extends DefaultResponseDTO<Todo[]>;