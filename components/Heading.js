const Heading = (props) => {
    return (
        <h2 className="text-black">
            {props.children}
            <style jsx>{`
                h2 {
                    font-size: ${props.fontSize ? props.fontSize : '50px'};
                    line-height: 48px;
                    word-spacing: 8px;
                    font-weight: normal;
                    font-family: 'Blingtastic', sans-serif;
                    text-align: ${props.alignCenter ? 'center' : 'left'};
                }
            `}</style>
        </h2>
    )
}

export default Heading;