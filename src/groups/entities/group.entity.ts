import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, (user) => user.ownedGroups)
    owner: User;

    @ManyToMany(() => User, (user) => user.participatingGroups)
    @JoinTable() 
    participants: User[];

    @Column({ default: 'pending' })
    status: 'pending' | 'drawn';
}
