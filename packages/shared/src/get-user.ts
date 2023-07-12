import { z } from 'zod'

export const GetUserRequest = z.null()

export const GetUserResponse = z.object({
  id: z.number(),
  email: z.string().email(),
})

export type GetUserResponse = z.infer<typeof GetUserResponse>

export type GetUserQuery = {
  user: GetUserResponse
}
