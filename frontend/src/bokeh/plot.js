import React, {Component} from 'react'


class BokehPlot extends Component{

    constructor(props){
        super(props)
        this.state = {
            label: this.props.data_to_plot.label,
            x:this.props.data_to_plot.x,
            y:this.props.data_to_plot.y,
        }

    }

    build_bokeh_plot(){

        const Bokeh = window.Bokeh;
        var source = new Bokeh.ColumnDataSource({ data: { x: this.state.x, y: this.state.y } });

        // make the plot
        var plot = Bokeh.Plotting.figure({
            title:'metrics bokeh plot',
            width:400,
            height:150,
            sizing_mode:'scale_width',
            //background_fill_color: "#F2F2F7",
            toolbar_location:"above",
            tools:"pan,wheel_zoom,box_zoom,undo,reset,save",
        });

        // add a Line glyph
        var line = new Bokeh.MultiLine({
            xs: { field: "x" },
            ys: { field: "y" },
            line_color: "#666699",
            line_width: 2
        });
        plot.add_glyph(line, source);

        plot.toolbar.logo = null

        return plot//Bokeh.Plotting.gridplot([[plot]], {sizing_mode:'scale_width'})
    }

    componentDidMount () {
        
        window.Bokeh.Plotting.show(this.build_bokeh_plot(), document.getElementById(this.props.component_key+'_plot'));
        
        return false
    }

    render(){

        return(
            <div>
                <div className="mybokehplot bk-root">
                    <div id={this.props.component_key+'_plot'}></div>
                </div>
                
            </div>
            
        )
    }
}

export default BokehPlot