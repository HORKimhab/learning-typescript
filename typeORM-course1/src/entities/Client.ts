import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, DeleteDateColumn } from "typeorm";
import { Person } from "./utils/Person";
import { Transaction } from './Transaction';
import { Banker } from "./Banker";

@Entity('client')
export class Client extends Person {
    // decimal(11,2)
    @Column({
        type: 'decimal',
        precision: 11,
        scale: 2,
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

    // Soft delete
    @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
    deletedAt: Date;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 
}