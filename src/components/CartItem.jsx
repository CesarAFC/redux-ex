import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export function CartItem({data, deleteAllFromCart, deleteOneFromCart}) {
    let {id, name, price, description, quantity} = data;
    const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${price}.oo x {quantity}u = ${price*quantity}.oo 
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
      <Button size="small" onClick={() => deleteOneFromCart(id)}>
          Eliminar uno
          <ClearIcon sx={{fontSize: 'small' }}/>
        </Button>
      <Button size="small" onClick={() => deleteAllFromCart(id,true)}>
          Eliminar todos
          <ClearIcon sx={{fontSize: 'small' }}/>
        </Button>
      </CardActions>
    </Card>
  );
}