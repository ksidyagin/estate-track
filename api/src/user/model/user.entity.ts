import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({nullable: false })
  id: number;

  @Column({unique: true})
  @ApiProperty({nullable: true })
  username: string;

  @Column({unique: true})
  @ApiProperty({nullable: true })
  email: string;

  @Column({select: false})
  @ApiProperty({nullable: true })
  password: string;

  @Column()
  @ApiProperty({nullable: true })
  role: string;

  @Column()
  @ApiProperty()
  group: string;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

}