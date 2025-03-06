import axios from "axios";
import { REACT_APP_BASE_URL, REACT_APP_MAIL_URL } from "./apiConfig";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL });
export const MAIL_API = axios.create({ baseURL: REACT_APP_MAIL_URL });


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

//get all blogs

export const GETALLBLOGS = () => {
    return API.get(`/ws-blog.php`);
};

export const GETBLOGDETAILS = ( blogid ) => {
    const queryString = new URLSearchParams();
    // Add blogid only if it exists
    if (blogid) {
        queryString.append('id', blogid);
    }
    return API.get(`/ws-blog-details.php?${queryString.toString()}`);
};

//get all HOME PAGE DATA

export const GETALLHOMEDATA = () => {
    return API.get(`/ws-homepage.php`);
};
//get all FOOTER DATA

export const GETFOOTERDATA = () => {
    return API.get(`/ws-setting.php`);
};
//get all DELIVERY INFORMATION DATA

export const GETDELIVERYINFODATA = () => {
    return API.get(`/ws-delivery-information.php`);
};
//get all Privacy Policy DATA

export const GETALLPRIVACYPOLICY = () => {
    return API.get(`/ws-privacy-policy.php`);
};
//get all TERMS CONDITIONS DATA

export const GETALLTERMSDATA = () => {
    return API.get(`/ws-terms-and-conditions.php`);
};
//get all TERMS CONDITIONS DATA

export const GETRETURNSPOLICY = () => {
    return API.get(`/ws-returns-policy.php`);
};
//get all Faq Data

export const GETALLFAQDATA = () => {
    return API.get(`/ws-faq.php`);
};
//get all contact us Data

export const GETALLCONTACTUSDATA = () => {
    return API.get(`ws-contactus.php`);
};
//get all settings Data

export const GETALLSETTINGSDATA = () => {
    return API.get(`ws-setting.php`);
};

export const MAILTOCONTACT = (data) => MAIL_API.post("/express_backend", data);