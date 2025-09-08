import { AdminRole } from "@packages/core";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { EventEntity } from "./event.entity";
import SupportEntity from "./support.entity";

@Entity("admins")
export class AdminEntity extends SupportEntity {
    @Index()
    @Column({ type: "varchar", nullable: false })
    email: string;

    @Column({ type: "varchar", nullable: false })
    password: string;

    @Column({ type: "boolean", default: false })
    isActive: boolean;

    @Column({
        type: "varchar",
        default: AdminRole.MODERATOR,
    })
    role: AdminRole;

    @OneToMany(() => EventEntity, (events) => events.admin)
    events: EventEntity[];
}
