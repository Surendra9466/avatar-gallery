import { useEffect, useState } from "react"

const useApi = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchApi = () => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setData(json)
            })
    }

    useEffect(() => {
        setTimeout(()=>{
            fetchApi();
        },2000)
    }, []);

    return { loading, data }
}

export default useApi;