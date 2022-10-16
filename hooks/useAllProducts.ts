import React  , { useState } from "react";
import axios from '../utils/axios';


const useAllProducts =  async() => {
    const [data, setData ] = useState();

    const res = await axios.get("/api/prod/all");
    if (res.data.success) {
        setData(res.data.data);
    }
    console.log(res);
    return { data };
   
} 
export default useAllProducts;