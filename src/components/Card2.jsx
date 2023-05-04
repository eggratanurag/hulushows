/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Card({item}) {
   
  const Navigate = useNavigate();

  return (
    <div
      onClick={() => Navigate(`/show-description?id=${item?.id}`)}
      className='p-5  shadow-lg rounded-3xl bg-[#FFFFFF] cursor-pointer'
    >
      <div className='imageDiv  flex items-center gap-5'>
        <img
          className='object-cover w-24 h-24 rounded-md'
          src={item?.image}
          alt='title'
        />
        <p className=' overflow-hidden text-xl font-semibold text-slate-700'>
          {item?.name}
        </p>
      </div>
      <div className='break-words truncate overflow-hidden cardData mt-5  text-md text-slate-800'>
      <p><span className='font-semibold mt-1'>Days:</span> {item?.schedule}</p>
      <p><span className='font-semibold mt-1'>Timing:</span> {item?.runtime}</p>
      <p><span className='font-semibold mt-1'>Price:</span> {item?.price}</p>
      <p><span className='font-semibold mt-1'>Contact No.:</span> {item?.number}</p>
      </div>

    </div>
  );
}
