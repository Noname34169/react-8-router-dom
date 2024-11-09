import React from 'react'
import './Wrap.scss'

const Wrap = () => {
  return (
    <>
    <section className="wrap">
        <div className="container">
            <div className="wrap__wrapper">
                <h2>Lorem, ipsum.</h2>
                <div className="wrap__box">
                    <h3 className="link">Lorem ipsum dolor</h3>
                    <h3 className="link active">Lorem ipsum dolor</h3>
                    <h3 className="link">Lorem ipsum dolor</h3>
                    <h3 className="link active">Lorem ipsum dolor</h3>
                    <h3 className="link">Lorem ipsum dolor</h3>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Wrap