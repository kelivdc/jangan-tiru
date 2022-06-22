import { ClockIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import React from 'react'
import Frontend from '/components/Frontend';
import Menarik from '/components/Menarik';
import Image
 from 'next/image';
import Trending from '/components/Trending';

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
                <span className='bg-red-700 text-white p-1 rounded text-xs'>wisata</span>
                <h1 className='font-bold text-2xl md:text-4xl'>Meteor Hantam Teleskop Luar Angkasa James Webb NASA, Bagaimana Nasibnya?</h1>
                <div className='flex space-x-10 py-4 text-gray-700 text-sm'>
                    <div>Admin</div>
                    <div className='flex space-x-2'><ClockIcon className='w-5 h-5' /><div>Jum`at 10 Juni 2022 15:39 WIB</div></div>
                </div>
                <Image src="https://img.okezone.com/content/2022/06/10/56/2609256/meteor-hantam-teleskop-luar-angkasa-james-webb-nasa-bagaimana-nasibnya-1YBLnDOV3h.jpg" 
                    layout="responsive"
                    width={450}
                    height={300}
                    alt="Foto Detail"
                />
                <div className='mt-1 italic text-xs text-gray-500'>Sumber: https://jatengprov.go.id/beritadaerah/denda-dihapus-warga-didorong-segera-bayar-pajak-kendaraan/</div>
                <p className='mt-4 leading-8'>Cupidatat veniam dolore duis minim reprehenderit nulla anim. Non ut quis adipisicing occaecat sint in commodo dolore mollit ex duis labore. Sint laborum et nisi velit ad eu. Id minim Lorem sit commodo veniam veniam minim dolor sit laboris. Reprehenderit magna fugiat ipsum quis anim mollit proident ea ut est fugiat. Commodo voluptate duis culpa aute cillum. Tempor ipsum aute esse dolore voluptate nisi minim.

Do anim fugiat elit incididunt cillum cillum adipisicing cillum voluptate proident cillum et occaecat. Consequat enim cupidatat esse ut duis duis eu occaecat. Mollit nisi nostrud excepteur aute. Eiusmod do aliquip esse esse officia.

Esse occaecat reprehenderit ea incididunt excepteur amet. Voluptate tempor voluptate non non ad voluptate esse ea dolore Lorem ex dolor magna adipisicing. Ea magna ad minim et culpa ad consequat excepteur sint cillum. In nisi cillum occaecat laboris consequat nulla ex occaecat. Adipisicing sint quis irure deserunt exercitation est excepteur incididunt proident non. Ex est cillum velit ea laboris. Commodo minim laboris sit id.

Nisi in qui aliqua aute aute ut mollit anim officia nisi minim. Exercitation ex minim ex cupidatat irure enim. Magna ex ex mollit cupidatat ut excepteur aliquip nisi amet. Sit reprehenderit nulla commodo fugiat est deserunt. Aliquip culpa sit veniam ex esse dolore ut irure exercitation. Consequat et nisi sint dolor culpa aliqua aute nisi fugiat amet do magna in. Sit non quis anim magna eiusmod cupidatat nulla.

Esse quis incididunt aute consectetur. Elit do id ut aliqua. Culpa occaecat nulla consequat proident laborum Lorem veniam qui dolor ex. In consequat ad aliquip veniam sint non. Est duis nostrud non reprehenderit ex.

Consectetur ea commodo esse magna irure irure non. Nisi qui id ea id ullamco exercitation quis tempor ea. Velit magna consequat est consequat ipsum laboris magna minim qui in tempor nisi quis eiusmod.

Qui veniam do veniam veniam. Nulla nisi nulla veniam elit cupidatat veniam ut nisi ea ullamco in ipsum consequat. Veniam non excepteur laboris dolore quis est eu excepteur sint adipisicing est ipsum. Sit do quis do sit quis qui. Adipisicing non cupidatat ullamco laborum excepteur tempor adipisicing veniam est occaecat dolor veniam nulla. Aliquip ex ea id Lorem minim aliqua id eiusmod. Velit ex tempor enim incididunt elit tempor irure ullamco.

Do fugiat voluptate culpa non elit amet esse esse Lorem deserunt. Quis ullamco excepteur ullamco duis amet occaecat nisi velit velit voluptate. Laboris anim pariatur reprehenderit ullamco officia. Incididunt sint deserunt irure duis officia in. Eu cupidatat quis non aliquip veniam mollit quis consectetur proident. Fugiat mollit duis eiusmod ea elit ut ex sunt ut cillum. Ut velit laborum Lorem culpa consectetur nisi.

Mollit est excepteur proident mollit Lorem adipisicing excepteur sunt reprehenderit labore elit consectetur. Magna cillum commodo dolor est ea fugiat ut commodo sit et et fugiat magna consequat. Excepteur aliqua pariatur reprehenderit proident do aute sunt nostrud ullamco Lorem aute.

Eiusmod ea exercitation ullamco id commodo consectetur ex sint incididunt est aliquip sint. Quis velit sunt in amet aliqua proident est duis laborum. Cupidatat do aliqua dolor laboris nisi laborum. Sint mollit anim sunt est esse Lorem velit anim pariatur. Minim sit aliqua velit commodo ea id reprehenderit magna non proident aliquip. Ullamco labore minim consequat veniam irure irure. Consectetur elit cillum officia consectetur adipisicing consectetur Lorem pariatur labore Lorem.</p>
            </div>
            <div className="md:w-[30%] mt-2 md:mt-0 mx-4 md:mx-0">
                <Menarik />
                <Trending />
            </div>  
        </div>
    </Frontend>
  )
}

export default Slug