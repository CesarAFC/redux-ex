import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container, Typography } from '@mui/material';

export function CartDrawer({children}) {
  const [toggle, setToggle] = React.useState(false);

  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggle(open);
  };


  return (
    <div>
        <React.Fragment key={'right'}>
          <Button variant='outlined' onClick={toggleDrawer(true)}>Cart<ShoppingCartOutlinedIcon/></Button>
          <Drawer
            anchor={'right'}
            open={toggle}
            onClose={toggleDrawer(false)}
          >
            <Container sx={{backgroundColor: '#1a1a1a', minHeight:'100vh', minWidth: 350}}>
                <Typography variant='h4'>Cart</Typography>
                {children}
            </Container>
          </Drawer>
        </React.Fragment>
    </div>
  );
}