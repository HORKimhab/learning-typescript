import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes {
    DEPOSIT = 'deposit', 
    WITHDRAW = 'withdraw',
}

@Entity('transactions')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: TransactionTypes,
    })
    type: string; 

    @Column({
        type: 'decimal',
        precision: 11,
        scale: 2,
      })
    amount: number;

    @ManyToOne(
		() => Client,
		(client) => client.transactions,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'client_id',
	})
	client: Client;

    @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
    deletedAt: Date;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 


}