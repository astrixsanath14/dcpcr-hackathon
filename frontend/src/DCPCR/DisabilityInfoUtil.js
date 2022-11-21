import React, { useState } from "react";
import * as Constants from './res/Constants'

const maxButttonPerRow = 3;

export const getRowWiseDisabilityOptions = (excludeDisabilityInfo) =>
{
    var rowWiseDisabilityOptions = [];
    var i = 0;
    var currRowDisabilityOptions = [];
    while (true)
    {
        if (i >= Constants.DisabilityOptions.length)
        {
            break;
        }
        if (currRowDisabilityOptions.length == maxButttonPerRow)
        {
            rowWiseDisabilityOptions.push(currRowDisabilityOptions);
            currRowDisabilityOptions = [];
        }
        if (excludeDisabilityInfo !== Constants.DisabilityOptions[i].value)
        {
            currRowDisabilityOptions.push(Constants.DisabilityOptions[i]);
        }
        i++;
    }
    if (currRowDisabilityOptions.length > 0)
    {
        rowWiseDisabilityOptions.push(currRowDisabilityOptions);
        currRowDisabilityOptions = [];
    }
    return rowWiseDisabilityOptions;
}