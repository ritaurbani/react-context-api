import { createContext, useState, useContext } from "react"

const AlertContext = createContext()

//creiamo parte del componente - wrappera tutta app (quindi usiamo children)
function AlertProvider({children}) {

    const [error, setError] = useState("")
    //predisponiamo a essere utilizzati - estrapolare stato dinamico e mettere nel contest
    const providerValue = {error, setError}

    return (
//estrapolare stato dinamico e mettere nel contest
<AlertContext.Provider value={providerValue}>    
    {children}
</AlertContext.Provider>    
)
}

//predisponiamo funzione useAlertContext per essere utilizzata invece di fare ogni volta
//const {posts} = useContext(GlobalContext)
function useAlertContext () {
    return useContext(AlertContext)
}

export {
    AlertProvider,
    useAlertContext
}

//ORA DOBBIAMO SOLO UTILIZZARLO - per ex in componente Alert