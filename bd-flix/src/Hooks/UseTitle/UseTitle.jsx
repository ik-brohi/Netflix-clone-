import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `BD Flix- ${title}`
    }, [title])
}

export default useTitle;