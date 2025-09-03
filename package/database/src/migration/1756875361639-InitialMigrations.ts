import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1756875361639 implements MigrationInterface {
    name = "InitialMigrations1756875361639";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "admins" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "role" character varying NOT NULL DEFAULT 'moderator', CONSTRAINT "UQ_0e1a5fde65beb42294f4307ee37" UNIQUE ("uuid"), CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0e1a5fde65beb42294f4307ee3" ON "admins" ("uuid") `
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_051db7d37d478a69a7432df147" ON "admins" ("email") `
        );
        await queryRunner.query(
            `CREATE TABLE "events" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" text NOT NULL DEFAULT '', "date" date NOT NULL, "totalNumberOfSeats" bigint NOT NULL DEFAULT '0', "totalNumberBookedOfSeats" bigint NOT NULL DEFAULT '0', "maximumSeatsPerBookingRequest" bigint NOT NULL DEFAULT '1', "minimumSeatsPerBookingRequest" bigint NOT NULL DEFAULT '1', "adminId" integer, CONSTRAINT "UQ_f1ae990f4f98735f0285a949690" UNIQUE ("uuid"), CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f1ae990f4f98735f0285a94969" ON "events" ("uuid") `
        );
        await queryRunner.query(
            `CREATE TABLE "bookings" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "numberOfSeatsBooked" bigint NOT NULL DEFAULT '0', "userId" integer, "eventId" integer, CONSTRAINT "UQ_3a5b02cbe556f2f6bea8f06f0b1" UNIQUE ("uuid"), CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_3a5b02cbe556f2f6bea8f06f0b" ON "bookings" ("uuid") `
        );
        await queryRunner.query(
            `CREATE TABLE "users" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "dateOfBirth" date NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_951b8f1dfc94ac1d0301a14b7e1" UNIQUE ("uuid"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_951b8f1dfc94ac1d0301a14b7e" ON "users" ("uuid") `
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `
        );
        await queryRunner.query(
            `CREATE TABLE "booking_requests" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "requestedSeats" bigint NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', "failureReason" text NOT NULL DEFAULT '', "userId" integer, "eventId" integer, CONSTRAINT "UQ_2b21dbb9dfa68d14a8cb36452b6" UNIQUE ("uuid"), CONSTRAINT "PK_62c29ee249979fe0bcdcde33dae" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_2b21dbb9dfa68d14a8cb36452b" ON "booking_requests" ("uuid") `
        );
        await queryRunner.query(
            `ALTER TABLE "events" ADD CONSTRAINT "FK_dbec08f30021920b79176cfd06c" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "bookings" ADD CONSTRAINT "FK_38a69a58a323647f2e75eb994de" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "bookings" ADD CONSTRAINT "FK_f95d476ef16fad91a50544b60c3" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "booking_requests" ADD CONSTRAINT "FK_13b76e09c12e01858f389e66674" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "booking_requests" ADD CONSTRAINT "FK_f953ad6756e38c28b401fdfc4be" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "booking_requests" DROP CONSTRAINT "FK_f953ad6756e38c28b401fdfc4be"`
        );
        await queryRunner.query(
            `ALTER TABLE "booking_requests" DROP CONSTRAINT "FK_13b76e09c12e01858f389e66674"`
        );
        await queryRunner.query(
            `ALTER TABLE "bookings" DROP CONSTRAINT "FK_f95d476ef16fad91a50544b60c3"`
        );
        await queryRunner.query(
            `ALTER TABLE "bookings" DROP CONSTRAINT "FK_38a69a58a323647f2e75eb994de"`
        );
        await queryRunner.query(
            `ALTER TABLE "events" DROP CONSTRAINT "FK_dbec08f30021920b79176cfd06c"`
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_2b21dbb9dfa68d14a8cb36452b"`
        );
        await queryRunner.query(`DROP TABLE "booking_requests"`);
        await queryRunner.query(
            `DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_951b8f1dfc94ac1d0301a14b7e"`
        );
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(
            `DROP INDEX "public"."IDX_3a5b02cbe556f2f6bea8f06f0b"`
        );
        await queryRunner.query(`DROP TABLE "bookings"`);
        await queryRunner.query(
            `DROP INDEX "public"."IDX_f1ae990f4f98735f0285a94969"`
        );
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(
            `DROP INDEX "public"."IDX_051db7d37d478a69a7432df147"`
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_0e1a5fde65beb42294f4307ee3"`
        );
        await queryRunner.query(`DROP TABLE "admins"`);
    }
}
