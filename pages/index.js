import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>Laura &amp; Joseph</title>
            </Head>
           
            <Hero />

            <Nav />

            <div style={{ margin: 50 }}>
                <Heading alignCenter>
                    we are<br />
                    counting down
                </Heading>
            </div>

            <div className="flex items-center justify-center w-5/6 mx-auto">
                <div class="flex">
                    <div className="flex-1 mr-1">
                        <img src="/static/images/bride.jpg" alt="" />
                    </div>
                    <div className="flex-1 ml-1">
                        <img src="/static/images/groom.jpg" alt="" />
                    </div>
                </div>
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16" fill="#fff" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                </span>
            </div>

            <div className="my-8 bg-grey-lightest py-20 px-8">
                <div class="w-5/6 mx-auto">
                    <p className="text-3xl leading-normal italic text-center">
                        "We can’t wait to share our special day with you! Love is patient,
                        love is kind. It does not envy, it does not boast, it is not proud. It does
                        not dishonors others, it is not self-seeking, it is not easily angered, it
                        keeps no records of wrongs."
                    </p>
                </div>
            </div>

            <div style={{ margin: 50 }}>
                <Heading alignCenter>
                    when &amp; where
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
                    <div class="flex flex-1 flex-col">
                        <div className="bg-grey flex-1 mb-4">
                            <img src="/static/images/venue-photo-1.jpg" alt="" className="w-full h-full" />
                        </div>
                        <div className="bg-grey flex-1">
                            <img src="/static/images/venue-photo-2.jpg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="ml-2 flex flex-1 flex-col">
                    <div className="bg-grey mb-4">
                        <img src="/static/images/venue-photo-3.jpg" alt="" className="w-full h-full" />
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


            <Link href="/rsvp">
                <a>RSVP</a>
            </Link>
        </Layout>
    )
}

export default Index;