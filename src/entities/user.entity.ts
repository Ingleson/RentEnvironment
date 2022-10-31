import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity()

export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  isAdm: boolean

  @Column({default: true})
  isActive: boolean

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  @OneToMany(() => SchedulesUserProperties, schedules_user_properties => schedules_user_properties.user)
  schudules_user_properties: SchedulesUserProperties[]
};