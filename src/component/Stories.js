import React from 'react'

import BeautyOfWorld from './BeautyOfWorld/BeautyOfWorld'
import Galleries from './Stories/Galleries'
import LosVegas from './LosVegas/LosVegas'
import SanFrancisco from './SanFrancisco/SanFrancisco'
import Strange from './Strange/Strange'
import Autumn from './Stories/Autumn'
import RedDress from './Stories/RedDress'
import OutSideBox from './Stories/OutSideBox'
import LearningCulture from './Stories/LearningCulture'
import ThingsHouse from './Stories/ThingsHouse'
import Footer from './Footer/Footer'

const Stories = () => {
    return (
        <div >
            <section className="featured-posts " >
	<div className="section-title">
		<h2><span>Featured</span></h2>
	</div>
	<div className="card-columns listfeaturedtag">
        </div>
        <Strange/>
        <BeautyOfWorld/>
        <LosVegas/>
        <SanFrancisco/>
        </section>
        <section className="recent-posts">
	<div className="section-title "></div>
	<div className="card-columns listrecent ">
     </div>
     <div>
     <Autumn/>
     <Galleries/>
     <RedDress/>
     </div>
    
     <OutSideBox/>
     <ThingsHouse/>
     <LearningCulture/>
    
     </section>
     <Footer/>
        </div>
    )
}

export default Stories
