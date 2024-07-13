import axios from "axios"

const iphones_Url = "/api/products?organization_id=59bc18faa0544ed29897b6a3ed522e95&Appid=WKSL7B10OGTLAOL&Apikey=42581df2823c4741a5dc9ca8283529fa20240712123035745664" 



export const fetchData = async() => {
    const response = await axios.get(iphones_Url)
    return response.data.items
}
export const fetchDataId = async(id) => {
    const response = await axios.get(`/api/products/${id}?organization_id=59bc18faa0544ed29897b6a3ed522e95&Appid=WKSL7B10OGTLAOL&Apikey=42581df2823c4741a5dc9ca8283529fa20240712123035745664`)
    return response
}