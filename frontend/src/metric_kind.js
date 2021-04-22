import React, {Component} from 'react'
import InvalidSection from './sections/invalid';
import TableSection from './sections/table';
import PlotSection from './sections/plot';

class MetricKind extends Component{

    section_renderization(idx, value) {
        if (idx==='metrics_plot'){
            return <PlotSection key={this.props.component_key+"_"+idx} component_key={this.props.component_key+"_"+idx} section_data={value}/>
        }
        
        else if(idx==='metrics_table'){
            return <TableSection key={this.props.component_key+"_"+idx} component_key={this.props.component_key+"_"+idx} section_data={value}/>
        }
        
        else {
            return <InvalidSection key={this.props.component_key+"_"+idx} component_key={this.props.component_key+"_"+idx}/>
        }
    }

    render(){
        const title = this.props.title
        const sections = this.props.sections
        
        const render_sections = Object.entries(sections).map(([idx, value]) => this.section_renderization(idx, value))
        
        return(
            <div>
                <h3>{title}</h3>
                {render_sections}
            </div>
        )
    }
}

export default MetricKind