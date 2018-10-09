import Heading from './Heading';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <img src="/static/images/wreath-white.svg" className="hero__wreath hero__wreath--up" alt="" />
                <h1 className="hero__title">Laura &amp; Joseph</h1>
                <p className="hero__date">January 1, 2019</p>
                <img src="/static/images/wreath-white.svg" className="hero__wreath hero__wreath--down" alt="" />
            </div>

            <style jsx>{`
                .hero {
                    height: 90vh;
                    background-image: url('/static/images/laura.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                } 

                .hero__title {
                    margin: 0;
                    color: #fff;
                    font-size: 54px;
                    word-spacing: 8px;
                    font-weight: normal;
                    margin-bottom: .5rem;
                    font-family: 'noelan script', serif;
                }
                .hero__date {
                    margin: 0;
                    color: #fff;
                    font-size: 24px;
                    word-spacing: 8px;
                }     
                
                .hero__wreath {
                    width: 300px;
                }    
                
                .hero__wreath--up {
                    transform: rotate(178deg);
                }      
                
                .hero__wreath--down {
                    
                }

            `}</style>
        </div>
    )
}

export default Hero;