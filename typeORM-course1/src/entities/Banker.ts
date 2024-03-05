import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person {
    @Column({unique: true})
    employee_number: number;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 
}