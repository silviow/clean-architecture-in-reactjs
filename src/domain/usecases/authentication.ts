import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

/*
*   Whoever implements this interface must have an
*   "auth" method, receive the parameters defined in
*   AuthenticationParams and return an AccountModel
*/

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
