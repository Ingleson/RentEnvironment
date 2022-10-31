import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('schedules_user_properties')

export class SchedulesUserProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({type: "date"})
  date: string

  @Column({type: "time"})
  hour: string

  @ManyToOne(() => Properties)
  property: Properties

  @ManyToOne(() => User, {eager: true})
  user: User
}