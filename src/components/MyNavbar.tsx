import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Container,
} from '@mui/material'

import { Store } from '@mui/icons-material'
import { StyledTypography } from '../shared'
import { useNavigate } from 'react-router-dom'

const pages = [
  { title: 'Главная', path: '/' },
  { title: 'Каталог', path: '/catalog' },
  { title: 'Корзина', path: '/basket' },
]

export const MyNavbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Store
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}
            fontSize="large"
          />
          <StyledTypography variant="h4" mr={5}>
            GapStore
          </StyledTypography>
          <Store sx={{ display: { xs: 'flex', md: 'none' }, mr: 4 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                href={page.path}
                sx={{ mx: 2, my: 4, color: 'white', display: 'block' }}
                onClick={(e: any) => {
                  e.preventDefault()
                  navigate(`${page.path}`)
                }}
              >
                <StyledTypography>{page.title}</StyledTypography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
