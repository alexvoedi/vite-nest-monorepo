import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { GetUserResponse } from 'shared';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(): Promise<GetUserResponse> {
    return {
      id: 1,
      email: 'john.doe@example.com',
    };
  }
}
