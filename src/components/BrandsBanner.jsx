import React from 'react'
import Facebook from '../assets/icons/Facebook.png'
import Atlassian from '../assets/icons/atlassian.png'
import Gmail from '../assets/icons/gmail.png'
import GoogleDrive from '../assets/icons/google_drive.png'
import Instagram from '../assets/icons/instagram.png'
import Linkedin from '../assets/icons/linkedin.png'
import Mastercard from '../assets/icons/mastercard.png'
import Microsoft from '../assets/icons/microsoft.png'
import Netflix from '../assets/icons/netflix.png'
import PayPal from '../assets/icons/paypal.png'
import YouTube from '../assets/icons/youtube.png'

const BrandsBanner = () => {
  return (
    <footer className='mx-[150px]'>
        <p className='text-[#cbcbcb] text-base font-medium mt-2'>Ellos confian en nosotros:</p>
        <div className='mt-3 flex flex-row gap-[5rem] w-[1080px] overflow-x-hidden px-4'>
        <img className='marqueer' src={Facebook} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Atlassian} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Gmail} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={GoogleDrive} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Instagram} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Linkedin} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Mastercard} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Microsoft} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={Netflix} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={PayPal} width="32px" height="32px" alt="social media icon" />
        <img className='marqueer' src={YouTube} width="32px" height="32px" alt="social media icon" />
        </div>
    </footer>
  )
}

export default BrandsBanner