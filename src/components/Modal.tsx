import {
  Box,
  Button,
  // CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

import { TProduct } from '../types'
import { productsState } from '../store'
import { useSetRecoilState } from 'recoil'
import productData from '../utils/product.json'


type ModalProps = {
  isModal: boolean
  setIsModal: (value: boolean) => void
  setLoading: (value: boolean) => void
}

export const Modal = ({ isModal, setIsModal, setLoading}: ModalProps) => {
  const [title, setTitle] = useState('')
  const setProducts = useSetRecoilState(productsState)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsModal(false)
    productData.title = title
    setLoading(true)
    const response = await axios.post<TProduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    const product = {
      ...response.data, number:0
    }
    setProducts((prev) => [...prev, product])
    setLoading(false)
    
  }

  return (
      <Dialog  open={isModal} onClose={() => setIsModal(false)}>
        <DialogContent>
          <DialogContentText sx={{width:'700px',display: 'flex', flexDirection: 'column' }}>
            <Box sx={{alignSelf: 'center',width:'450px', height:"70px" }}>
              <TextField
                type="text"
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setTitle(e.target.value)}
                placeholder="Введите название продукта..."
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            component={'label'}
            variant={'contained'}
            disabled={!title.trim()}
          >
            Создать
          </Button>
        </DialogActions>
      </Dialog>
  )
}
