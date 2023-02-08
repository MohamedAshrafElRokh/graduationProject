import React from 'react'
import "./Home.css"
import { ReactComponent as Logo } from '../pics/vector.svg'
const Home = () => {
  return (
    <div className='container'>
        <Logo className = "Logo"/>
        <div className='content'>
            <p className='title'>مرحبا بك فى تطبيق اشفينى</p>
            <div className='home-buttons'>
              <button className='buttons'>تسجيل الدخول</button>
              <button className='buttons'>إنشاء حساب</button>
              <a href=''>تصفح كضيف</a>
             </div>
        </div>
    </div>
  )
}

export default Home