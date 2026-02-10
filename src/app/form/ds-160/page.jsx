import React from 'react'
import FormDs160 from './FormDs160'
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
const page = () => {
  return (
    <main className='w-full max-w-8xl mt-25'>
        <FormDs160/>
    </main>

  )
}

export default page
