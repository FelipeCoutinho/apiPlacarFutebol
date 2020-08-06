import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1596729560277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"User",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true
                },
                {
                    name:"firtName",
                    type:"varchar",
                    precision:50
                },
                {
                    name:"lastName",
                    type:"varchar",
                    precision:50
                },
                {
                    name:"age",
                    type:"int"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('Users')
    }

}
