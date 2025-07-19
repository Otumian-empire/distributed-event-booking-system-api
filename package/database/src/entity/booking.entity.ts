import { Column, Entity, ManyToOne } from "typeorm";
import { EventEntity } from "./event.entity";
import SupportEntity from "./support.entity";
import { UserEntity } from "./user.entity";

@Entity("bookings")
export class BookingEntity extends SupportEntity {
    @ManyToOne(() => UserEntity, (user) => user.bookings)
    user!: UserEntity;

    @ManyToOne(() => EventEntity, (event) => event.bookings)
    event!: EventEntity;

    @Column({ type: "bigint", default: 0 })
    numberOfSeatsBooked!: number;
}
