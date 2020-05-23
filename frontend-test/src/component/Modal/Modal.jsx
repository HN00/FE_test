import React from 'react';
import { Modal, Button, InputGroup, FormControl, Alert } from 'react-bootstrap';

const { Header, Body, Footer, Title } = Modal;

const { Prepend, Text, Append } = InputGroup;

const CustomModal = (props) => {
    const { handleClose, isShow, vehicleDetail, isError } = props;
    
    const formatDate = (date) => {

        const time = new Date(date);
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const year = time.getFullYear();

        return month + "/" + day + "/" + year;
    };

    return(
        <Modal show={isShow} size= "lg" onHide={handleClose}>
            <Header closeButton>
                <Title>Vehicles Detail</Title>
            </Header>
            
            <Body>
                {
                    !isError ? 
                        (vehicleDetail && (
                        <>
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-1">Name</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.name }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-2">Vehicle Class</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.vehicle_class }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-3">Model</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.model }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-4">Manufacturer</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.manufacturer }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-5">Max Atmosphering Speed</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.max_atmosphering_speed }
                                />
                                <Append>
                                    <Text>mph</Text>
                                </Append>
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-6">Consumables</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.consumables }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-7">Crew</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.crew }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-8">Length</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.length }
                                />
                                <Append>
                                    <Text>ft</Text>
                                </Append>
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-9">Passengers</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.passengers }
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-10">Cargo capacity</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = {vehicleDetail.cargo_capacity}
                                />
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pr-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-11">Cost in credits</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { vehicleDetail.cost_in_credits }
                                />
                                <Append>
                                    <Text>$</Text>
                                </Append>
                            </InputGroup>
            
                            <InputGroup size="sm" className="mb-3 pl-1 w-50 f-left">
                                <Prepend>
                                <Text id="inputGroup-sizing-sm-12">Created</Text>
                                </Prepend>
                                <FormControl 
                                    readOnly 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value = { formatDate(vehicleDetail.created) }
                                />
                            </InputGroup>
                        </>
                        )) 
                    : 
                        <Alert variant="warning">Have issues from sever!</Alert>                
                }
            </Body>
            <Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Footer>
        </Modal>
    );
}

export default CustomModal;