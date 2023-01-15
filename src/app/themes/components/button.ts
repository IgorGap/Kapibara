import { Components, Theme } from "@mui/material";

export default {
  styleOverrides : {
    root: ({theme}) => ({
      ':hover, :focus' : {
        color: 'black',
      }
      }
    )
  }
} as Components<Theme>['MuiButton']
