/* eslint-disable no-unused-vars */
import Card from '../components/Card'
import  React, {useEffect, useState} from "react"
import  {PublicDataState}   from '../context/DataProvider'


const Home = () => {
    const { publicData, setPublicData } = PublicDataState();


    return (
        <div className="mx-auto pt-12 grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-[min(1600px,95%)]">
            
       
            {publicData?.map((item, index) => (
                <React.Fragment key={index}>
               <Card 
                  item={item}
                />
                </React.Fragment>
            ))}
          
        </div>
    );
}

export default Home;
