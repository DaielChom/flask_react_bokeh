import React, {Component} from 'react'
import MetricKind from './metric_kind';

class StrategyMode extends Component{

    render(){

        const title = this.props.title;
        var metrics_data = this.props.data;
                
        // Generating a MetricKind component by each metrics_data item
        const metrics_sections = Object.entries(metrics_data).map(([idx, value]) => { return <li key={'li_'+this.props.component_key+'_'+idx} className="collection-item"> <MetricKind key={this.props.component_key+'_'+idx} component_key={this.props.component_key+'_'+idx} title={idx} sections={value}/> </li>})

        return(
            <div className='col s6'>
                <h1>{title}</h1>
                <ul className='collection'>
                    {metrics_sections}            
                </ul>
            </div>
        )
    }
}

export default StrategyMode