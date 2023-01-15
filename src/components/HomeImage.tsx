import { Box, Stack } from '@mui/material'


export const HomeImage = () => {
  return (
    <Stack direction={'column'} justifyContent="center" alignItems="center">
      <Box>
        <img
          src={'https://freelance.ru/img/portfolio/pics/00/37/47/3622754.jpg'}
          alt={'title'}
          loading="lazy"
          style={{ borderRadius: '10%', marginTop: '15%', height:'600px'}}
        />
      </Box>
    </Stack>
  )
}
