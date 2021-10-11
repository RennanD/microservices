import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

@Entity('modules')
export class Module {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  slug!: string;

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
