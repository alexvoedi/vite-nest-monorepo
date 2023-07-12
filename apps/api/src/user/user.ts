import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GetUserData } from 'shared';

@ObjectType()
export class GetUserQuery implements GetUserData {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;
}
