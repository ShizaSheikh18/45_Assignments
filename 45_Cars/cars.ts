function store_carInfo (manufacturer:string, modelName:string, ...extraOptions :{[key : string] : any} [] ): object {
let carsInfo ={
    manufacturer ,
    modelName , 
    ...Object.assign({}, ...extraOptions)
}
return carsInfo
};

let answer = store_carInfo('Honda', 'Civic', {color : 'Black'}, {features: ['Navigation', 'Power Window']});
console.log(answer);