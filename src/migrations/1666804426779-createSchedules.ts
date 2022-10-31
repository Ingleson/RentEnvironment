import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedules1666804426779 implements MigrationInterface {
    name = 'createSchedules1666804426779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_user_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL DEFAULT now(), "hour" TIME NOT NULL, "propertyId" uuid NOT NULL, "userId" uuid, CONSTRAINT "PK_a5aea5dea185dc4f29bfa48fc5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`DROP TABLE "schedules_user_properties"`);
    }

}
