import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Partida{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    cidade: string
    @Column()
    data: Date
    @Column()
    hora: string
    @Column()
    timeCasa: string
    @Column()
    timeVisitante: string
    @Column({default:0})
    gols: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}