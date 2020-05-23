import React, { useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';

//Redux
import { connect } from 'react-redux';
import { actFetchVehiclesRequest, actFetchVehicleDetailRequest, } from './../../store/actions/index';

//Component
import CustomTable from './../../component/Table/Table';
import CustomPagination from './../../component/Pagination/Pagination';
import CustomModal from './../../component/Modal/Modal'
import { InputGroup, FormControl, Button, Alert } from 'react-bootstrap';

const { Append, Text } = InputGroup;

const HomeCtn = (props) => {

    const { count, fetchVehicles, fetchDetailVehicle, next, previous,  vehicleDetail, vehicles, isError } = props;

    const [state, setState] = useState({
        numberPage: 0,
        searchString: "",
        isShowModal: false,
        isError: false,
        loading: false,
        isShowTable: true
    });

    useEffect(() => {
        fetchVehicles();
    },[]);

    useEffect(() => {
        if ( props ) {
            setState( prevState => ({
                ...prevState,
                numberPage: next !== null ? next - 1 : previous + 1,
                maxPage: Math.ceil(count / 10),
                isShowTable: vehicles && vehicles.length > 0 ? true : false,
            }));
        }
        
    }, [props]);
    
    useEffect(() => {
        if(isError) {
            setState( prevState => ({
                ...prevState,
                isShowModal: false,
                isError: true
            }));
        }
    },[isError]);

    const _handleChangeState = ( key, value ) => {
        setState( prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const _handleModal = url => {
        _handleChangeState('isShowModal', true);
        fetchDetailVehicle(url);
    };

    const _handleChangePage = page => {
        fetchVehicles(page);
    };

    const _handleSearch = () => {        
        fetchVehicles(state.searchString);
        _handleChangeState('searchString', "");        
    };

    return(
        <LoadingOverlay
            active={props.loading}
            spinner
            text='Loading your content...'
        >
            <div className="container-fluid">
                <h1 style={{textAlign:'center'}}>
                    LIST VEHICLES
                </h1>
                <div className="groupInput">
                    <InputGroup 
                        className="mb-3 w-30" 
                        onKeyDown={
                            (e) => {
                                if (e.key === "Enter") {
                                    _handleSearch(e)
                                }
                            }
                        }
                    >
                        <FormControl
                        placeholder="Search..."
                        aria-label="value"
                        aria-describedby="basic-addon2"
                        onChange = { (e) => _handleChangeState("searchString", e.target.value) }
                        value = { state.searchString }
                        />
                        <Append>
                            <Text id="basic-addon2">
                                <Button onClick={() => _handleSearch()}>
                                    <i className="fas fa-search"></i>
                                </Button>
                            </Text>
                        </Append>
                    </InputGroup>
                </div>
                
                { state.isShowTable === true  ? 
                    <>
                        <CustomTable 
                            vehicles = { vehicles }
                            numberPage = { state.numberPage  - 1 }
                            handleModal = { _handleModal }
                        />
                        <CustomPagination
                            count = { count }
                            next = { next }
                            previous = { previous }
                            numberPage = { state.numberPage}
                            handleChangePage = { _handleChangePage }
                            maxPage = { state.maxPage }
                        />
                    </>
                :
                    <Alert variant="danger">Not found or have a issues from sever. Please try again!</Alert>
                }
                <CustomModal
                    vehicleDetail = { vehicleDetail }
                    handleClose = { () => _handleChangeState('isShowModal', false)}
                    isShow = { state.isShowModal }
                    isError = { state.isError }
                />
            </div>
        </LoadingOverlay>
    );
};

const mapStateToProps = state => {
    const { vehicles } = state;
    return {
        count: vehicles.count,
        vehicles: vehicles.vehicles,
        next: vehicles.next,
        previous: vehicles.previous,
        loading: vehicles.loading,
        vehicleDetail: vehicles.vehicleDetail,
        isError: vehicles.error
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchVehicles : (numberPage) => {
            dispatch(actFetchVehiclesRequest(numberPage));
        },
        fetchDetailVehicle : (url) => {
            dispatch(actFetchVehicleDetailRequest(url));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeCtn);