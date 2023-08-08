import { Button, Typography } from '@mui/material'
import React from 'react'

const SquareButton = ({icon, label}) => {
  return (
    <Button
        variant='contained'
        sx={{
            minWidth: "auto",
            padding: "4px 10px",
            boxShadow: "0px 3px 6px -2px rgba(0,0,0,0.2), -1px 2px 13px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.12)"
        }}
    >
        {icon}
        {
          label && (
            <Typography>{label}</Typography>
          )
        }
    </Button>
  )
}

export default SquareButton