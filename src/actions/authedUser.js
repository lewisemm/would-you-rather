export const AUTHED_USER = 'AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function authedUser(userID) {
  return {
    type: AUTHED_USER,
    id: userID
  }
}

export function logout() {
  return {
    type: LOGOUT_USER
  }
}
