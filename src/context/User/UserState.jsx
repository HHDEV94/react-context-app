import { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axios from 'axios'

const UserState = ({ children }) => {
  const initialState = {
    users: [],
    userSelected: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const url = 'https://reqres.in/api/users'
    const response = await axios.get(url)
    dispatch({
      type: 'GET_USERS',
      payload: response.data.data
    })
  }
  const getProfile = async id => {
    const url = `https://reqres.in/api/users/${id}`
    const response = await axios.get(url)
    dispatch({
      type: 'GET_PROFILE',
      payload: response.data.data
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        userSelected: state.userSelected,
        getUsers,
        getProfile
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
