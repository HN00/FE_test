import React from 'react';
import { Pagination } from 'react-bootstrap';

const { First, Prev, Item, Next, Last } = Pagination

const CustomPagination = (props) => {
    const { numberPage, handleChangePage, maxPage, next, previous } = props;
    let arrItem = [];
    const handleClick = page => evt => {
        evt.preventDefault();
        handleChangePage(page);
    }

    for ( let i = 1; i < maxPage + 1; i++ ) {
    arrItem.push(<Item disabled = {numberPage === i ? true : false} onClick={handleClick(i)}>{i}</Item>)
    }

    return(
        <Pagination style={{float: 'right'}}>
            <First disabled = {numberPage === 1 ? true : false} onClick={handleClick(1)}/>
            <Prev disabled = {previous === null ? true : false} onClick={handleClick(numberPage - 1)}/>
                {arrItem}
            <Next disabled = {next === null ? true : false} onClick={handleClick(numberPage + 1)}/>
            <Last disabled = {numberPage === maxPage ? true : false} onClick={handleClick(maxPage)}/>
        </Pagination>
    );
}

export default CustomPagination;