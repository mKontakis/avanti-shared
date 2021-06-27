import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardStyles from "./CardStyles";
import classNames from "classnames";
import {ContainerProps} from "../props/containerProps";

export interface CardProps extends ContainerProps {
    className?: string,
    plain?: boolean,
    profile?: boolean,
    blog?: boolean,
    raised?: boolean,
    background?: boolean,
    pricing?: boolean,
    testimonial?: boolean,
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose',
    product?: boolean,
}

const useStyles = makeStyles(CardStyles)

const Card = (props: CardProps) => {
    const {
        className = "",
        children,
        plain,
        profile,
        blog,
        raised,
        background,
        pricing,
        color = "primary",
        testimonial,
        ...rest
    } = props
    const classes = useStyles()
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile || testimonial,
        [classes.cardBlog]: blog,
        [classes.cardRaised]: raised,
        [classes.cardBackground]: background,
        [classes[color]]: color,
        [classes.cardPricing]: pricing,
        [className]: className !== undefined,
    })
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    )
}

export default Card
