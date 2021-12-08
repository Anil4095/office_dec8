import React from 'react'
import Footer from '../component/Footer/Footer'
import Article from './ArticleLeft'
import BestPlace from './BestPlace'
import PostContent from './PostContent'
import RedDressSummer from './RedDressSummer'
import Travelling from './Travelling'


const post = () => {
    return (
        <div>
        
           <Article/>
           <PostContent/>
           <BestPlace/>
           <Travelling/>
           <RedDressSummer/>
           <Footer/>
        </div>
    )
}

export default post
