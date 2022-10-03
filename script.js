// primary buttons
const len = document.getElementById('LengthBtn');
const temp = document.getElementById('TemperatureBtn');
const mass = document.getElementById('MassBtn');
const vol = document.getElementById('volumeBtn');
const data = document.getElementById('dataBtn');
// primary sections
const lenSec = document.getElementById('Length');
const tempSec = document.getElementById('Temperature');
const massSec = document.getElementById('Mass');
const volSec = document.getElementById('Volume');
const dataSec = document.getElementById('Data');
// back button
const back = document.getElementById('back');
// first selections of 4 sections
const lenSel = document.getElementById('lenSel');
const tempSel = document.getElementById('tempSel');
const volSel = document.getElementById('volSel');
const massSel = document.getElementById('massSel');
const dataSel = document.getElementById('dataSel');
// second selections of 4 sections
const lenSelTw = document.getElementById('lenSelTw');
const tempSelTw = document.getElementById('tempSelTw');
const volSelTw = document.getElementById('volSelTw');
const massSelTw = document.getElementById('massSelTw');
const dataSelTw = document.getElementById('dataSelTw');
// inputs of 4 sections
const fiInput = document.getElementById('lenNum');
const foInput = document.getElementById('massNum');
const secInput = document.getElementById('tempNum');
const thInput = document.getElementById('volNum');
const dataInput = document.getElementById('dataNum');
// result div of 4 sections
const fiResult = document.getElementById('lenRes');
const secResult = document.getElementById('tempRes');
const thResult = document.getElementById('volRes');
const foResult = document.getElementById('massRes');
const dataResult = document.getElementById('dataRes');

len.addEventListener('click', () => {
    fiInput.value = '';
    fiResult.value = '';
    lenSec.style.display = 'block';
    back.style.display = 'block';
    len.style.display = 'none';
    temp.style.display = 'none';
    mass.style.display = 'none';
    vol.style.display = 'none';
    data.style.display = 'none';
})
let secVal = lenSelTw.value;
let fiVal = lenSel.value;
let convertor = `${fiVal} to ${secVal}`;
lenSelTw.addEventListener('change', () => {
    secVal = lenSelTw.value;
    convertor = `${fiVal} to ${secVal}`;
    fiInput.value = '';
    fiResult.value = '';
});

lenSel.addEventListener('change', () => {
    fiVal = lenSel.value;
    convertor = `${fiVal} to ${secVal}`;
    fiInput.value = '';
    fiResult.value = '';
});
fiInput.addEventListener('change', () => {
    if (convertor === "Meter to Feet") {
        let num = fiInput.value * 3.28;
        fiResult.value = num.toFixed(2);
    } else if (convertor === "Meter to Cm") {
        let num = fiInput.value * 100;
        fiResult.value = num;
    } else if (convertor === "Meter to Miles") {
        let num = fiInput.value * 0.000621;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Meter to Inch") {
        let num = fiInput.value * 39.37;
        fiResult.value = num.toFixed(2);
    } else if (convertor === "Meter to Km") {
        let num = fiInput.value * 0.001;
        fiResult.value = num.toFixed(3);
    } else if (convertor === "Meter to Meter") {
        let num = fiInput.value;
        fiResult.value = num;
    }
    if (convertor === "Cm to Feet") {
        let num = fiInput.value * 0.0328;
        fiResult.value = num.toFixed(4);
    } else if (convertor === "Cm to Meter") {
        let num = fiInput.value * 0.01;
        fiResult.value = num.toFixed(2);
    } else if (convertor === "Cm to Miles") {
        let num = fiInput.value * 0.00000621;
        fiResult.value = num.toFixed(8);
    } else if (convertor === "Cm to Inch") {
        let num = fiInput.value * 0.3937;
        fiResult.value = num.toFixed(4);
    } else if (convertor === "Cm to Km") {
        let num = fiInput.value * 0.00001;
        fiResult.value = num.toFixed(5);
    } else if (convertor === "Cm to Cm") {
        let num = fiInput.value;
        fiResult.value = num;
    }
    if (convertor === "Feet to Cm") {
        let num = fiInput.value * 30.48;
        fiResult.value = num.toFixed(2);
    } else if (convertor === "Feet to Meter") {
        let num = fiInput.value * 0.3048;
        fiResult.value = num.toFixed(4);
    } else if (convertor === "Feet to Inch") {
        let num = fiInput.value * 12;
        fiResult.value = num;
    } else if (convertor === "Feet to Miles") {
        let num = fiInput.value * 0.000189;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Feet to Km") {
        let num = fiInput.value * 0.0003048;
        fiResult.value = num.toFixed(7);
    } else if (convertor === "Feet to Feet") {
        let num = fiInput.value;
        fiResult.value = num;
    }
    if (convertor === "Inch to Cm") {
        let num = fiInput.value * 2.54;
        fiResult.value = num.toFixed(2);
    } else if (convertor === "Inch to Meter") {
        let num = fiInput.value * 0.0254;
        fiResult.value = num.toFixed(4);
    } else if (convertor === "Inch to Feet") {
        let num = fiInput.value * 0.083;
        fiResult.value = num.toFixed(3);
    } else if (convertor === "Inch to Miles") {
        let num = fiInput.value * 0.0000157;
        fiResult.value = num.toFixed(7);
    } else if (convertor === "Inch to Km") {
        let num = fiInput.value * 0.0000254;
        fiResult.value = num.toFixed(7);
    } else if (convertor === "Inch to Inch") {
        let num = fiInput.value;
        fiResult.value = num;
    }
    if (convertor === "Miles to Cm") {
        let num = fiInput.value * 160934.4;
        fiResult.value = num.toFixed(1);
    } else if (convertor === "Miles to Meter") {
        let num = fiInput.value * 1609.334;
        fiResult.value = num.toFixed(3);
    } else if (convertor === "Miles to Feet") {
        let num = fiInput.value * 5280;
        fiResult.value = num;
    } else if (convertor === "Miles to Inch") {
        let num = fiInput.value * 63360;
        fiResult.value = num;
    } else if (convertor === "Miles to Km") {
        let num = fiInput.value * 1.609344;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Miles to Miles") {
        let num = fiInput.value;
        fiResult.value = num;
    }
    if (convertor === "Km to Cm") {
        let num = fiInput.value * 100000;
        fiResult.value = num;
    } else if (convertor === "Km to Meter") {
        let num = fiInput.value * 1000;
        fiResult.value = num;
    } else if (convertor === "Km to Feet") {
        let num = fiInput.value * 3280.839895;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Km to Inch") {
        let num = fiInput.value * 39370.076740;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Km to Miles") {
        let num = fiInput.value * 0.621371;
        fiResult.value = num.toFixed(6);
    } else if (convertor === "Km to Km") {
        let num = fiInput.value;
        fiResult.value = num;
    }
})



temp.addEventListener('click', () => {
        secInput.value = ''
        secResult.value = ''
        tempSec.style.display = 'block';
        back.style.display = 'block';
        len.style.display = 'none';
        temp.style.display = 'none';
        mass.style.display = 'none';
        vol.style.display = 'none';
        data.style.display = 'none';
    })
    // Temperature
let tempVal = tempSelTw.value;
let fiTemp = tempSel.value;
let seConvertor = `${fiTemp} to ${tempVal}`;

tempSel.addEventListener('change', () => {
    secInput.value = ''
    secResult.value = ''
    fiTemp = tempSel.value;
    seConvertor = `${fiTemp} to ${tempVal}`;
});

tempSelTw.addEventListener('change', () => {
    secInput.value = ''
    secResult.value = ''
    tempVal = tempSelTw.value;
    seConvertor = `${fiTemp} to ${tempVal}`;
});

secInput.addEventListener('change', () => {
    if (seConvertor === 'Celsius to Fahrenheit') {
        let num = secInput.value * 33.8;
        secResult.value = num.toFixed(1);
    } else if (seConvertor === 'Celsius to Kelvin') {
        let num = secInput.value * 274.15;
        secResult.value = num.toFixed(2);
    } else if (seConvertor === 'Celsius to Celsius') {
        let num = secInput.value
        secResult.value = num
    }
    if (seConvertor === 'Fahrenheit to Celsius') {
        let num = secInput.value * -17.22;
        secResult.value = num.toFixed(2);
    } else if (seConvertor === 'Fahrenheit to Kelvin') {
        let num = secInput.value * 255.927;
        secResult.value = num.toFixed(3);
    } else if (seConvertor === 'Fahrenheit to Fahrenheit') {
        let num = secInput.value
        secResult.value = num
    }
    if (seConvertor === 'Kelvin to Celsius') {
        let num = secInput.value * -272.15;
        secResult.value = num.toFixed(2);
    } else if (seConvertor === 'Kelvin to Fahrenheit') {
        let num = secInput.value * -457.87;
        secResult.value = num.toFixed(2);
    } else if (seConvertor === 'Kelvin to Kelvin') {
        let num = secInput.value
        secResult.value = num
    }
});

// Volume
let volVal = volSel.value;
let seVal = volSelTw.value;
let thiConvertor = `${volVal} to ${seVal}`;

vol.addEventListener('click', () => {
    thInput.value = '';
    thResult.value = '';
    volSec.style.display = 'block';
    back.style.display = 'block';
    len.style.display = 'none';
    temp.style.display = 'none';
    mass.style.display = 'none';
    vol.style.display = 'none';
    data.style.display = 'none';
})

volSel.addEventListener('change', () => {
    thInput.value = '';
    thResult.value = '';
    volVal = volSel.value;
    thiConvertor = `${volVal} to ${seVal}`;
});

volSelTw.addEventListener('change', () => {
    thInput.value = '';
    thResult.value = '';
    seVal = volSelTw.value;
    thiConvertor = `${volVal} to ${seVal}`;
});

thInput.addEventListener('change', () => {
    if (thiConvertor === 'Liter to Gallon') {
        let num = thInput.value * 0.264172;
        thResult.value = num.toFixed(6);
    } else if (thiConvertor === 'Liter to Cubic CM') {
        let num = thInput.value * 1000;
        thResult.value = num;
    } else if (thiConvertor === 'Liter to Liter') {
        let num = thInput.value
        thResult.value = num
    }
    if (thiConvertor === 'Gallon to Liter') {
        let num = thInput.value * 3.7854117;
        thResult.value = num.toFixed(7);
    } else if (thiConvertor === 'Gallon to Cubic CM') {
        let num = thInput.value * 3785.4117;
        thResult.value = num.toFixed(4);
    } else if (thiConvertor === 'Gallon to Gallon') {
        let num = thInput.value
        thResult.value = num
    }
    if (thiConvertor === 'Cubic CM to Gallon') {
        let num = thInput.value * 0.0002641;
        thResult.value = num.toFixed(6);
    } else if (thiConvertor === 'Cubic CM to Liter') {
        let num = thInput.value * 0.001;
        thResult.value = num.toFixed(3);
    } else if (thiConvertor === 'Cubic CM to Cubic CM') {
        let num = thInput.value
        thResult.value = num
    }
});



// Mass
let masVal = massSel.value;
let seMasVal = massSelTw.value;
let frsConvertor = `${masVal} to ${seMasVal}`;

mass.addEventListener('click', () => {
    foInput.value = ''
    foResult.value = ''
    massSec.style.display = 'block';
    back.style.display = 'block';
    len.style.display = 'none';
    temp.style.display = 'none';
    mass.style.display = 'none';
    vol.style.display = 'none';
    data.style.display = 'none';
})

massSel.addEventListener('change', () => {
    foInput.value = '';
    foResult.value = ''
    masVal = massSel.value;
    frsConvertor = `${masVal} to ${seMasVal}`;
    console.log(frsConvertor);
});
massSelTw.addEventListener('change', () => {
    foInput.value = '';
    foResult.value = ''
    seMasVal = massSelTw.value;
    frsConvertor = `${masVal} to ${seMasVal}`;
    console.log(frsConvertor);
});

foInput.addEventListener('change', () => {
    if (frsConvertor === 'KG to Pound') {
        let num = foInput.value * 2.2046;
        foResult.value = num.toFixed(4);
    } else if (frsConvertor === 'KG to Gram') {
        let num = foInput.value * 1000;
        foResult.value = num;
    } else if (frsConvertor === 'KG to Ounce') {
        let num = foInput.value * 35.27396;
        foResult.value = num.toFixed(5);
    } else if (frsConvertor === 'KG to KG') {
        let num = foInput.value
        foResult.value = num
    }
    if (frsConvertor === 'Pound to KG') {
        let num = foInput.value * 0.453592;
        foResult.value = num.toFixed(6);
    } else if (frsConvertor === 'Pound to Gram') {
        let num = foInput.value * 453.492;
        foResult.value = num.toFixed(3);
    } else if (frsConvertor === 'Pound to Ounce') {
        let num = foInput.value * 16;
        foResult.value = num;
    } else if (frsConvertor === 'Pound to Pound') {
        let num = foInput.value
        foResult.value = num
    }
    if (frsConvertor === 'Ounce to KG') {
        let num = foInput.value * 0.0283495;
        foResult.value = num.toFixed(7);
    } else if (frsConvertor === 'Ounce to Gram') {
        let num = foInput.value * 28.349523;
        foResult.value = num.toFixed(6);
    } else if (frsConvertor === 'Ounce to Pound') {
        let num = foInput.value * 0.0625;
        foResult.value = num.toFixed(4);
    } else if (frsConvertor === 'Ounce to Ounce') {
        let num = foInput.value
        foResult.value = num
    }
    if (frsConvertor === 'Gram to KG') {
        let num = foInput.value * 0.001;
        foResult.value = num.toFixed(6);
    } else if (frsConvertor === 'Gram to Pound') {
        let num = foInput.value * 0.0022046;
        foResult.value = num.toFixed(7);
    } else if (frsConvertor === 'Gram to Ounce') {
        let num = foInput.value * 0.0352739;
        foResult.value = num.toFixed(7);
    } else if (frsConvertor === 'Gram to Gram ') {
        let num = foInput.value
        foResult.value = num
    }
});




// Data
let dataVal = dataSel.value;
let seDataVal = dataSelTw.value;
let dataConvertor = `${dataVal} to ${seDataVal}`;

data.addEventListener('click', () => {
    dataInput.value = ''
    dataResult.value = ''
    dataSec.style.display = 'block';
    back.style.display = 'block';
    len.style.display = 'none';
    temp.style.display = 'none';
    mass.style.display = 'none';
    vol.style.display = 'none';
    data.style.display = 'none';
})
dataSel.addEventListener('change', () => {
    dataInput.value = '';
    dataResult.value = ''
    dataVal = dataSel.value;
    dataConvertor = `${dataVal} to ${seDataVal}`;
    console.log(dataConvertor);
});
dataSelTw.addEventListener('change', () => {
    dataInput.value = '';
    dataResult.value = ''
    seDataVal = dataSelTw.value;
    dataConvertor = `${dataVal} to ${seDataVal}`;
    console.log(dataConvertor);
});

dataInput.addEventListener('change', () => {
    if (dataConvertor === "Bits to Terabytes") {
        let num = dataInput.value * 1.13686838E-13;
        dataResult.value = num;
    } else if (dataConvertor === "Bits to Gigabytes") {
        let num = dataInput.value * 1.16415322E-10;
        dataResult.value = num;
    } else if (dataConvertor === "Bits to Megabytes") {
        let num = dataInput.value * 1.19209290E-7;
        dataResult.value = num;
    } else if (dataConvertor === "Bits to Kilobytes") {
        let num = dataInput.value * 0.000122;
        dataResult.value = num.toFixed(6);
    } else if (dataConvertor === "Bits to Bytes") {
        let num = dataInput.value * 0.125;
        dataResult.value = num.toFixed(3);
    } else if (dataConvertor === "Bits to Bits") {
        let num = dataInput.value;
        dataResult.value = num;
    }
    if (dataConvertor === "Bytes to Bits") {
        let num = dataInput.value * 8;
        dataResult.value = num;
    } else if (dataConvertor === "Bytes to Kilobytes") {
        let num = dataInput.value * 0.0009765625;
        dataResult.value = num.toFixed(10);
    } else if (dataConvertor === "Bytes to Megabytes") {
        let num = dataInput.value * 9.53674316E-7;
        dataResult.value = num;
    } else if (dataConvertor === "Bytes to Terabytes") {
        let num = dataInput.value * 9.09494702E-13;
        dataResult.value = num;
    } else if (dataConvertor === "Bytes to Gigabytes") {
        let num = dataInput.value * 9.31322575E-10;
        dataResult.value = num;
    } else if (dataConvertor === "Bytes to Bytes") {
        let num = dataInput.value;
        dataResult.value = num;
    }

    if (dataConvertor === "Megabytes to Terabytes") {
        let num = dataInput.value * 9.53674316E-7;
        dataResult.value = num;
    } else if (dataConvertor === "Megabytes to Gigabytes") {
        let num = dataInput.value * 0.0009765625;
        dataResult.value = num.toFixed(10);
    } else if (dataConvertor === "Megabytes to Kilobytes") {
        let num = dataInput.value * 1024;
        dataResult.value = num;
    } else if (dataConvertor === "Megabytes to Bytes") {
        let num = dataInput.value * 1048576;
        dataResult.value = num
    } else if (dataConvertor === "Megabytes to Bits") {
        let num = dataInput.value * 8388608;
        dataResult.value = num
    } else if (dataConvertor === "Megabytes to Megabytes") {
        let num = dataInput.value;
        dataResult.value = num;
    }
    if (dataConvertor === "Kilobytes to Terabytes") {
        let num = dataInput.value * 9.31322575E-10;
        dataResult.value = num;
    } else if (dataConvertor === "Kilobytes to Gigabytes") {
        let num = dataInput.value * 9.53674316E-7;
        dataResult.value = num;
    } else if (dataConvertor === "Kilobytes to Megabytes") {
        let num = dataInput.value * 0.0009765625;
        dataResult.value = num.toFixed(10);
    } else if (dataConvertor === "Kilobytes to Bits") {
        let num = dataInput.value * 8192;
        dataResult.value = num;
    } else if (dataConvertor === "Kilobytes to Bytes") {
        let num = dataInput.value * 1024;
        dataResult.value = num;
    } else if (dataConvertor === "Kilobytes to Kilobytes") {
        let num = dataInput.value;
        dataResult.value = num;
    }
    if (dataConvertor === "Gigabytes to Bits") {
        let num = dataInput.value * 8589934592;
        dataResult.value = num;
    } else if (dataConvertor === "Gigabytes to Bytes") {
        let num = dataInput.value * 1073741824;
        dataResult.value = num
    } else if (dataConvertor === "Gigabytes to Kilobytes") {
        let num = dataInput.value * 1048576;
        dataResult.value = num;
    } else if (dataConvertor === "Gigabytes to Megabytes") {
        let num = dataInput.value * 1024;
        dataResult.value = num;
    } else if (dataConvertor === "Gigabytes to Terabytes") {
        let num = dataInput.value * 0.0009765625;
        dataResult.value = num.toFixed(10);
    } else if (dataConvertor === "Gigabytes to Gigabytes") {
        let num = dataInput.value;
        dataResult.value = num;
    }
    if (dataConvertor === "Terabytes to Bits") {
        let num = dataInput.value * 8796093022208;
        dataResult.value = num;
    } else if (dataConvertor === "Terabytes to Bytes") {
        let num = dataInput.value * 1099511627776
        dataResult.value = num;
    } else if (dataConvertor === "Terabytes to Kilobytes") {
        let num = dataInput.value * 1073741824;
        dataResult.value = num
    } else if (dataConvertor === "Terabytes to Megabytes") {
        let num = dataInput.value * 1048576;
        dataResult.value = num
    } else if (dataConvertor === "Terabytes to Gigabytes") {
        let num = dataInput.value * 1024;
        dataResult.value = num
    } else if (dataConvertor === "Terabytes to Terabytes") {
        let num = dataInput.value;
        dataResult.value = num;
    }
})


back.addEventListener('click', () => {
    len.style.display = 'block';
    temp.style.display = 'block';
    mass.style.display = 'block';
    vol.style.display = 'block';
    data.style.display = 'block';
    volSec.style.display = 'none';
    massSec.style.display = 'none';
    tempSec.style.display = 'none';
    lenSec.style.display = 'none';
    dataSec.style.display = 'none';
    back.style.display = 'none';
});