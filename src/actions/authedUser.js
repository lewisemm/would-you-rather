export const AUTHED_USER = 'AUTHED_USER'

export default function authedUser(userID) {
  return {
    type: AUTHED_USER,
    id: userID
  }
}