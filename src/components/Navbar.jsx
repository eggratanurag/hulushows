
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BasicRoutes from "../routes/BasicRoutes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

//   const Navigate = useNavigate()

  return (
    <Disclosure as='nav' className='bg-white shadow-sm w-full'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className=' flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                <div className='flex flex-shrink-0 items-center '>
                  <img
                    className='block h-8 w-auto md:hidden'
                    src="https://img.icons8.com/clouds/100/null/hulu.png"
                    alt='Your Company'
                  />
                  <img
                    className='hidden h-10 w-auto md:block'
                    src="https://img.icons8.com/clouds/100/null/hulu.png"
                    alt='Your Company'
                  />
                </div>
                <div className='hidden md:ml-6 md:block w-full '>
                  <div className='flex space-x-4'>
                    {BasicRoutes().map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? " text-lightGreen"
                            : "text-gray-800 hover:text-darkGreen",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
               
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>

               
                  <div>
                    <button
                   
                     className='flex rounded-full text-md text-white p-2 px-5 bg-lightGreen hover:bg-darkGreen '>
                      <p>Login</p>
                      
                    </button>
                  </div>
                
                    
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden '>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {BasicRoutes().map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
     
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
