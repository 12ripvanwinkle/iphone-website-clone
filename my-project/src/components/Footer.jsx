import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5' style={{padding: '40px'}}>
        <div className='screen-max-width' style={{padding: '20px'}}>
            <div >
                <p className='font-semibold text-gray-500 text-xs'>
                    More ways to shop: {' '}
                    <span className='underline text-blue-400'>
                    Find an Apple Store{' '}
                    </span>
                    or{' '}
                    <span className='underline text-blue-400'>
                    other retailer
                    </span>{' '}
                    near you
                </p>
                <p className='font-semibold text-gray-500 text-xs'>
                    Or call 123-456-7890
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full'>

                <div className='flex md:flex-row flex-col md:items-center justify-between' style={{marginTop: '20px'}}>
                    <p className='font-semibold text-gray-500 text-xs'>
                        Copyright © 2025 Apple Inc. All rights reserved.
                    </p>
                    <div className='flex' style={{marginTop: '40px'}}>
                        {footerLinks.map((link, i) => (
                            <p key={link} className='font-semibold text-gray-500 text-xs'>
                                {link} {' '}
                                {i !== footerLinks.length - 1 && <span className='mx-2'>|</span>}
                            </p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer