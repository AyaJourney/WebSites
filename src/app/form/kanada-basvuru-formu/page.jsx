import React from 'react'
import FormKanada from './FormKanada'
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
const page = () => {
  return (
    <main className='w-full max-w-8xl mt-25'>
        <FormKanada/>
    </main>

  )
}

export default page