import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'uuid', nullable: false })
  producId: string;
  @Column({ type: 'uuid', nullable: false })
  customerId: string;
  @Column({ type: 'integer', nullable: false })
  amount: number;
}
