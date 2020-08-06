import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Placar1596721076967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"partida",
            columns: [

                {
                    name:"id",
                    type:"int",
                    isPrimary:true
                },
                {
                    name:"cidade",
                    type:"varchar",
                    precision:50
                },
                {
                    name:"data",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"hora",
                    type:"varchar",
                    precision:5
                },
                {
                    name:"timecasa",
                    type:"varchar",
                    precision:50
                },
                {
                    name:"timevisitante",
                    type:"varchar",
                    precision:50
                },
                {
                    name:"gols",
                    type:"int",
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"updated_at",
                    type:"timestamp",
                    default:"now()"
                }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('placar')
    }

}
