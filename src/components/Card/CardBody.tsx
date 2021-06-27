import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import cardBodyStyles from "./CardBodyStyles";
import {ContainerProps} from "../props/containerProps";


const useStyles = makeStyles(cardBodyStyles)

export interface CardBodyStyles extends ContainerProps {
  className?: string,
  background?: boolean,
  plain?: boolean,
  formHorizontal?: boolean,
  pricing?: boolean,
  signup?: boolean,
  color?: boolean,
}

const CardBody = (props: CardBodyStyles) => {
  const { className = "", children, background, plain, formHorizontal, pricing, signup, color, ...rest } = props
  const classes = useStyles()
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined,
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
};
export default CardBody
