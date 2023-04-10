import { ApiProperty } from "@nestjs/swagger";

export class WritI {

  @ApiProperty()
  id?: number;

  @ApiProperty()
  cadastr_number?: string;

  @ApiProperty()
  promzone?: string;

  @ApiProperty()
  protocol?: string;

  @ApiProperty()
  first_review?: string;
  
  @ApiProperty()
  count_reviews?: number;

  @ApiProperty()
  note?: string;

  @ApiProperty()
  object_id?: number;
}