import { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {
  const { userSelected } = useContext(UserContext)

  return (
    <>
      {userSelected ? (
        <div className='card card-body text-center'>
          <img
            src={userSelected.avatar}
            alt='profile avatar'
            className='card-img-top rounded-circle m-auto img-fluid'
            style={{ width: 180 }}
          />
          <h1>{`${userSelected.first_name} ${userSelected.last_name}`}</h1>
          <h3>email: {userSelected.email}</h3>
        </div>
      ) : (
        <h1>No Hay Usuarios Seleccionados</h1>
      )}
    </>
  )
}

export default Profile
