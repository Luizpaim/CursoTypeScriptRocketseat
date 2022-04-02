//arquivo migration estrutura tabela
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1639435459476 implements MigrationInterface {
  //metodo typeorm para criar as nossas tabelas
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "name", type: "varchar" },
          { name: "email", type: "varchar" },
          { name: "admin", type: "boolean", default: false },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }
  //metodo para remover tabelas
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
