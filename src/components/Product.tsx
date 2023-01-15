import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { useLocation } from 'react-router-dom'

import { Сounter } from './Сounter'
import { TProduct } from '../types'
import { productsState } from '../store'

type ProductProps = {
  product: TProduct
}

export const Product = ({ product }: ProductProps) => {
  const location = useLocation()
  const setProducts = useSetRecoilState(productsState)

  return (
    <Card sx={{ width: '400px', height: '400px', border: 4 }}>
      <CardMedia
        width={'50%'}
        height={'50%'}
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ width: '200px', height: '200px', margin: '10px 0px 0px 90px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        {location.pathname !== '/basket' ? (
          <Button
            variant={'contained'}
            onClick={() =>
              setProducts((prev) =>
                prev.map((el) =>
                  el.id === product.id ? { ...el, number: el.number + 1 } : el
                )
              )
            }
            size="small"
            sx={{ display: 'flex', marginLeft: '26%' }}
          >
            Добавить в корзину
          </Button>
        ) : (
          <Сounter product={product} />
        )}
      </CardActions>
    </Card>
  )
}
