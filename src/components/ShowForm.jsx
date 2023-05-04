/* eslint-disable react/prop-types */

const ShowForm = ({showArray, setFormData, makePayment}) => {

    return (
        <div className="flex flex-col-reverse md:flex-row gap-5 font-poppins justify-evenly items-center py-12 px-5">
        <section className='bg-white'>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <div className="mb-12">
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800'>
              Wanna Book the Show
            </h2>
            <p className='mb-8  lg:mb-16 font-light text-center text-gray-500 sm:text-lg '>
             read all the details given below and click the pay button to book show
            </p>
            </div>
            <form  className='space-y-8'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Show name
                </label>
                <input
                
                  defaultValue={showArray?.name}
                  id="name"
                  type="text"
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                />
              </div>
              <div>
                <label
                  htmlFor='num'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your Contact No.
                </label>
                <input
                   id="num"
                  type="tel"
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                  placeholder='**********'
                  required
                  onChange={e=> setFormData(prev => {return {...prev, number: e.target.value}})}
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Schedule
                </label>
                <input
                  id="schedule"
                  type='date'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm '
                  placeholder='select the date of the show'
                  required
                  onChange={e=> setFormData(prev => {return {...prev, schedule: e.target.value}})}

                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='card'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                 Your card Number
                </label>
                <input
                   id="card"
                   type="password"
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 '
                  placeholder='your card number'
                  required

                ></input>
              </div>
              <button
                onClick={makePayment}
                className='py-3 px-5 text-sm font-medium text-center bg-lightGreen hover:bg-darkGreen text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 '
              >
               Make Payment
              </button>
            </form>
          </div>
        </section>

      </div>
    );
}

export default ShowForm;
