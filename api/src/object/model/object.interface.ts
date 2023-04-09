
import { ApiProperty } from "@nestjs/swagger";

export class ObjectI {

  @ApiProperty({required: false})
  id?: number;

  @ApiProperty()
  area?: string;

  @ApiProperty()
  district?: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  object_address?: string;

  @ApiProperty()
  object_condition?: string;

  @ApiProperty()
  object_type?: string;

  @ApiProperty()
  object_square?: string;

  @ApiProperty()
  object_length?: string;

  @ApiProperty()
  units_measurement?: string;

  @ApiProperty()
  owner?: string;

  @ApiProperty()
  actual_user?: string;

  @ApiProperty()
  photo_path?: string;

  @ApiProperty()
  video_path?: string;
 
  @ApiProperty()
  map_path?: string;
 
  @ApiProperty()
  area_btn?: string;

  @ApiProperty()
  spot_area?: string;

  @ApiProperty()
  height?: string;
 
  @ApiProperty()
  wall_material?: string;
 
  @ApiProperty()
  year_construction_start?: string;
 
  @ApiProperty()
  year_completion_construction?: string;

  @ApiProperty()
  blocking_services?: string;

  @ApiProperty()
  checking_department?: string;
 
  @ApiProperty()
  number_letter_edo?: string;

  @ApiProperty()
  date_letter_edo?: string;

  @ApiProperty()
  comment_object_type?: string;

  @ApiProperty()
  religion?: string;
 
  @ApiProperty()
  okn?: string;
 
  @ApiProperty()
  dismantled?: string;

  @ApiProperty()
  date_dismantling?:string;
 
  @ApiProperty()
  person_dismantling?:string;

  @ApiProperty()
  identified?: string;

  @ApiProperty()
  oiv?: string;

  @ApiProperty()
  internal_reconstruction?: string;

  @ApiProperty()
  manual_status_adjustment?: string;

  @ApiProperty()
  comment_manual_adjustment?: string;

  @ApiProperty()
  considered_in?: string;

  @ApiProperty()
  appendices_pp?: string;

  @ApiProperty()
  number_objects?: string;

  @ApiProperty()
  number_complaints?: string;

  @ApiProperty()
  consturctive?: string;

  @ApiProperty()
  card_additional_fields?: string;

  @ApiProperty()
  characteristics_additional_fields?: string;

  @ApiProperty()
  rest_additional_fields?: string;

  @ApiProperty()
  status1?: string;

  @ApiProperty()
  status2?: string;

  @ApiProperty()
  cadastr_number?: number;

  @ApiProperty()
  latitude?: number;

  @ApiProperty()
  longtitude?: number;
}