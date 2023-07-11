import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { GetUser } from 'shared';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(): Promise<GetUser> {
    return {
      id: 222,
      email: 'john.doe@example.com',
    };
  }
}
