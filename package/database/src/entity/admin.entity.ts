import { AdminRole } from "@packages/core";
import { Column, Entity, Index, OneToMany } from "typeorm";
import SupportEntity from "./support.entity";
import { EventEntity } from "./event.entity";

@Entity("admins")
export class AdminEntity extends SupportEntity {
    @Index()
    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({ default: false })
    isActive!: boolean;

    @Column({
        type: "enum",
        enum: AdminRole,
        default: AdminRole.MODERATOR,
    })
    role!: string;

    @OneToMany(() => EventEntity, (events) => events.admin)
    events!: EventEntity[];
}
