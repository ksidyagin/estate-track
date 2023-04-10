import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DecisionEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({nullable: false })
  id: number;

  @Column()
  @ApiProperty({nullable: true })
  new_asignment: string;
  
  @Column()
  @ApiProperty({nullable: true })
  past_asignment: string;

  @Column()
  @ApiProperty({nullable: true })
  deadline: string;

  @Column()
  @ApiProperty({nullable: true })
  timer: string;

  @Column()
  @ApiProperty({default: 0 })
  count_decisions: number;

  @Column()
  @ApiProperty({nullable: true })
  documents: string;

  @Column()
  @ApiProperty({nullable: true })
  status: string;

  @Column()
  @ApiProperty({nullable: true })
  worker: string;

  @Column()
  @ApiProperty({nullable: true })
  object_id: number;

}