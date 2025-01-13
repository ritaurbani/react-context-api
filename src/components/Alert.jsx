import { useAlertContext } from "../contexts/AlertContext"
import { useContext } from "react"


function Alert() {

    //ci ritorna quello scritto nel provide value: const providerValue = {error, setError}
    // const contextValue = useAlertContext()
    const { error, setError } = useAlertContext()
    //error e una variabile reattiva che quando aggiornata aggiorna anche html collegata
    return (
        <>
            {error && <div>
                {/* quando compare errore chiudilo */}
                <button onClick={() => setError("")}> X </button>
                {error}
            </div>}
        </>

    )
}

export default Alert
//Lo mettiamo nel Layout perche sara unico alert per tutti