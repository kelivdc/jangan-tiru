import { ClockIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import React from 'react'
import Frontend from "../components/Frontend";
import Menarik from '../components/Menarik';
import Image
 from 'next/image';
function Slug() {
  return (
    <Frontend>
        <Head>
            <title>Read - Testing</title>
            <meta name="title" content="Meteor Hantam Teleskop Luar Angkasa James Webb NASA, Bagaimana Nasibnya? : Okezone techno" />
            <meta name="description" content="Teleskop Luar Angkasa James Webb JWST milik NASA dilaporkan telah dihantam oleh meteor belum lama ini lalu bagaimana nasibnya - Science - okezone techno" />
        </Head>
        <div className='bg-white md:rounded md:flex'>
            <div className="md:w-[70%] text-gray-900 p-4">
                <h1 className='font-bold text-2xl md:text-4xl'>Meteor Hantam Teleskop Luar Angkasa James Webb NASA, Bagaimana Nasibnya?</h1>
                <div className='flex space-x-10 py-4 text-gray-700 text-sm'>
                    <div>Admin</div>
                    <div className='flex space-x-2'><ClockIcon className='w-5 h-5' /><div>Jum'at 10 Juni 2022 15:39 WIB</div></div>
                </div>
                <Image src="https://img.okezone.com/content/2022/06/10/56/2609256/meteor-hantam-teleskop-luar-angkasa-james-webb-nasa-bagaimana-nasibnya-1YBLnDOV3h.jpg" 
                    layout="responsive"
                    width={450}
                    height={300}
                />
            </div>
            <div className="md:w-[30%] bg-gray-200 mt-2 md:mt-0">
                <Menarik />
            </div>  
        </div>
    </Frontend>
  )
}

export default Slug