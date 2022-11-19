import React from 'react'
import TestimoniosComponent from './TestimoniosComponent'
import BrandsBanner from './BrandsBanner'

const SectionTestimonios = () => {
  return (
    <section className='bg-[#25262A] min-h-screen min-w-full pt-8 relative z-0'>
      <h4 className='ml-12 tracking-wider text-blue text-[1em] font-semibold'>TESTIMONIOS</h4>
      <div className='mt-10 ml-[150px]'>
          <h5 className='text-[1.35em] text-[#FFFFFF] max-w-[31.25em] font-medium'>Estos son algunos testimonios de nuestros clientes mas destacados.</h5>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <TestimoniosComponent />
        <BrandsBanner />
      </div>
      <div className='w-[56.25em] h-[56.25em] green__gradient -z-10 absolute -left-[20em] -top-[18em]'/>
    </section>
  )
}

export default SectionTestimonios