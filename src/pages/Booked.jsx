import React from 'react';
import Card2 from '../components/Card2'

const Booked = () => {
    const recieptDetails = JSON.parse(localStorage.getItem("shows"));

    return (
        <div className='mx-auto pt-12 h-full w-[min(1200px,95%)] grid xs:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 '>
          

            {recieptDetails?.map((item, index)=> (
               <React.Fragment key={index}>
                   <Card2 item={item}/>
               </React.Fragment>
            ))}
            
        </div>
    );
}

export default Booked;
