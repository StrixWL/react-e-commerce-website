import { useEffect, useRef } from "react"

const useClickOutside = (callback) => {
    const ref = useRef(null)
    useEffect(() => {
        const handleClick = (event) => {
            if (!ref.current.contains(event.target))
                callback()
        }
        window.addEventListener('mousedown', handleClick)
        return () => window.removeEventListener('mousedown', handleClick)
    }, [])

    return ref
}

export default useClickOutside;