import React, {Component} from 'react'
import './section.css'

class TableSection extends Component{

    render(){
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel  margin-card-0">
                        
                        <span className="card-title">Metrics summary</span>
                        This is a table
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TableSection