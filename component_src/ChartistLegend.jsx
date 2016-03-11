import React from 'react';
import ChartistKey from './ChartistKey.jsx';

class ChartistLegend extends React.Component {

	render(){
            
        let {legend} = this.props,
            counter = 0,
            keys = legend.map(
                    key => {
                        return (
                            <ChartistKey type={this.props.type} legkey={key} count={counter}/>
                        )
                        counter ++;
                    }
                  )

		return (
          <dl>
            {keys}
        </dl>
		)
	}
}


export default ChartistLegend