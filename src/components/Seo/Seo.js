import { useEffect } from "react";


const usePageMeta = ({title, description, keywords}) =>{
  const defaultTitle = "Buy Gabapentin Online Overnight Delivery | Order Fioricet Medicine USA";
  const defaultDesc = "Gabapentin Shop is a reputed store in USA where order fioricet 180 tabs, gabapentin medicine. Buy gabapentin online for epilepsy treatment. For purchase click on gabapentinshop.com";
  const defaultKey = "Buy Gabapentin Online, Order Fioricet Online, Gabapentin Online 180 Tabs";
  

  useEffect(() => {
      document.title = title || defaultTitle;
      document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
      document.querySelector("meta[name='keywords']").setAttribute("content", keywords || defaultKey);

  }, [defaultTitle, title, defaultDesc, description,keywords]);
};

export default usePageMeta