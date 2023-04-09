import { ApiProperty } from "@nestjs/swagger";
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjectEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({nullable: false })
  id: number;

  @Column()
  @ApiProperty({default: "" })
  area: string;

  @Column()
  @ApiProperty({default: "" })
  district: string;
  
  @Column()
  @ApiProperty({default: "" })
  address: string;

  @Column()
  @ApiProperty({default: "" })
  object_address: string;

  @Column()
  @ApiProperty({default: "" })
  object_condition: string;

  @Column()
  @ApiProperty({default: "" })
  object_type: string;

  @Column()
  @ApiProperty({default: "" })
  object_square: string;

  @Column()
  @ApiProperty({default: "" })
  object_length: string;

  @Column()
  @ApiProperty({default: "" })
  units_measurement: string;

  @Column()
  @ApiProperty({default: "" })
  owner: string;

  @Column()
  @ApiProperty({default: "" })
  actual_user: string;

  @Column()
  @ApiProperty({default: "" })
  photo_path: string;

  @Column()
  @ApiProperty({default: "" })
  video_path: string;

  @Column()
  @ApiProperty({default: "" })
  map_path: string;

  @Column()
  @ApiProperty({default: "" })
  area_btn: string;

  @Column()
  @ApiProperty({default: "" })
  spot_area: string;

  @Column()
  @ApiProperty({default: "" })
  height: string;

  @Column()
  @ApiProperty({default: "" })
  wall_material: string;

  @Column()
  @ApiProperty({default: "" })
  year_construction_start: string;

  @Column()
  @ApiProperty({default: "" })
  year_completion_construction: string;

  @Column()
  @ApiProperty({default: "" })
  blocking_services: string;

  @Column()
  @ApiProperty({default: "" })
  checking_department: string;

  @Column()
  @ApiProperty({default: "" })
  number_letter_edo: string;

  @Column()
  @ApiProperty({default: "" })
  date_letter_edo: string;

  @Column()
  @ApiProperty({default: "" })
  comment_object_type: string;

  @Column()
  @ApiProperty({default: "" })
  religion: string;

  @Column()
  @ApiProperty({default: "" })
  okn: string;

  @Column()
  @ApiProperty({default: "" })
  dismantled: string;

  @Column()
  @ApiProperty({default: "" })
  date_dismantling:string;

  @Column()
  @ApiProperty({default: "" })
  person_dismantling:string;

  @Column()
  @ApiProperty({default: "" })
  identified: string;

  @Column()
  @ApiProperty({default: "" })
  oiv: string;

  @Column()
  @ApiProperty({default: "" })
  internal_reconstruction: string;

  @Column()
  @ApiProperty({default: "" })
  manual_status_adjustment: string;

  @Column()
  @ApiProperty({default: "" })
  comment_manual_adjustment: string;

  @Column()
  @ApiProperty({default: "" })
  considered_in: string;

  @Column()
  @ApiProperty({default: "" })
  appendices_pp: string;

  @Column()
  @ApiProperty({default: "" })
  number_objects: string;

  @Column()
  @ApiProperty({default: "" })
  number_complaints: string;

  @Column()
  @ApiProperty({default: "" })
  consturctive: string;

  @Column()
  @ApiProperty({default: "" })
  card_additional_fields: string;

  @Column()
  @ApiProperty({default: "" })
  characteristics_additional_fields: string;

  @Column()
  @ApiProperty({default: "" })
  rest_additional_fields: string;

  @Column()
  @ApiProperty({default: "" })
  status1: string;

  @Column()
  @ApiProperty({default: "" })
  status2: string;

  @Column()
  @ApiProperty({default: 0 })
  cadastr_number: number;

  @Column()
  @ApiProperty({default: 0 })
  latitude: number;

  @Column()
  @ApiProperty({default: 0 })
  longtitude: number;
}