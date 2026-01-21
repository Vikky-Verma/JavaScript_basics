// ES6 module = An external file that contains reusable code 
            //  that can be imported into other js file.
            // Write reusable code for many different apps.
            //  Can contain variables , classes , functions  ... and more 
            //   Introduced as part of  ECMAScript  update


import {PI  , getCircumference, getArea,getVolume} from './MathUtil.js';
console.log(PI);
console.log(getArea(5).toFixed(2));
console.log(getVolume(10).toFixed(2));
console.log(getCircumference(20).toFixed(3));
