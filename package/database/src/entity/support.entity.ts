import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Generated,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

export default abstract class SupportEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Index()
    @Column({ type: "uuid", unique: true })
    @Generated("uuid")
    uuid!: string;

    @CreateDateColumn({ type: "timestamp" })
    createdDate!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedDate!: Date;

    constructor(model?: Partial<SupportEntity>) {
        super();
        Object.assign(this, model);
    }

    toJSON() {
        return {
            ...this,
            id: undefined, // Removes 'id' when serializing
        };
    }
}
