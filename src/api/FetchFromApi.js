import axios from "axios"

const iphones_Url = `/api/products?organization_id=${import.meta.env.VITE_REACT_ORG_ID}&Appid=${import.meta.env.VITE_REACT_APP_ID}&Apikey=${import.meta.env.VITE_REACT_API_KEY}`



export const fetchData = async() => {
    const response = await axios.get(iphones_Url)
    return response.data.items
}
export const fetchDataId = async(id) => {
    const response = await axios.get(`/api/products/${id}?organization_id=${import.meta.env.VITE_REACT_ORG_ID}&Appid=${import.meta.env.VITE_REACT_APP_ID}&Apikey=${import.meta.env.VITE_REACT_API_KEY}`)
    return response
}
