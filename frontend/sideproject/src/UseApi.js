import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext.js";
import axiosInstance from "./utils.js";
import { useNavigate } from "react-router-dom";

const UseApi = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const apiCall = async ({ url, method, data = null }) => {

        try {
            setLoading(true)
            const response = await axiosInstance({ url, method, data })
            setLoading(false)
            return response.data
        } catch (error) {
            setError(true)
            setLoading(false)
            if (error.response) {
                if (error.response.status === 401) {
                    console.log(error.response.data.message)
                    setUser(null)
                    navigate('/login')
                }
                else if (error.response.status === 403) {
                    console.log("forbidden access")
                }
            }
        } finally{
            setLoading(false)
        }
    }
    return { apiCall}
}
export default UseApi