import axios from "axios";
import { REACT_APP_BASE_URL } from "./apiConfig";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL });


export const GETCATEGORYLIST = () => API.get("/ws-categorylist.php");


// Get All questions
export const GETALLPRODUCTSPERCATEGORY = ( categoryId ) => {
    const queryString = new URLSearchParams();
    // Add categoryId only if it exists
    if (categoryId) {
        queryString.append('cat_id', categoryId);
    }
    return API.get(`/ws-productlistcat.php?${queryString.toString()}`);
};
// Get All products
export const GETALLPRODUCTS = () => {
    // Add categoryId only if it exists
    return API.get(`/ws-productlist.php`);
};
// Get Product Details
export const GETPRODUCTDETAILS = ( categoryId ) => {
    const queryString = new URLSearchParams();
    // Add categoryId only if it exists
    if (categoryId) {
        queryString.append('id', categoryId);
    }
    return API.get(`/ws-productdetail.php?${queryString.toString()}`);
};