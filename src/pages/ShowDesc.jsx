
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import  {PublicDataState}   from '../context/DataProvider'
import { StarIcon } from '@heroicons/react/20/solid'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const ShowDesc = () => {
    const { publicData } = PublicDataState();
    const search = useQuery();
    const filteredArray = publicData?.filter(item => 
        item.show.id == search.get("id"));
    const showArray = filteredArray?.[0]?.show


    return (
        <div className="font-poppins pt-6 text-gray-700 w-[min(1200px,95%)] mx-auto">

  
          {/* Image  */}
          <div className="grid gap-5 lg:grid-cols-2">
              <img
                src={showArray?.image?.medium}
                alt={showArray?.name}
                className="h-full w-full object-cover object-center"
              />

          {/* details */}
          <div className='flex flex-col justify-between'>
          <div >
            <div >
              <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">{showArray?.name}</h1>
              <p><span className='font-semibold'>premiered:</span> {showArray?.premiered}</p>
              <p><span className='font-semibold'>Runtime:</span> {showArray?.runtime}</p>
            </div>

  
              {/* Description and details */}
            <div >

                <div className="space-y-6 pt-5">
                  <p className="text-base ">{showArray?.summary}</p>
                </div>
             
                <div className="mt-5">
                <p className=" font-semibold ">Genres</p>
                <div className=" flex gap-1">
                    {showArray?.genres?.map((genre, index) => (
                        <React.Fragment key={index}>
                        <p className="text-sm text-gray-600">{genre}</p>
                        </React.Fragment>
                    ))}
                </div>
              </div>
  
              <div className="mt-5">
                <p className=" font-semibold ">Language</p>
                  <p className="text-sm text-gray-600">{showArray?.language}</p>
              </div>

              <div className='mt-5' >
                <p><span className='font-semibold mt-1'>Days:</span> {showArray?.schedule?.days}</p>
                <p><span className='font-semibold mt-1'>Timing:</span> {showArray?.schedule?.time}</p>
                <p><span className='font-semibold mt-1'>Status:</span> {showArray?.status}</p>
             </div>

            </div>
          </div>

            {/* Reviews */}
            <div >
              <p className="text-3xl tracking-tight ">$ 120</p>
                
                <div className="mt-6 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          4 > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{showArray?.id} out of 5 stars</p>
                  <a className="ml-3 text-sm font-medium text-pink hover:text-darkPink">
                    {showArray?.id} reviews
                  </a>
                </div>
            

                <Link
                  to={`/book-show?id=${showArray?.id}`}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-lightGreen px-8 py-3 text-base font-medium text-white hover:bg-darkGreen focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Book show
                </Link>

            </div>
          </div>

          </div>
  



      </div>
    );
}

export default ShowDesc;


