import React from 'react'
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
        <img className="HomeImage" src="./banner2.jpg" alt="" />
            <div className="HomeContainer">

                <div className="HomeRow">
                    <Product title='The Lean Startup' price={19.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={5} />

                    <Product title='Atomic Habits' price={21.99} image='https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg' rating={4} />

                    <Product title='The Subtle Art of Not Giving a F*ck' price={18.99} image='https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg' rating={4} />
                </div>
                <div className="HomeRow">

                    <Product title='The Power of Habit' price={14.39} image='https://m.media-amazon.com/images/I/41fQW9Q-L4L.jpg' rating={3} />

                    <Product title='48 Hour Start-Up' price={19.99} image='https://m.media-amazon.com/images/I/51Ic4036aNL.jpg' rating={5} />

                    <Product  title='Rich Dad Poor Dad' price={25.99} image='https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg' rating={4} />                
                </div>
            </div>
        </div>
    )
}

export default Home
