import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BookingEntity } from "./booking.entity";
import SupportEntity from "./support.entity";
import { AdminEntity } from "./admin.entity";

@Entity("events")
export class EventEntity extends SupportEntity {
    @Column()
    title!: string;

    @Column({ type: "text", default: "" })
    description!: string;

    @Column({ type: "date" })
    date!: Date;

    // This is the number of seats made available for the event
    @Column({ type: "bigint", default: 0 })
    totalNumberOfSeats!: number;

    // This is the number of seats taken
    @Column({ type: "bigint", default: 0 })
    totalNumberBookedOfSeats!: number;

    // This is the maximum number of seats that can be requested
    @Column({ type: "bigint", default: 1 })
    maximumSeatsPerBookingRequest!: number;

    // This is the minimum number of seats that can be requested
    @Column({ type: "bigint", default: 1 })
    minimumSeatsPerBookingRequest!: number;

    @OneToMany(() => BookingEntity, (booking) => booking.event)
    bookings!: BookingEntity[];

    @ManyToOne(() => AdminEntity, (admin) => admin.events)
    admin!: AdminEntity;
}
