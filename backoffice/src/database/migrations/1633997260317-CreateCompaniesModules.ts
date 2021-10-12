import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompaniesModules1633997260317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies_modules',
        columns: [
          {
            name: 'company_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'module_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'companies_modules',
      new TableForeignKey({
        name: 'FKCompanyModule',
        referencedTableName: 'companies',
        referencedColumnNames: ['id'],
        columnNames: ['company_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'companies_modules',
      new TableForeignKey({
        name: 'FKModuleCompany',
        referencedTableName: 'modules',
        referencedColumnNames: ['id'],
        columnNames: ['module_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('companies_modules', 'company_id');
    // await queryRunner.dropForeignKey('companies_modules', 'module_id');
    await queryRunner.dropTable('companies_modules');
  }
}
