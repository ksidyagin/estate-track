import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {

  @IsEmail()
  @ApiProperty({nullable: true })
  email: string;

  @IsNotEmpty()
  @ApiProperty({nullable: true })
  password: string;

}