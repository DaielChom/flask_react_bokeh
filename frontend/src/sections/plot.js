import React, {Component} from 'react'
import BokehPlot from '../bokeh/plot';
import './section.css'

class PlotSection extends Component{
   
    render(){

        const section_data = this.props.section_data

        return(
            <div className="row">
                <div className="col s12">
                    <div className="card-panel margin-card-0">
                        <form>

                        </form>
                        <BokehPlot component_key={this.props.component_key+'_bk'} data_to_plot={section_data.data}/>
                    </div>
                </div>
          </div>
        )
    }
}

export default PlotSection