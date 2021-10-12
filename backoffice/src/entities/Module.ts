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
import { Company } from './Company';

@Entity('modules')
export class Module {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @ManyToMany(() => Company, { eager: true })
  @JoinTable({
    name: 'companies_modules',
    joinColumns: [{ name: 'module_id' }],
    inverseJoinColumns: [{ name: 'company_id' }],
  })
  companies!: Company[];

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
