import React from 'react'
import "./intro.css"
import Me from "../../img/meL.png"

const intro = () => {
  return (
    <div id='intro' className='i'>
        <div className="i-left">
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is </h2>
                <h1 className='i-name'>Lakshmi Pranatharthy Haran</h1>
                <div className='i-head'>
                    <div className='i-head-wrapper'>
                        <div className='i-head-item'>Data Analyst</div>
                        <div className='i-head-item'>Data Scientist</div>
                        <div className='i-head-item'>ML Engineer</div>
                        <div className='i-head-item'>AI Enthusiast</div>
                        <div className='i-head-item'>Web Developer</div>
                    </div>
                </div>
                <p className='i-desc'>
                An entry-level Data Scientist with the ability to deliver business insights via data
analytics, advanced data modelling and projections.
                </p>
                <p className='i-desc'>
                I'm an analytically minded self-starter prepared to enter into the world of
 Data Science with experience in various personal projects with integral attributes like predictive modelling, deep learning and insights reporting.
                </p>
            </div>
        </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default intro
