export enum AdminRole {
    MANAGER = "manager",
    MODERATOR = "moderator",
}

export enum BookingRequestStatus {
    // The booking request has been received and is awaiting processing.
    PENDING = "pending",

    // The booking request has been successfully processed and confirmed.
    // A corresponding BookingEntity must have been created.
    CONFIRMED = "confirmed",

    // The booking request cannot be fulfilled when the event is full, payment failed, etc
    FAILED = "failed",

    // A user can cancel a booking or when there is a refund
    // Prior to this the seats have been booked and as such measures should be taken to
    // reverse the number of seats booked
    CANCELLED = "cancelled",
}
