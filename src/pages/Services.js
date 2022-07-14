import React from 'react'
import PageHeading from '../components/General/PageHeading'
import ServiceLeft from '../components/General/ServiceLeft'
import ServiceRight from '../components/General/ServiceRight'
import drill from '../pages/Image/Drill.jpg'
import press from '../pages/Image/Press.jpg'

function Services() {
    return (
        <div className='mt-5 servicepage-div'>
            <PageHeading PageTitle='Our Services' />
            <ServiceLeft
                ServiceHeading='All type of Patterns'
                ServiceDetails1='We manufactures patterns of all type of materials such as Aluminium, Wooden (small and huge in size) and also Thermocol.'
                ServiceDetails2='We also creates Core box elements like Aluminium & SG Core Box, Hot core & Cold core etc....'
                ServiceImageSrc={press}
            />
            <ServiceRight
                ServiceHeading='Jig Fixture'
                ServiceDetails1='To achieve our clients requirment, We also makes Jigs and Fixtures for CNC, VMC, Drill, Lathe Machine Tools etc...All type of machines tools.'
                ServiceDetails2='As well, these products are well tested prior getting dispatched at the premises of our clients.'
                ServiceImageSrc={drill}
            />
            <ServiceLeft
                ServiceHeading='Art wooden works'
                ServiceDetails1='This is one of the Important service of our company. With the help of great tool we provides best quality wooden work services like...'
                ServiceDetails2='Design and create architect based art wooden work or personal work, Designed wooden door cutting and All type of designed carving works on wood.'
                ServiceImageSrc={drill}
            />
            <ServiceRight
                ServiceHeading='Metal Developing Plant'
                ServiceDetails1='We also provides CI, SG and etc... all type of metal developing plant Consulting Services.'
                ServiceDetails2='We helps our clients to build their business. '
                ServiceImageSrc={press}
            />


        </div>

    )
}

export default Services