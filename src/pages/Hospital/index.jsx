import React from 'react'
import './index.less'
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
            <div className="webContentItem">
              <div className="contentBac">

              </div>
            </div>
        )
    }
}

export default Hospital;