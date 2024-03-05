import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, DeleteDateColumn } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity('banker')
export class Banker extends Person {
    @Column({unique: true})
    employee_number: number;

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name: 'bankers_clients', 
        joinColumn: {
            name: "banker", 
            referencedColumnName: 'id', 
        }, 
        inverseJoinColumn: {
            name: 'client', 
            referencedColumnName: 'id'
        },
    })
    clients: Client[]

    @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
    deletedAt: Date;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 
}