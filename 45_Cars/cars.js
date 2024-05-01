"use strict";
function store_carInfo(manufacturer, modelName, ...extraOptions) {
    let carsInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOptions));
    return carsInfo;
}
;
let answer = store_carInfo('Honda', 'Civic', { color: 'Black' }, { features: ['Navigation', 'Power Window'] });
console.log(answer);
