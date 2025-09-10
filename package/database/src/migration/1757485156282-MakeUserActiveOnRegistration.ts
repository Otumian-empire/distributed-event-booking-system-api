import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeUserActiveOnRegistration1757485156282 implements MigrationInterface {
    name = 'MakeUserActiveOnRegistration1757485156282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT false`);
    }

}
