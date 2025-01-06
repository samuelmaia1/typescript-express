import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({type: 'varchar', length: 255, nullable: false})
    name!: string

    @Column({type: 'varchar', length: 255, nullable: false, unique: true})
    email!: string
}