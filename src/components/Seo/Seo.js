import { useEffect } from "react";


const usePageMeta = ({title, description, keywords, canonic}) =>{
  const defaultTitle = "Buy Gabapentin Online Overnight Delivery | Order Fioricet Medicine USA";
  const defaultDesc = "Gabapentin Shop is a reputed store in USA where order fioricet 180 tabs, gabapentin medicine. Buy gabapentin online for epilepsy treatment. For purchase click on gabapentinshop.com";
  const defaultKey = "Buy Gabapentin Online, Order Fioricet Online, Gabapentin Online 180 Tabs";
  const defaultCanonical = 'https://gabapentinshop.com';
  

  useEffect(() => {
      document.title = title || defaultTitle;
      document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
      document.querySelector("meta[name='keywords']").setAttribute("content", keywords || defaultKey);
      document.querySelector("link[rel='canonical']").setAttribute("href", canonic || defaultCanonical);

  }, [defaultTitle, title, defaultDesc, description,keywords, canonic]);
};

export default usePageMeta