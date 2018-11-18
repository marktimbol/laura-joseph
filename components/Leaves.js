import React, { Component } from 'react';

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function pixelValue(value) {
    return value + 'px';
}

function durationValue(value) {
    return value + 's';
}

const Leaf = () => {
    // let spinAnimationName = (Math.random() < 0.8) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    let spinAnimationName = 'clockwiseSpin';
    let fadeAndDropDuration = durationValue(randomInteger(21, 16));
    let spinDuration = durationValue(randomInteger(11, 8));
    let leafDelay = durationValue(randomInteger(0, 15));
    let leaf_image = randomInteger(1,5) + '.png';
    
    return (
        <div style={{ 
            top: '110%', 
            left: pixelValue(randomInteger(4000, 10)),
            WebkitAnimationName: 'fade, drop',
            WebkitAnimationDuration: fadeAndDropDuration + ', ' + fadeAndDropDuration,
            WebkitAnimationDelay:  leafDelay + ', ' + leafDelay,
        }}
        >
            <img src={`/static/images/leaf/${leaf_image}`} style={{
                WebkitAnimationName: spinAnimationName,
                WebkitAnimationDuration: spinDuration,
            }} />

            <style jsx>{`
                @keyframes clockwiseSpin {
                    0% {
                        -webkit-transform: rotate(-50deg)
                    }
                    
                    60% {
                        -webkit-transform: rotate(50deg)
                    }
                    
                    80% {
                        -webkit-transform: rotate(80deg)
                    }
                    
                    100% {
                        -webkit-transform: rotate(-40deg)
                    }
                }
                
                @keyframes counterclockwiseSpinAndFlip {
                    0% {
                        -webkit-transform: scale(-1, 1) rotate(80deg)
                    }
                    
                    100% {
                        -webkit-transform: scale(-1, 1) rotate(-80deg)
                    }
                }
            `}</style>
        </div>
    )
}

class Leaves extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            number_of_leaves: 30,
        }
    }

    render()
    {
        let range = [];
        for (let i = 1; i <= this.state.number_of_leaves; i++) {
            range.push({
                label: 'Leaf ' + i,
                value: i,
            });
        }

        let leaves = range.map((leaf, index) => {
            return (
                <Leaf key={index} leaf={leaf} />
            )
        })

        return (
            <div>
                {leaves}
            </div>
        )
    }
}

export default Leaves;