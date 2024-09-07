import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Course'
import Footer from '../component/Footer'
import list  from  '../assets/list.json'

function CoursePage() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '>
    <Course/>
    </div>
    <Footer/>
    
    </>
  )
}

export default CoursePage
