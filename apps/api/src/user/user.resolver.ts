import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(): Promise<User> {
    return {
      id: '1',
      email: 'john.doe@example.com',
    };
  }
}
