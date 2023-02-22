import axios from "axios";
import { IOCServices } from ".";

const restProvider = (container: IOCServices) => {
    const baseURL = `${process.env.NEXT_PUBLIC_REST_URL || ''}`
    const instance = axios.create({ baseURL })

    return instance
}

export default restProvider

