import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from 'shared';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;
}
