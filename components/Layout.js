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
                <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500,700" rel="stylesheet" />
                <script src="/static/js/lazyload.js"></script>
            </Head>
            
            <div className="content">
                {children}
            </div>
            
            <style jsx global>{`
                @font-face {
                    font-family: 'noelan script';
                    src: url('/static/fonts/noelan_script-webfont.woff2') format('woff2'),
                         url('/static/fonts/noelan_script-webfont.woff') format('woff');
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