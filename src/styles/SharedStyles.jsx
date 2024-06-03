import {styled} from "@mui/material";
import { Button } from "@mui/material";

export const RootContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f5',
    minHeight: '100vh',
    width: '100%',
}))

export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f5',
    minHeight: '100vh',
    width: '100%',
}));

export const Logo = styled('img')({
    width: '25vw',
    height: 'auto',
});

export const MainTitleText = styled('h1')(({ theme }) => ({
    color: '#000000',
    margin: theme.spacing(2),
    fontSize: '5vw',
}));

export const SubTitleText = styled('h2')(({theme}) =>({
    color: '#000000',
    margin: theme.spacing(2),
    fontSize: '3.5vw',
}));

export const MainButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#303f9f',
    },
    margin: theme.spacing(2),
    borderRadius: '2px',
    fontSize: "2vw",
}));

export const SubButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#d60202',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#bf0202',
    },
    margin: theme.spacing(2),
    borderRadius: '2px',
    fontSize: "2vw",
}));

//Nav Components
// export const NavBar = styled(AppBar)(({ theme }) => ({
//     backgroundColor: '#f0f0f5',
//     borderBottom: '2px solid #000'
// }));

// export const NavLogo = styled('img')({
//     width: '20vw',
//     height: 'auto',
//     marginTop: '5px',
//     marginBottom: '5px',
// });

// export const NavPageTitleText = styled('h1')(({theme}) =>({
//     color: '#000000',
//     margin: theme.spacing(2),
//     fontSize: '3vw',
// }));

// export const NavButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#d3d3e8',
//     color: '#000000',
//     '&:hover': {
//         backgroundColor: '#303f9f',
//         color: '#ffffff',
//     },
//     margin: theme.spacing(2),
//     borderRadius: '12px',
//     boxShadow: '0px 4px 10px rgba(0,0,0,.1)',
//     width: '12%',
// }));



//Form and Inputs
// export const MainForm = styled('form')(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: theme.spacing(2),
// }));

// export const FormInput = styled('input')(({ theme }) => ({
//     padding: theme.spacing(1),
//     margin: theme.spacing(1),
//     width: '100%',
//     fontSize: '1.5vw',
// }));

//Chat Preview Componets
// export const ChatPreviewContainer = styled('div')(({ theme }) => ({
//     backgroundColor: '#ffffff',
//     borderRadius: '20px',
//     boxShadow: '0px 4px 10px rgba(0,0,0,.1)',
//     padding: theme.spacing(3),
//     margin: theme.spacing(1),
//     width: '70%',
// }));

// export const ChatName = styled('h3')(({ theme }) => ({
//     color: '#000000',
//     fontSize: '2.5vw',
// }));

// export const ChatMessage = styled('p')(({ theme }) => ({
//     color: '#000000',
//     fontSize: '2vw',
// }));

// export const ChatMessageButtonDivider = styled('div')(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%'
// }));  

  