import { createMuiTheme } from '@material-ui/core/styles'
import { webbedsMUITheme } from '@webbeds/react/theme/mui-theme'

// Theme overrides for webbeds-ui MUI theme

const theme = createMuiTheme(webbedsMUITheme, {
  overrides: {
    MuiInputAdornment: {
      positionEnd: {
        marginLeft: 2,
        '& .MuiIconButton-root': {
          padding: 2
        }
      }
    }
  }
})

export default theme