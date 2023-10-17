import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children})=> {

    //do api calls here
    const [user, setuser] = useState(null)

    return (
        <UserContext.Provider value={ {user, setuser} } >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider