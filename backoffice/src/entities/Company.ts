import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';
import { Module } from './Module';

@Entity('companies')
export class Company {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  token!: string;

  @ManyToMany(() => Module, module => module, { eager: true })
  @JoinTable({
    name: 'companies_modules',
    joinColumns: [{ name: 'company_id' }],
    inverseJoinColumns: [{ name: 'module_id' }],
  })
  modules?: Module[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
