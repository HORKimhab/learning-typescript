import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { Person } from "./utils/Person";
import { Transaction } from './Transaction';
import { Banker } from "./Banker";

@Entity('client')
export class Client extends Person {
    @Column({
        type: 'float'
    })
    balance: number; 

    @Column({
        default: true, 
        name: "active"
    })
    is_active: boolean;

    @Column({
        type: 'simple-json', 
        nullable: true
    })
    addtional_info: {
        age: number; 
        hair_color: string
    }

    @Column({ type: 'simple-array'})
    family_members: string[] = [];

    @OneToMany(
		() => Transaction,
		(transaction) => transaction.client
	)
	transactions: Transaction[];

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[];

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 
}