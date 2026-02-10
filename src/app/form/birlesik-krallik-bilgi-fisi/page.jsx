import React from 'react'
import FormUK from './FormUK'
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const page = () => {
  return (
      <main className='w-full max-w-8xl mt-25'>
           <FormUK/>
       </main>
  )
}

export default page
