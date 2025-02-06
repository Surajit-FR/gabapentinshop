import { useEffect } from "react";


const usePageMeta = ({title, description, keywords}) =>{
  const defaultTitle = "app-name";
  const defaultDesc = "meta description";
  const defaultKey = "meta defaultKey";
  

  useEffect(() => {
      document.title = title || defaultTitle;
      document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
      document.querySelector("meta[name='keywords']").setAttribute("content", keywords || defaultKey);

  }, [defaultTitle, title, defaultDesc, description,keywords]);
};

export default usePageMeta