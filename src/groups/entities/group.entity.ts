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

    @Column('simple-json', { default: '[]' })
    participants: Array<{ name: string; email: string; }>;

    @Column({ default: 'pending' })
    status: 'pending' | 'drawn';
}
