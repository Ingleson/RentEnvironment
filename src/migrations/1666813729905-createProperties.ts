import { MigrationInterface, QueryRunner } from "typeorm";

export class createProperties1666813729905 implements MigrationInterface {
    name = 'createProperties1666813729905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ALTER COLUMN "propertyId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ALTER COLUMN "propertyId" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
