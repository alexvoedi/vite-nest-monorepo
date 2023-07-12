import { z } from 'zod'

export const GetUserRequest = z.object({
  id: z.number(),
  email: z.string().email(),
})

export const GetUserData = z.object({
  id: z.number(),
  email: z.string().email(),
})

export const GetUserResponse = z.object({
  user: GetUserData,
})

export type GetUserRequest = z.infer<typeof GetUserRequest>
export type GetUserData = z.infer<typeof GetUserData>
export type GetUserResponse = z.infer<typeof GetUserResponse>
