import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="h-12 bg-white border-b border-solid border-grey-light flex items-center justify-center">
            <ul className="list-reset flex items-center justify-center mx-auto w-5/6">
                <li className="text-center mx-8">
                    <Link href="/our-story">
                        <a className="no-underline text-lg text-black">Our Story</a>
                    </Link>
                </li> 
                <li className="text-center mx-8">
                    <Link href="/the-wedding">
                        <a className="no-underline text-lg text-black">The Wedding</a>
                    </Link>
                </li> 
                <li className="text-center mx-8">
                    <Link href="/moments">
                        <a className="no-underline text-lg text-black">Moments</a>
                    </Link>
                </li> 
                <li className="text-center mx-8">
                    <Link href="/our-entourage">
                        <a className="no-underline text-lg text-black">Our Entourage</a>
                    </Link>
                </li>                                                
            </ul> 
        </nav>
    )
}

export default Nav;