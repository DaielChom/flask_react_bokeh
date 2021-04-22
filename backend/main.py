from flask import jsonify
from flask import Flask
from config import DevelopmentConfig
from flask_wtf import CSRFProtect
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)

CORS(app) #comment this on deployment
csrf = CSRFProtect()

@app.route('/')
def hello_world():
    
    dashboard_data = {
        'active_mode':{
            'deals':{
                'metrics_plot':{
                    'available_metrics':['mean_pnl', 'mean_open_time'],
                    'agregation_period':'1d',
                    'data':{
                        'x':[[0, 1, 2, 3]],
                        'y':[[1, -5, 34, 33]],
                        'label':['mean_pnl']
                        }
                    },
                'metrics_table':{
                    'available_metrics':['deals_amount'],
                    'data':{
                        'deals_amount':50
                    }
                },
                
            },
             'global':{
                'metrics_plot':{
                    'available_metrics':['totalpnl', 'open_time'],
                    'agregation_period':'1d',
                    'data':{
                        'x':[[0, 1, 2, 3]],
                        'y':[[10, 5, 4, 3]],
                        'label':['totalpnl']
                        }
                    },
                'metrics_table':{
                    'available_metrics':['accumulated_pnl'],
                    'data':{
                        'accumulated_pnl':100
                    }
                },
            },
        },
        'shadow_mode':{
             'global':{
                'metrics_plot':{
                    'available_metrics':['totalpnl', 'open_time'],
                    'agregation_period':'1d',
                    'data':{
                        'x':[[0, 1, 2, 3], [0, 1, 2, 3] ],
                        'y':[[10, 5, 4, 3], [2,3,5,7]],
                        'label':['totalpnl', 'open_time']
                        }
                    },
                'metrics_table':{
                    'available_metrics':['accumulated_pnl'],
                    'data':{
                        'accumulated_pnl':{
                            'strategy_A':100,
                            'strategy_B':150,
                        }
                    }
                },
            },
            'deals':{
                'metrics_plot':{
                    'available_metrics':['mean_pnl', 'mean_open_time'],
                    'agregation_period':'1d',
                   'data':{
                        'x':[[0, 1, 2, 3], [0, 1, 2, 3] ],
                        'y':[[10, -5, -4, 3], [2,-3, -5,7]],
                        'label':['totalpnl', 'open_time']
                        }
                        
                    },
                'metrics_table':{
                    'available_metrics':['deals_amount'],
                    'data':{
                        'deals_amount':{
                            'strategy_A':10,
                            'strategy_B':50,
                        }
                    }
                },
                
            },
        },
    }    
    
    return jsonify(dashboard_data)


if __name__ == '__main__':
    csrf.init_app(app)
    app.run(port=5000, host='0.0.0.0')