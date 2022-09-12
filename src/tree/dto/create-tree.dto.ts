import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTreeDTO {
  _id?: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  isEndangered?: boolean;
}
