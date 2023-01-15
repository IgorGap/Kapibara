import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Stack } from '@mui/material'

import { Modal } from './Modal'
import { Product } from './Product'
import { TProduct } from '../types'
import { useRecoilState } from 'recoil'
import { productsState } from '../store'


export const Catalog = () => {
  const [loading, setLoading] = useState(true)
  const [isModal, setIsModal] = useState(false)
  const [products, setProducts] = useRecoilState(productsState)

  useEffect(() => {
    axios
      .get<TProduct[]>('https://fakestoreapi.com/products?limit=4')
      .then((response) => {
        setLoading(false)
        setProducts(response.data.map((el) => ({ ...el, number: 0 })))
      })
      .catch((err) => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading ? (
    <Box>
      <CircularProgress sx={{ display: 'flex', margin: '5% 0% 0 50%' }} />
    </Box>
  ) : (
    <Stack m={5} spacing={5} alignItems="center">
      <Button variant={'contained'} onClick={() => setIsModal(true)}>
        Добавить новый товар
      </Button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <Modal isModal={isModal} setIsModal={setIsModal} setLoading={setLoading}/>
    </Stack>
  )
}
