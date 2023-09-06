import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import ChildCareIcon from '@mui/icons-material/ChildCare';

const NavBar = () => {
    return ( 
     <AppBar>
        <Toolbar className='contaierContainer'>

            

            <div className='logoContainer'>

                 <ChildCareIcon className='icon'  /> 

                <Typography sx={{ color: "black" }}>
                Little Love
                </Typography>
            </div>

            <div className='menuContainer'>
                <Button sx={{color: "black"}}>
                Inicio
                </Button>
                 <Button sx={{color: "black"}}>
                Tienda
                </Button>
                <Button sx={{color: "black"}}>
                Contacto
                </Button>
            </div>   
               
            <div className='cartContainer'>
        
                <CartWidget /> 

            </div> 

            
            
        </Toolbar>

     </AppBar>
       
       
    );
}

export default NavBar;