import React from 'react';

function Validation(props) {
    const style = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <p style={style}>
            {props.msg}
        </p>    
    )

}

export default Validation;