/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";

const publicDataContext = createContext();

const PublicDataProvider = ({ children }) => {
  const [publicData, setPublicData] = useState();

    async function getPublicData () {
       
      try {    
        const data = await (
          await fetch(
            "https://api.tvmaze.com/search/shows?q=all"
          )
        ).json();
       setPublicData(data)
           
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(() => {
      getPublicData()
    }, []);

  return (
    <publicDataContext.Provider value={{ publicData, setPublicData }}>
      {children}
    </publicDataContext.Provider>
  );
};




 const PublicDataState = () => {
  return useContext(publicDataContext);
};


export {PublicDataProvider, PublicDataState};

