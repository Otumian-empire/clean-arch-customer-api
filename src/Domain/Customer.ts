import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from "typeorm";

@Entity({ name: "customer" })
export default class Customer {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ nullable: false })
    Username: string;

    @Column({ nullable: false })
    FullName: string;

    @Column({ nullable: false })
    Email: string;

    @CreateDateColumn({ type: "timestamptz" })
    DateOfBirth: Date;
}
