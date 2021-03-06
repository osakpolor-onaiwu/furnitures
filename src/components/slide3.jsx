import React from 'react'
import Navbar from './navbar'
import arrow from '../images/icon-arrow.svg'
import rightarrow from '../images/icon-angle-right.svg'
import leftarrow from '../images/icon-angle-left.svg'

export default function Slide3({moveleft,moveright}) {
     // moveleft and moveright fuctions are recevied as props from the main component
    //slide1 and slide2 are sent as argument to the moveright and moveleft functions
    return (
            <section id='section1'>
                    <div id='diva' className='A3'>
                        <Navbar/>
                        <div className='ai1'>
                            <img  src={leftarrow} onClick={()=>moveleft('slide2')} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide1')} alt='right'/>
                        </div>
                    </div>
                    <div className='B'>
                        <div id='divb1' className='b1'>
                        <h1>  Manufactured with the best materials</h1>
                        <p>
                        Our modern furniture store provide a high level of quality. 
                        Our company has invested in advanced technology 
                        to ensure that every product is made as perfect 
                        and as consistent as possible. With three decades of 
                        experience in this industry, we understand what 
                        customers want for their home and office.

                        </p>
                        <h5>SHOP NOW <img src={arrow}/></h5>
                        </div>
                        <div className='b2'>
                            <img  src={leftarrow} onClick={()=>moveleft("slide2")} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright("slide1")} alt='right'/>
                        </div>
                    </div>
                </section>
    )
}
