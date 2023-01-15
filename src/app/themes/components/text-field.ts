import { Components, Theme } from "@mui/material";

export default {
  styleOverrides : {
    root: ({theme}) => ({
      borderColor: theme.palette.primary.light,
      ':hover, :focus' : {
        borderColor: theme.palette.primary.dark,
      },
      width: '300px'
    })
  }
} as Components<Theme>['MuiTextField']
