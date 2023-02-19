import { configureStore } from '@reduxjs/toolkit'
import { user } from './slicers/user'

const store = configureStore({
  reducer: {
    userReducer: user.reducer,
  },
})

// export default the store
export default store
