import React,{useState} from 'react';
import {PublicDataState} from '../context/DataProvider'
import ShowForm from '../components/ShowForm'
import { useLocation, useNavigate  } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const BookShow = () => {
    const Navigate = useNavigate();
    const { publicData } = PublicDataState();
    const search = useQuery();
    const filteredArray = publicData?.filter(item => 
        item.show.id == search.get("id"));
    const showArray = filteredArray?.[0]?.show

    const [formData, setFormData] = useState({
        id: showArray?.id,
        image: showArray?.image?.medium,
        name: showArray?.name,
        runtime: showArray?.runtime,
        price: 120,
        schedule: "",
        number: "",
        
    });


   async function makePayment () {
        const prevData = await JSON.parse(localStorage.getItem("shows"));

        if (prevData) {
          prevData.push(formData);
          localStorage.setItem("shows", JSON.stringify(prevData));
        } else {
          const newArray = [formData];
          localStorage.setItem("shows", JSON.stringify(newArray));
        }
        Navigate("/booked-shows");
    }


    return (
        <div>
          
            <ShowForm
              showArray={showArray}
              setFormData={setFormData}
              makePayment={makePayment}
             />
        </div>
    );
}

export default BookShow;
