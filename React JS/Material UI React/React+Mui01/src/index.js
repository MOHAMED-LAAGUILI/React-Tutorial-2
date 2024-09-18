import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 
import { ThemeProvider , createTheme } from '@mui/material';

import App from './App';
import { green, orange, red, yellow } from '@mui/material/colors';

// source MUI Docs
// https://mui.com/material-ui/customization/default-theme/
// source video
// https://www.youtube.com/watch?v=_W3uuxDnySQ&list=PLQg6GaokU5CyVrmVsYa9R3g1z2Tsmfpm-


// to overwrite the existing values of MUI you need to check the source MUI Docs
// to see structure of properties then you can create the again heres as as a constant with new values

const theme = createTheme({
    // you can use these values like these below or the hex values "#000000"
palette:{
    primary:{
        main : orange[600]
    },
    secondary:{
        main : yellow[600] 
    }
},
typography:{
    // you can also creat properties of your own like i did i creat a new new one calles myVariable
    // only in the real main properties like palette and so one 
    myVariant: {
        fontSize: "2rem",
        fontWeight: "bolder"
    }
},
myCostumColor:{
    main: red[600],
    superDarkRed: red[800],
    superLightRed: red[100]
}

});


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
</StrictMode>

);

