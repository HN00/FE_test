import * as Types from './../constants/ActionsTypes';
import callApi from './../utils/api';

export const actFetchVehiclesRequest = ( data ) => {
    return dispatch => {
        dispatch(actFetchVehiclesStart());
        if (!data) {
            return callApi(`vehicles`, 'GET', null).then(res => {
                dispatch(actFetchVehiclesSuccess(res.data));
            });
        }

        if(typeof data === "string") {
            return callApi(`vehicles${data ? "/?search=" + data : ""}`, 'GET', null).then(res => {
                if (res.status !== 200) {
                    return actFetchVehiclesFail();
                } 
                dispatch(actFetchVehiclesSuccess(res.data));
            });
        }

        if(typeof data === "number") {
            return callApi(`vehicles${data ? "/?page=" + data : ""}`, 'GET', null).then(res => {
                
                if (res.status !== 200) {
                    return actFetchVehiclesFail();
                }

                dispatch(actFetchVehiclesSuccess(res.data));
            });
        }
    };
}

export const actFetchVehiclesStart = () => {
    return {
        type : Types.FETCH_All_VEHICLES_START,
        loading: true
    }
}

export const actFetchVehiclesSuccess = (data) => {
    return {
        type : Types.FETCH_All_VEHICLES_SUCCESS,
        data
    }
}

export const actFetchVehiclesFail = (data) => {
    return {
        type : Types.FETCH_All_VEHICLES_FAIL,
    }
}

export const actFetchVehicleDetailRequest = (url) => {
    const urlApi = url.slice(url.search("vehicles"))
    return dispatch => {
        dispatch(actFetchVehicleDetailStart())
        return callApi(urlApi, 'GET', null).then(res => {
            if (res.status !== 200) {                
                return actFetchVehicleDetailFail();
            }

            dispatch(actFetchVehicleDetailSuccess(res.data));
        });
    }
}

export const actFetchVehicleDetailStart = () => {
    return {
        type : Types.FETCH_VEHICLE_DETAIL_START,
        loading: true
    }
}

export const actFetchVehicleDetailSuccess = (data) => {
    return {
        type : Types.FETCH_VEHICLE_DETAIL_SUCCESS,
        data
    }
}

export const actFetchVehicleDetailFail = () => {
    return {
        type : Types.FETCH_VEHICLE_DETAIL_FAIL,
    }
}

export const actDeleteVehicleDetai = () => {
    return {
        type : Types.DELETE_VEHICLE_DETAIL,
    }
}
