import React from 'react'
import ContactDetailBox from './ContactDetailBox'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetail() {
    return (
        <div className='flex flex-col gap-4'>
            <ContactDetailBox
                title="Hours of Operation"
                icon={faClock}
                details={['Monday - Thursday 9:00 AM to 5:00 PM', 'Friday, Satuday, Sunday Off']}
                color={"teal"}
            />
            <ContactDetailBox
                title="Support"
                icon={faPhoneVolume}
                details={[
                    <><strong className='font-semibold'>Mail</strong> <span>info@cortexaitech.com</span></>,
                    <><strong className='font-semibold'>Mobile</strong> <span>+92 318 6456552</span></>
                ]}
                color={"sky"}
            />
            <ContactDetailBox
                title="Address"
                icon={faLocationDot}
                details={['Sector H-9/2, Islamabad', 'Punjab, Pakistan']}
            />
        </div>
    )
}
