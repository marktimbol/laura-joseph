import Nav from './Nav';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({children}) => {
    return (
        <div>   
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/static/css/tailwind.css" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="/static/css/slick.css"/>

                {/* <script src="/static/js/lazyload.js" /> */}
                <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" />
                <script type="text/javascript" src="/static/js/slick.min.js" />
                <script type="text/javascript" src="/static/js/slick.js" />

                <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500,700" rel="stylesheet" />
            </Head>
            
            <div className="content">
                {children}
            </div>
            
            <style jsx global>{`
                @font-face {
                    font-family: 'Blingtastic';
                    src: url('/static/fonts/blingtastic_script-webfont.woff2') format('woff2'),
                         url('/static/fonts/blingtastic_script-webfont.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }                
                
                body {
                    font-size: 14px;
                    font-family: 'Cormorant Garamond', serif;
                }             

                #nprogress {
                    pointer-events: none;
                }
                
                #nprogress .bar {
                    background: #22BAD9;
                    position: fixed;
                    z-index: 1031;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                }
                
                #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px #22BAD9, 0 0 5px #22BAD9;
                    opacity: 1.0;
                    transform: rotate(3deg) translate(0px, -4px);
                }

            `}</style>
        </div>
    )
}

export default Layout;