import Stack from '@mui/material/Stack'
import { useRecoilValue } from 'recoil'
import { Typography } from '@mui/material'

import { Product } from './Product'
import { productsState } from '../store'


export const Basket = () => {
  const products = useRecoilValue(productsState)
  const basketList = products.filter((el) => el.number > 0)

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Stack
        marginTop={'50px'}
        height={'100px'}
        fontSize={'25px'}
        direction="row"
      >
        {' '}
        Общая стоимость:
        <Typography variant={'h4'} sx={{ marginLeft: '10px' }}>
          {Math.round(products.reduce((sum, el) => sum + el.price * el.number, 0))} USD
        </Typography>
      </Stack>
      <Stack spacing={5}>
        {' '}
        {basketList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Stack>
    </Stack>
  )
}
