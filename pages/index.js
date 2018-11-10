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
        e.preventDefault();

        let api_url = 'http://laura-api.test';
        axios({
            method: 'post',
            url: `${api_url}/rsvp`,
            data: {
                name: 'Mark',
                email: 'email',
                guests: '2',
                attending: true,
                message: 'the message'                
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

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

                <Nav />

                <div style={{ margin: 50 }}>
                    <Heading alignCenter>
                        We are<br />
                        counting down
                    </Heading>
                </div>

                <div className="flex items-center justify-center w-5/6 mx-auto">
                    <div className="flex">
                        <div className="flex-1 mr-1">
                            <img data-src={`/static/images/bride.jpg`} alt="" className="lazy" />
                        </div>
                        <div className="flex-1 ml-1">
                            <img data-src="/static/images/groom.jpg" alt="" className="lazy" />
                        </div>
                    </div>
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16" fill="#fff" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                    </span>
                </div>

                <div className="my-8 bg-grey-lightest py-20 px-8">
                    <div className="w-5/6 mx-auto">
                        <p className="text-2xl leading-normal italic text-center">
                            "We can’t wait to share our special day with you! Love is patient,
                            love is kind. It does not envy, it does not boast, it is not proud. It does
                            not dishonors others, it is not self-seeking, it is not easily angered, it
                            keeps no records of wrongs."
                        </p>
                    </div>
                </div>

                <div style={{ margin: 50 }}>
                    <Heading alignCenter>
                        When &amp; Where
                    </Heading>
                </div>

                <div className="flex w-5/6 mx-auto">
                    <div className="mr-2 flex flex-1 flex-col">
                        <div className="bg-grey-lighter h-64 mb-4 p-6 flex flex-col justify-center">
                            <p className="text-grey-darker uppercase tracking-wide mb-3">Wedding Ceremony - 17:00</p>
                            <h3 className="text-2xl mb-4">Lakeshore, Mexico Pampanga</h3>
                            <p className="text-base leading-normal text-grey-darkest">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className="bg-grey flex-1 mb-4">
                                <img data-src="/static/images/venue-photo-1.jpg" alt="" className="w-full h-full lazy" />
                            </div>
                            <div className="bg-grey flex-1">
                                <img data-src="/static/images/venue-photo-2.jpg" alt="" className="w-full h-full lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="ml-2 flex flex-1 flex-col">
                        <div className="bg-grey mb-4">
                            <img data-src="/static/images/venue-photo-3.jpg" alt="" className="w-full h-full lazy" />
                        </div>
                        <div className="bg-grey-lighter p-6 flex flex-col justify-center">
                            <p className="text-grey-darker uppercase tracking-wide mb-3">Wedding Party - 17:00</p>
                            <h3 className="text-2xl mb-4">Lakeshore</h3>
                            <p className="text-base leading-normal text-grey-darkest">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ margin: 50 }}></div>

                <div className="rsvp h-64 bg-grey flex items-center justify-center">
                    <div className="w-2/3 mx-auto bg-white p-8">
                        <Heading alignCenter>
                            Be our guest
                        </Heading>
                        <p className="text-center text-lg mt-6">Please confirm your arrival by January 1, 2019</p>

                        <form onSubmit={e => this._onSubmitRsvp(e)}>
                            <div className="flex my-12">
                                <div className="flex-1 mr-2">
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
                                        <div className="mt-4">
                                            <label className="mr-4"><input type="radio" name="attending" className="mr-2 text-lg" /> Yes</label>
                                            <label className="mr-4"><input type="radio" name="attending" className="mr-2 text-lg" /> No</label>
                                        </div>
                                    </div>                                                                                   
                                </div>
                                <div className="flex-1 ml-2">
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

                <div style={{ margin: 50 }}>
                    <Heading alignCenter>
                        Our Memories
                    </Heading>
                </div>

                <div className="memories w-5/6 mx-auto">
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
                </div>
                    
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