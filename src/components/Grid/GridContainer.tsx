
import {createStyles, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import {ContainerProps} from "../props/containerProps";

const styles = createStyles({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
})

export interface GridContainerProps extends ContainerProps {}

const useStyles = makeStyles(styles)

const GridContainer = (props: GridContainerProps) => {
  const {children, className, ...rest} = props
  const classes = useStyles()
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  )
};

export default GridContainer
