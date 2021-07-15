import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

    async findAll() {
        return await this.todoRepository.find();
    }

    async findOne(id: string) {
        return await this.todoRepository.findOne(id);
    }

    async create(todo) {
        return await this.todoRepository.save(todo);
    }
}


