import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {ContainerProps} from "../props/containerProps";
import { createStyles } from "@material-ui/core";

const styles = createStyles({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    /* flexBasis: "auto" */
  },
})

export interface GridItemProps extends ContainerProps {}

const useStyles = makeStyles(styles)

export default function GridItem({ children, className = "", ...rest }: GridItemProps) {
  const classes = useStyles()

  return (
    <Grid item {...rest} className={`${classes.grid  } ${  className}`}>
      {children}
    </Grid>
  )
}
