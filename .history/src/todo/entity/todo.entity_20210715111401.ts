import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todos' })
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    is_done: boolean;
}