import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('addresses')

export class Addresses {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: "varchar"})
  district: string

  @Column({type: "varchar", length: 8})
  zipCode: string

  @Column({type: "varchar"})
  number?: string

  @Column({type: "varchar"})
  city: string

  @Column({type: "varchar", length: 2})
  state: string
}