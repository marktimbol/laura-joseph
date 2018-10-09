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
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500,700" rel="stylesheet" />
            </Head>
            
            <div className="content">
                {children}
            </div>
            
            <style jsx global>{`
                html, body, div, span, applet, object, iframe,
                h1, h2, h3, h4, h5, h6, p, blockquote, pre,
                a, abbr, acronym, address, big, cite, code,
                del, dfn, em, img, ins, kbd, q, s, samp,
                small, strike, strong, sub, sup, tt, var,
                b, u, i, center,
                dl, dt, dd, ol, ul, li,
                fieldset, form, label, legend,
                table, caption, tbody, tfoot, thead, tr, th, td,
                article, aside, canvas, details, embed, 
                figure, figcaption, footer, header, hgroup, 
                menu, nav, output, ruby, section, summary,
                time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
                }
                /* HTML5 display-role reset for older browsers */
                article, aside, details, figcaption, figure, 
                footer, header, hgroup, menu, nav, section {
                display: block;
                }
                body {
                line-height: 1;
                }
                ol, ul {
                list-style: none;
                }
                blockquote, q {
                quotes: none;
                }
                blockquote:before, blockquote:after,
                q:before, q:after {
                content: '';
                content: none;
                }
                table {
                border-collapse: collapse;
                border-spacing: 0;
                }            
            `}</style>
            
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