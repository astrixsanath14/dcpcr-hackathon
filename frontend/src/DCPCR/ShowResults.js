import React, { useState } from "react";

const ShowResults = (props) => {
    var values;
    const state = props.location.state;
    if (state && state.values)
    {
        values = state.values;
    }
    console.log('values received', values);
    return (
    <div>
        1234
    </div>
    );
}

export default ShowResults;