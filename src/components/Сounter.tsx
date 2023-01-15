import { Stack, Typography } from '@mui/material'
import { LocalHospital, IndeterminateCheckBox } from '@mui/icons-material'

import { TProduct } from '../types'
import { useSetRecoilState } from 'recoil'
import { productsState } from '../store'


type CounterProps = {
  product: TProduct
}

export const Сounter = ({ product }: CounterProps) => {
  const setProducts = useSetRecoilState(productsState)
  return (
    <Stack direction="row" sx={{ marginLeft: '40%' }}>
      <LocalHospital
        fontSize="large"
        onClick={() =>
          setProducts((prev) =>
            prev.map((el) =>
              el.id === product.id ? { ...el, number: el.number + 1 } : el
            )
          )
        }
      />
      <Typography variant={'h5'}>{product.number}</Typography>
      <IndeterminateCheckBox
        fontSize="large"
        onClick={() =>
          setProducts((prev) =>
            prev.map((el) =>
              el.id === product.id ? { ...el, number: el.number - 1 } : el
            )
          )
        }
      />
    </Stack>
  )
}
