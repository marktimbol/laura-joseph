const Heading = (props) => {
    return (
        <h2 className="text-black">
            {props.children}
            <style jsx>{`
                h2 {
                    font-size: 32px;
                    line-height: 48px;
                    word-spacing: 8px;
                    font-weight: normal;
                    font-family: 'noelan script', Arial;
                    text-align: ${props.alignCenter ? 'center' : 'left'};
                }
            `}</style>
        </h2>
    )
}

export default Heading;