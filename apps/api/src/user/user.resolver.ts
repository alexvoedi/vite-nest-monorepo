import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GetUserQuery } from './user';
import { GetUserData } from 'shared';

@Resolver(() => GetUserQuery)
export class UserResolver {
  @Query(() => GetUserQuery)
  async user(
    @Args('id', { type: () => Int }) id: number,
    @Args('email', { type: () => String }) email: string,
  ): Promise<GetUserData> {
    return {
      id,
      email,
    };
  }
}
