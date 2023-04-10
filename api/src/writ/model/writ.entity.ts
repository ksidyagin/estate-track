import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WritEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({nullable: false })
  id: number;

  @Column()
  @ApiProperty({nullable: true })
  cadastr_number: string;

  @Column()
  @ApiProperty({nullable: true })
  promzone: string;

  @Column()
  @ApiProperty({nullable: true })
  protocol: string;

  @Column()
  @ApiProperty({nullable: true })
  first_review: string;
  
  @Column()
  @ApiProperty({default: 0 })
  count_reviews: number;

  @Column()
  @ApiProperty({nullable: true })
  note: string;

  @Column()
  @ApiProperty({nullable: true })
  object_id: number;
}