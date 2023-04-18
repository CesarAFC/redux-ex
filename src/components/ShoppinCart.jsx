import { Alert, Box, Button, Container, Snackbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, closeAlert, deleteFromCart } from '../actions/shoppingActions';
import { CartDrawer } from './CartDrawer';
import { CartItem } from './CartItem';
import BasicCard from './ProductItemMUI';

const ShoppinCart = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {products, cart, alert} = state.shopping;

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Typography variant="h4">Carrito de compras con Redux</Typography>
        <CartDrawer>
          <Button size="small" onClick={() => dispatch(clearCart())}>
            Limpiar Carrito
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              py: 2,
              justifyContent: "center",
            }}
          >
            {cart.map((item, index) => (
              <CartItem
                key={index}
                data={item}
                deleteAllFromCart={() =>
                  dispatch(deleteFromCart(item.id, true))
                }
                deleteOneFromCart={() => dispatch(deleteFromCart(item.id))}
              />
            ))}
          </Box>
        </CartDrawer>
      </Box>
      <Typography variant="h5">Productos</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          py: 2,
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <BasicCard
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </Box>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => dispatch(closeAlert())}
      >
        <Alert onClose={() => dispatch(closeAlert())} severity="success" sx={{ width: "100%" }}>
          OK!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ShoppinCart