import { Column, Entity, Index, OneToMany } from "typeorm";
import { BookingEntity } from "./booking.entity";
import SupportEntity from "./support.entity";

@Entity("users")
export class UserEntity extends SupportEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: "date" })
    dateOfBirth: Date;

    @Index()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => BookingEntity, (booking) => booking.user)
    bookings: BookingEntity[];
}
