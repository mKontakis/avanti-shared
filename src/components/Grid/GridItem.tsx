import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {GridContainerProps} from "../props/containerProps";
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

type GridItemProps = GridContainerProps

const useStyles = makeStyles(styles)

export default function GridItem(props: GridItemProps) {
  const { children, className, ...rest } = props
  const classes = useStyles()
  return (
    <Grid item {...rest} className={`${classes.grid  } ${  className}`}>
      {children}
    </Grid>
  )
}
