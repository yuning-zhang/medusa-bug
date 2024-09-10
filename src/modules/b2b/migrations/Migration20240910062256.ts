import { Migration } from '@mikro-orm/migrations';

export class Migration20240910062256 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "employee" ("id" text not null, "name" text null, "first_name" text null, "last_name" text null, "email" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "employee_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_employee_email_unique" ON "employee" (email) WHERE deleted_at IS NULL;');

    this.addSql('create table if not exists "role" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "role_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_role_name_unique" ON "role" (name) WHERE deleted_at IS NULL;');

    this.addSql('create table if not exists "employee_roles" ("role_id" text not null, "employee_id" text not null, constraint "employee_roles_pkey" primary key ("role_id", "employee_id"));');

    this.addSql('alter table if exists "employee_roles" add constraint "employee_roles_role_id_foreign" foreign key ("role_id") references "role" ("id") on update cascade on delete cascade;');
    this.addSql('alter table if exists "employee_roles" add constraint "employee_roles_employee_id_foreign" foreign key ("employee_id") references "employee" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "employee_roles" drop constraint if exists "employee_roles_employee_id_foreign";');

    this.addSql('alter table if exists "employee_roles" drop constraint if exists "employee_roles_role_id_foreign";');

    this.addSql('drop table if exists "employee" cascade;');

    this.addSql('drop table if exists "role" cascade;');

    this.addSql('drop table if exists "employee_roles" cascade;');
  }

}
