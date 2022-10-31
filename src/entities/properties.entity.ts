import { Entity, PrimaryGeneratedColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity('properties')

export class Properties {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({default: false})
  sold: boolean
  
  @Column({type: "decimal", precision: 12, scale: 2, default: 0})
  value: number
  
  @Column({type: "integer"})
  size: number
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Addresses, {eager: true}) 
  @JoinColumn()
  address: Addresses
  
  @ManyToOne(() => Categories)
  category?: Categories

  @OneToMany(() => SchedulesUserProperties, schedules_user_properties => schedules_user_properties.property)
  schedules: SchedulesUserProperties[]
}