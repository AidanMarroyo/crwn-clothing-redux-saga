import { createSelector } from 'reselect'

const selectUserReducer = (state) => state.user

export const userSelector = (state) => state.user.currentUser

export const selectDropdownOpen = createSelector(
  [selectUserReducer],
  (user) => user.isDropdownOpen
)
