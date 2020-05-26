import * as Types from './../constants/ActionsTypes';

var initialState = [];

const vehicles = (state = initialState, action) => {
    switch (action.type) {

        case Types.FETCH_All_VEHICLES_START:
            return {...state, loading: action.loading};

        case Types.FETCH_All_VEHICLES_SUCCESS:
            let dataVehicles;
            const { data } = action
            const strN = data.next;
            const strP = data.previous;
            let next = strN ? 
                        parseInt(strN.slice(strN.search("page=") + 5)) 
                        : 
                        strN;
            let previous = strP ? 
                        parseInt(strP.slice(strP.search("page=") + 5)) 
                        : 
                        strP;
            dataVehicles = {
                count: data.count,
                vehicles: data.results,
                next,
                previous,
                loading: false
            }
            return dataVehicles;

        case Types.FETCH_All_VEHICLES_FAIL:
            return {...state, loading: false, vehicles: [], errorSever: true};

        case Types.FETCH_VEHICLE_DETAIL_START:
            return {...state, 
                loading: action.loading
            };
        
        case Types.FETCH_VEHICLE_DETAIL_SUCCESS:            
            return {...state, 
                vehicleDetail: action.data, 
                loading: false,
                error: false
            };

        case Types.FETCH_VEHICLE_DETAIL_FAIL:            
            return {...state, 
                loading: false,
                error: true
            };

        default: return state;
    }
};

export default vehicles;