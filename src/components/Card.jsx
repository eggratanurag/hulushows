/* eslint-disable react/prop-types */

import {Link} from "react-router-dom"

const Card = ({ item }) => {
  const name = item?.show?.name;
  const id = item?.show?.id;
  const image = item?.show?.image?.medium;
  const rating = item?.show?.rating;
  const summary = item?.show?.summary;

  return (
    <div  className='group relative auto font-poppins bg-black'>
      <img
        alt={name}
        src={image}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative p-4 sm:p-6 lg:p-8'>
        <p className='text-sm font-medium  tracking-widest text-white'>
        Rating: {rating.average ? (Object.values(rating)) : "not available"}
        </p>

        <p className='text-xl font-bold text-white sm:text-2xl'>{name}</p>

        <div  className='mt-32 text-white sm:mt-48 lg:mt-64 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <Link 
            to={`/show-description?id=${id}`}
            className="rounded-full  p-2 px-5 text-lime bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50" >
                view</Link>
          <div className='pt-5 truncate overflow-hidden '>
            <p className='text-sm text-white'>
              {summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
