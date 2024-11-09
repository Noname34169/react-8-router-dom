import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <img src="https://avatars.mds.yandex.net/i?id=1cf04a6f38f0be15415a0c35010d27a3eb59c5c5-7942200-images-thumbs&n=13" alt="" />

                <div className="hero__box">
                    <h1>Lorem</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus inventore iure, sapiente ut maiores at reprehenderit voluptatum ipsa beatae vel!</p>
                    <button>Lorem, ipsum.</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero