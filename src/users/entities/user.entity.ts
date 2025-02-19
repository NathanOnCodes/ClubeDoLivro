import { Group } from "src/groups/entities/group.entity";
import { Wishlist } from "src/wishlist/entities/wishlist.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @OneToMany(() => Group, (group) => group.owner)
    ownedGroups: Group[];

    @ManyToMany(() => Group, (group) => group.participants)
    participatingGroups: Group[];

    @OneToOne(() => Wishlist, (wishlist) => wishlist.user)
    wishlist: Wishlist;
}
