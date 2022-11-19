import React from 'react'
import TestimoniosComponent from './TestimoniosComponent'
import BrandsBanner from './BrandsBanner'

const SectionTestimonios = () => {
  return (
    <section className='bg-[#25262A] min-h-screen min-w-full pt-8'>
        <h4 className='ml-12 tracking-wider text-blue text-base font-medium'>TESTIMONIOS</h4>
        <div className='mt-10 ml-[150px]'>
            <h5 className='text-[24px] text-[#FFFFFF] max-w-[500px] font-medium'>Estos son algunos testimonios de nuestros clientes mas destacados.</h5>
        </div>
        <TestimoniosComponent />
        <BrandsBanner />
    </section>
  )
}

export default SectionTestimonios