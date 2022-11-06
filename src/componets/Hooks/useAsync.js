import { useState, useEffect } from "react"

export const useAsync = (asyncFn, dependencias = []) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    // Estado que controla el estado de carga
    const [cargando, setCargando] = useState(true)

    if (!Array.isArray(dependencias)) {
        dependencias = []
    }

    useEffect(() => {
        setCargando(true)

        asyncFn()
            .then(data => {
                setData(data) 
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setCargando(false)
            }
            )
    }, dependencias) 

    return {
        data,
        error,
        cargando
    }

}
