import { createContext, useState } from "react";

export const DefaultUsernameContext = createContext()

export const DefaultUsernameContextProvider =({children})=>{

    const [defaultUserName,setDefaultUserName] = useState('redoxrj')

    return (
        <>
        <DefaultUsernameContext.Provider value={{defaultUserName,setDefaultUserName}}>
        {children}
        </DefaultUsernameContext.Provider>
        </>
    )

}