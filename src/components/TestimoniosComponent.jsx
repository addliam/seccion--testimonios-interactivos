import React, {useState, useEffect} from 'react'
import Avatar1 from '../assets/images/avatar1.png'
import TestimonialsJSON from '../static/testimonials.json'

const Testimonio = ({data: {autor, cargo, avatar, contenido}}) => {
  return (
    <figure className='bg-greyDark w-[420px] h-[300px] py-[20px] px-[22px] rounded-[8px] relative shrink-0'>
      <div className='overflow-hidden'>
        <img className='rounded-[50%]' src={`/src/assets/images/${avatar}.png`} width="48px" height="48px" alt="avatar testimonio" />
      </div>
      <figcaption className='text-[#FFFFFE] flex flex-col font-semibold mt-3'>
        {autor}  
        <cite className='text-[#8EF3FF] font-normal mt-[2px]'>
          {cargo}
        </cite>
      </figcaption>      
      <blockquote className='mt-4'>
        <p className='text-greyLigth'>
          {contenido}
        </p>
      </blockquote>
    </figure>
  )
}

const SeparatorComponent = () => (
<div className='self-center w-[3px] h-[290px] bg-greyDark' />
)

const TestimonioVista = ({style, data}) => {
  return (
    <div className={`shrink-0 flex flex-row justify-between w-[1088px] ${style}`}>
      <Testimonio data={data[0]} />
      <SeparatorComponent />
      <Testimonio data={data[1]} />
    </div>
  )
}

const TestimoniosComponent = () => {
  const [indexPage, setIndexPage] = useState(0)
  const halfLenData = TestimonialsJSON.length / 2

  const previousHandler = () => {
    setIndexPage((prev)=>{
      if (prev === 0){
        return prev
      }else{
        return (prev-1)
      }
    })    
  }
  const nextHandler = () => {
    setIndexPage((prev)=>{
      if (prev === halfLenData){
        return prev
      }else{
        return (prev+1)
      }      
    })
  }  
  return (
    <div className='relative'>
      <div className='ml-[150px] mt-4 w-[68rem] '>
        <div className='flex overflow-x-hidden scroll-smooth '>
          {
            Array(halfLenData).fill('_').map((t, indx)=>{
              // agrupar de 2 en 2: 0,2 - 2,4 - 4,6
              let start = indx*2
              let end = indx*2+2
              let styleName = `translate-x-[-${indexPage*1088}px]`
              return (
              <TestimonioVista key={indx} data={TestimonialsJSON.slice(start, end)} style={styleName} />
              )
            })
          }
        </div>
      </div>
      <div className='button-wrapper'>
          <button onClick={()=>previousHandler()} className='bg-blue text-bg font-medium px-6 py-2'>Previous</button>
          <br />
          <button onClick={()=>nextHandler()} className='bg-blue mt-4 text-bg font-medium px-6 py-2'>Next</button>
      </div>
    </div>
  )
}

export default TestimoniosComponent