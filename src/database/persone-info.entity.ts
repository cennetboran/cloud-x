import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonalInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  address: string;
  @Column({ type: 'text', nullable: false })
  city: string;
  @Column({ type: 'text', nullable: false })
  country: boolean;
}
