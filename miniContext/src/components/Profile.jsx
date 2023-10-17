import React, {useContext} from 'react'
import UserContext from '../context/UserContext'



function Profile() {

    const { user } = useContext(UserContext)//set user is already define  


        if (!user) {
            return <div>PLease Login</div>
        }else{
            return <div>Welcome { user.username }</div>
        }
}

export default Profile