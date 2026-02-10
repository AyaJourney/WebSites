import React from 'react'
import FormSchengen from './FormSchengen'
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
const page = () => {
  return (
      <main className='w-full max-w-8xl mt-25'>
           <FormSchengen/>
       </main>
  )
}

export default page
