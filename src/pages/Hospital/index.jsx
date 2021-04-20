import React from 'react'
import { Carousel } from 'antd';

class Hospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {

    }
    onChange (a, b, c) {
        console.log(a, b, c);
    }
    render () {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div>
                hhhhh
                {/* <Carousel afterChange={this.onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel> */}
            </div>
        )
    }
}

export default Hospital;