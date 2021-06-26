import React from "react";

type GridContainerProps = {
    children: React.ReactNode,
    className: String
} & typeof defaultProps

const defaultProps = {
    className: '',
}

export {
    GridContainerProps
}
