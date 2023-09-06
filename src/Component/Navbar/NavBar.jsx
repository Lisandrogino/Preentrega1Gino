import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return ( 
     <AppBar>
        <Toolbar>

            <div>
                <Typography sx={{ color: "black" }}>
                Little Love
                </Typography>
            </div>

            <div>
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
                <CartWidget />
            <div>
        
                

            </div> 
            
        </Toolbar>

     </AppBar>
       
       
    );
}

export default NavBar;