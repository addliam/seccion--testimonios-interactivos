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

const TestimonioVista = ({data, offset}) => {
  return (
    <div className={`transition_smooth shrink-0 flex flex-row justify-between w-[1088px] cc`} style={{transform: `translate(-${offset}px,0px)`}}>
      <Testimonio data={data[0]} />
      <SeparatorComponent />
      <Testimonio data={data[1]} />
    </div>
  )
}

const IndexSelectorComponent = ({len, indexActive, pageIndexHandler}) => {
  const percentWidth = 100/len
  return (
    <div className='flex flex-row gap-2 mx-[150px] items-center'>
      {
        Array(len).fill(0).map((n, indx) => {
          if (indx === indexActive){
            return (
                <div key={indx} style={{width: `${percentWidth}%`}} className={`h-[12px] bg-blue`} />
            )
          }else{
            return (
              <div  key={indx} style={{width: `${percentWidth}%`}} className='h-[20px] flex items-center cursor-pointer' onClick={()=>pageIndexHandler(indx)}>
                <div className={`w-full h-[4px] bg-greyDark`} />
              </div>
            )
          }
        })
      }
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
      console.log({halfLenData});
      console.log({prev});
      if (prev === halfLenData-1){
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
              // let styleName = `translate-x-[-${indexPage*1088}px]`
              let offset = indexPage*1088
              return (
              <TestimonioVista key={indx} data={TestimonialsJSON.slice(start, end)} offset={offset} />
              )
            })
          }
        </div>
      </div>
      <div className='mt-12'>
        <IndexSelectorComponent len={halfLenData} indexActive={indexPage} pageIndexHandler={setIndexPage} />
      </div>
    </div>
  )
}

export default TestimoniosComponent