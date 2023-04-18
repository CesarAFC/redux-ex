import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BasicCard({data, addToCart}) {
    let {id, name, price, description} = data;
    const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${price}.oo
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small" onClick={() => addToCart(id)}>
          Agregar 
          <AddShoppingCartIcon sx={{fontSize: 'small' }}/>
        </Button>
      </CardActions>
    </Card>
  );
}