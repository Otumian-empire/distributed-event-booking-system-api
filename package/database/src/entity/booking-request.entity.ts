import { BookingRequestStatus } from "@packages/core";
import { Column, Entity, ManyToOne } from "typeorm";
import { EventEntity } from "./event.entity";
import SupportEntity from "./support.entity";
import { UserEntity } from "./user.entity";

@Entity("booking_requests")
export class BookingRequestEntity extends SupportEntity {
    // Must be within the min and max number of seats that can be requested
    @Column({ type: "bigint" })
    requestedSeats!: number;

    @Column({
        type: "varchar",
        default: BookingRequestStatus.PENDING,
    })
    status!: BookingRequestStatus;

    @Column({ type: "text", default: "" })
    failureReason?: string;

    @ManyToOne(() => UserEntity)
    user!: UserEntity;

    @ManyToOne(() => EventEntity)
    event!: EventEntity;
}
