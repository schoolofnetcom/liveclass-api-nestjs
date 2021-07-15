import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    async index() {
        return await this.todoService.findAll();
    }
}
