import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { GetUserResponse } from 'shared';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(): Promise<GetUserResponse> {
    console.log('hello world 2');
    return {
      id: 1,
      email: 'john.doe@example.com',
    };
  }
}
