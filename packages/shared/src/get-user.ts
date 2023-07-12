import { z } from 'zod'

const GetUser = z.object({
  id: z.string(),
  email: z.string().email(),
})

export type GetUser = z.infer<typeof GetUser>

export type GetUserQuery = {
  user: GetUser
}

export const x = 1
