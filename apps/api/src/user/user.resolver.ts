import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { GetUser, x } from 'shared';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(): Promise<GetUser> {
    console.log(x);
    return {
      id: '1',
      email: 'john.doe@example.com',
    };
  }
}
