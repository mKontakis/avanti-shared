import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import cardHeaderStyles from "./CardHeaderStyles";
import {ContainerProps} from "../props/containerProps";

const useStyles = makeStyles(cardHeaderStyles)

type Color = 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose' | undefined
type CardHeaderColor = `${Color}CardHeader`

export interface CardHeaderProps extends ContainerProps {
  className?: string,
  color?: Color,
  plain?: boolean,
  image?: boolean,
  contact?: boolean,
  signup?: boolean,
  stats?: boolean,
  icon?: boolean,
  text?: boolean,
}

const CardHeader = (props: CardHeaderProps) => {
  const classes = useStyles()
  const { className = "", children, color = "primary", plain, image, contact, signup, stats, icon, text, ...rest } = props
  const cardHeaderColor: CardHeaderColor = `${color}CardHeader`

  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[cardHeaderColor]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [classes.cardHeaderText]: text,
    [className]: className !== undefined,
  })
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
};

export default CardHeader
