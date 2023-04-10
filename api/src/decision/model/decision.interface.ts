import { ApiProperty } from "@nestjs/swagger";


export class DecisionI {

  @ApiProperty()
  id?: number;

  @ApiProperty()
  new_asignment?: string;
  
  @ApiProperty()
  past_asignment?: string;

  @ApiProperty()
  deadline?: string;

  @ApiProperty()
  timer?: string;

  @ApiProperty()
  count_decisions?: number;

  @ApiProperty()
  documents?: string;

  @ApiProperty()
  status?: string;
  @ApiProperty()
  object_id?: number;

  @ApiProperty()
  worker?: string;
}