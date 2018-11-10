import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Head from 'next/head';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import React, { Component } from 'react';
import axios from 'axios';

class Index extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            guests: '',
            attending: true,
            message: ''
        }
    }

    componentDidMount()
    {
        new LazyLoad({
            elements_selector: ".lazy"
        });        
    }

    _onSubmitRsvp(e) {
        console.log('this._onSubmitRsvp');
        alert('TODO.');
        e.preventDefault();

        // let api_url = 'http://laura-api.test';
        // axios({
        //     method: 'post',
        //     url: `${api_url}/rsvp`,
        //     data: {
        //         name: 'Mark',
        //         email: 'email',
        //         guests: '2',
        //         attending: true,
        //         message: 'the message'                
        //     }
        // }).then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error);
        // });

        // axios.post(`${api_url}/rsvp`, {
        //     name: 'Mark',
        //     email: 'email',
        //     guests: '2',
        //     attending: true,
        //     message: 'the message'
        // }).then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.warn(error);
        // })

    }

    render()
    {
        return (
            <Layout>
                <Head>
                    <title>Laura &amp; Joseph Wedding</title>
                </Head>
            
                <Hero />

                {/* <Nav /> */}

                <div style={{ margin: 50 }}></div>

                <div className="flex items-center justify-center w-5/6 mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="w-full md:w-1/2 flex-1 mr-4 mt-8 md:mt-0">
                            <img data-src="/static/images/we-are-counting-down.jpg" alt="" className="lazy" />
                        </div>
                        <div className="w-full md:w-1/2 flex-1 ml-0 md:ml-4">
                            <div>
                                <Heading alignCenter>
                                    We are<br />
                                    counting down
                                </Heading>
                                <p className="text-xl md:text-2xl leading-normal text-center mt-8">
                                    "We can’t wait to share our special day with you!<br />Love is patient,
                                    love is kind. It does not envy, it does not boast, it is not proud. It does
                                    not dishonors others, it is not self-seeking, it is not easily angered, it
                                    keeps no records of wrongs."
                                </p>
                            </div>                        
                        </div>
                    </div>
                    <span className="absolute hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16" fill="#fff" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                    </span>
                </div>

                <div style={{ marginTop: 100, marginBottom: 50 }}>
                    <Heading alignCenter>
                        The Amore's Story
                    </Heading>
                </div>

                <div className="flex flex-col md:flex-row w-5/6 mx-auto">
                    <div className="mr-0 md:mr-2 flex flex-1 flex-col w-full md:w-1/2">
                        <p className="text-xl md:text-2xl leading-normal mb-4">
                            Where to we begin… Joseph live in Italy and Laura works in UAE. They were introduced by Laura’s brother in law thru online. They started chatting
                            eventually became friends and then they decided to meet in the Philippines last Dec 2018 and that’s the beginning of their love story…..
                        </p>
                        <p className="text-xl md:text-2xl leading-normal mb-4">
                            Long distance relationships are hard, but they’re also incredible! If you can love, trust, respect and support each other from a distance then you’ll be
                            unstoppable once you’re physically together.
                        </p>
                        <p className="text-xl md:text-2xl leading-normal">
                            It’s truly amazing how God orchestrated their relationship, it was incredibly unexpected but God makes it perfect. Indeed, God has made everything
                            perfect in its time.
                        </p>
                    </div>
                    <div className="ml-0 md:ml-2 flex flex-1 flex-col w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="venue_slider">
                            <div><img src="/static/images/story1.jpg" alt="" className="w-full h-full" /></div>
                            <div><img src="/static/images/story2.jpg" alt="" className="w-full h-full" /></div>
                        </div> 
                    </div>
                </div>
                <div style={{ marginTop: 100, marginBottom: 50 }}>
                    <Heading alignCenter>
                        When &amp; Where
                    </Heading>
                </div>

                <div className="flex flex-col md:flex-row w-5/6 mx-auto">
                    <div className="mr-0 md:mr-2 flex flex-1 flex-col w-full md:w-1/2">
                        <div className="bg-grey-lighter h-auto md:h-64 mb-4 p-6 flex flex-col justify-center">
                            <p className="text-grey-darker uppercase tracking-wide mb-3">Wedding Ceremony</p>
                            <h3 className="text-2xl mb-4">Lakeshore, Mexico Pampanga</h3>
                            <p className="text-base leading-normal text-grey-darkest">
                            The Lakeshore is the first master-planned community in the country to offer residents a world of secluded lakeside luxury, 250 hectares of prime land crowned with a magnificent 12 hectare man-made lake. Residents need not go far to enjoy adventure-filled activities like fishing, sailing and kayaking.
                            </p>

                            <ul className="list-reset mt-4">
                                <li className="flex items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="mr-0 md:mr-2">
                                        <g className="nc-icon-wrapper" fill="#22292f">
                                            <path d="M36 16c0-6.63-5.37-12-12-12S12 9.37 12 16c0 9 12 22 12 22s12-13 12-22zm-16 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM10"/>
                                        </g>
                                    </svg>                                        
                                    <a href="https://goo.gl/maps/mJ4diudYhvp" target="_blank" className="text-black no-underline text-lg hover:underline">View Location Map</a>
                                </li>
                                <li className="flex items-center">
                                    <svg version="1.1" viewBox="0 0 48 48" width="15" height="15" className="ml-0 md:ml-1 mr-0 md:mr-3"><g fill="#22292f"><path data-color="color-2" d="M41.047,25.049c-0.574-1.363-3.173-2.495-4.453-2.98l-1.294-1.182 c-0.062-0.057-0.132-0.106-0.207-0.146c-1.052-0.557-3.207-0.82-4.02-0.902c-0.474-0.282-1.528-0.879-2.247-1.059 c-0.897-0.226-2.744,0.309-3.765,0.646c-0.178,0.059-0.336,0.167-0.457,0.312c-0.971,1.173-3.229,4.072-3.229,5.638 c0,0.877,0.774,1.605,1.67,2.448c0.338,0.319,0.895,0.842,1.027,1.079c0.028,0.276,0.096,0.604,0.18,1.009 c0.159,0.761,0.489,2.346,0.158,2.859c-1.059,1.64-1.356,4.589-0.651,6.438c0.467,1.223,1.23,1.664,1.788,1.817 c0.219,0.061,0.444,0.088,0.675,0.088c1.525,0,3.29-1.214,4.872-2.302c0.675-0.464,1.373-0.945,1.741-1.089 c1.455-0.569,2.123-2.375,2.611-3.692c0.107-0.289,0.253-0.684,0.319-0.789c0.352-0.554,1.318-1.417,2.683-2.098 C40.069,30.334,41.783,26.799,41.047,25.049z"></path> <path fill="#111111" d="M24,1C11.318,1,1,11.318,1,24s10.318,23,23,23s23-10.318,23-23S36.682,1,24,1z M24,45 c-5.015,0-9.622-1.772-13.237-4.717l1.25-1.874c0.622-0.216,1.556-0.635,1.924-1.298c1.048-1.887-0.195-4.583-0.618-5.396 c-0.038-0.497-0.145-1.556-0.39-2.168c-0.306-0.763-1.425-1.458-2.219-1.871c-0.592-1.021-1.397-2.73-1.397-3.676 c0-1.331,1.035-1.583,1.545-1.64c1.681-0.29,2.713-1.451,3.152-2.065c0.814-0.253,2.307-0.833,2.858-1.799 c0.59-1.033,0.045-3.193-0.397-4.551c0.102-0.558,0.249-1.756-0.112-2.778c-0.367-1.039-1.259-1.848-1.702-2.2 c-0.244-0.552-0.845-1.795-1.673-2.812c2.283-1.414,4.849-2.399,7.6-2.852c-0.265,0.656-0.427,1.322-0.212,1.914 c0.266,0.731,1.176,1.27,2.103,1.643c-0.094,0.912-0.035,2.235,0.9,2.983c0.991,0.792,2.225,0.453,2.962,0.25 c0.007-0.001,0.014-0.003,0.021-0.005c0.078,0.633,0.115,1.726,0.08,2.753c-0.009,0.26,0.084,0.513,0.258,0.705 c0.21,0.232,2.116,2.277,4.196,2.569c0.113,0.016,0.227,0.023,0.342,0.023c1.899,0,4.04-2.059,4.819-2.881 c0.826-0.2,3.142-0.789,4.956-1.525C43.509,15.188,45,19.419,45,24C45,35.58,35.58,45,24,45z"></path></g></svg>                                    
                                    <a href="http://lakeshore.com.ph/" target="_blank" className="text-black no-underline text-lg hover:underline">Visit Lakeshore Website</a>
                                </li>                                
                            </ul>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className="bg-grey flex-1 mb-4">
                                <div className="venue_slider">
                                    <div><img src="/static/images/venue2--slide1.jpg" alt="" className="w-full h-full" /></div>
                                    <div><img src="/static/images/venue2--slide2.jpg" alt="" className="w-full h-full" /></div>
                                </div>                                
                            </div>
                            <div className="bg-grey flex-1">
                                <div className="venue_slider">
                                    <div><img src="/static/images/venue3--slide1.jpg" alt="" className="w-full" /></div>
                                    <div><img src="/static/images/venue3--slide2.jpg" alt="" className="w-full" /></div>
                                    <div><img src="/static/images/venue3--slide3.jpg" alt="" className="w-full" /></div>
                                </div>                                 
                            </div>
                        </div>
                    </div>


                    <div className="ml-0 md:ml-2 flex flex-1 flex-col-reverse md:flex-col w-full md:w-1/2">
                        <div className="bg-grey mb-4">
                            <div className="venue_slider">
                                <div><img src="/static/images/venue1--slide1.jpg" alt="" className="w-full" /></div>
                                <div><img src="/static/images/venue1--slide2.jpg" alt="" className="w-full" /></div>
                                <div><img src="/static/images/venue1--slide3.jpg" alt="" className="w-full" /></div>
                            </div>
                        </div>
                        <div className="bg-grey-lighter p-6 flex flex-col justify-center h-full my-4 md:my-0">
                            <h3 className="text-2xl mb-4">Colosians 3:14</h3>
                            <p className="text-lg leading-normal text-grey-darkest">
                                And over all these virtues put on love, which binds them all together in perfect unity.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 100, marginBottom: 50 }}></div>

                <div className="rsvp h-auto md:h-64 bg-grey flex items-center justify-center">
                    <div className="w-5/6 md:w-2/3 mx-auto bg-white p-8 md:p-8" style={{ opacity: .9 }}>
                        <Heading alignCenter>
                            Be our guest
                        </Heading>
                        <p className="text-center text-lg mt-6">Guest are limited to those that are named on your invitation. Please do not swap or add additional guest.</p>
                        <p className="text-center text-lg mt-2">Kindly reply by <strong>November 15th 2018</strong>.</p>

                        <form onSubmit={e => this._onSubmitRsvp(e)}>
                            <div className="flex flex-col md:flex-row my-12">
                                <div className="flex-1 mr-0 md:mr-2">
                                    <div className="form-group mb-6">
                                        <input type="text" className="text-lg w-full border-b px-2 py-2 outline-none" placeholder="Full Name" />
                                    </div> 
                                    <div className="form-group mb-6">
                                        <input type="email" className="text-lg w-full border-b px-2 py-2 outline-none" placeholder="Email" />
                                    </div>   
                                    <div className="form-group mb-8">
                                        <input type="text" className="text-lg w-full border-b px-2 py-2 outline-none" placeholder="Number of guests" />
                                    </div> 
                                    <div className="form-group">
                                        <label className="text-lg text-grey-darkest">You are attending?</label>
                                        <div className="mt-4 flex md:block flex-col md:flex-row">
                                            <label className="mr-0 md:mr-4 mb-4"><input type="radio" name="attending" className="mr-0 md:mr-2 text-lg" /> Accept with pleasure</label>
                                            <label className="mr-0 md:mr-4"><input type="radio" name="attending" className="mr-0 md:mr-2 text-lg" /> Decline with regret</label>
                                        </div>
                                    </div>                                                                                   
                                </div>
                                <div className="flex-1 ml-0 md:ml-2 mt-4 md:mt-0">
                                    <textarea className="text-lg w-full h-full border px-2 py-2 outline-none" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button 
                                    className="text-lg uppercase tracking-wide bg-black hover:bg-grey-darkest px-2 py-4 text-white w-64"
                                    onClick={e => this._onSubmitRsvp(e)}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <style jsx>{`
                    .rsvp {
                        height: 700px;
                        background: url('/static/images/rsvp-bg.jpg');
                        background-size: cover;
                    }
                `}</style>

                {/* <div style={{ marginTop: 100, marginBottom: 50 }}>
                    <Heading alignCenter>
                        Our Memories
                    </Heading>
                </div> */}

                {/* <div className="memories w-5/6 mx-auto">
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                    <div><img data-src="/static/images/memories-1.jpg" alt="" className="w-full h-full lazy" /></div>
                </div> */}
                    
                <style jsx>{`
                    .memories {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    .memories img {
                        object-fit: cover;
                        height: 300px;
                    }
                `}</style>

                <div style={{ margin: 50 }}>            
                    <Heading alignCenter>
                        thank you
                    </Heading>
                </div>
                    
            </Layout>           
        )
    }
}

export default Index;