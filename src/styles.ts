import {
    blackColor,
    dangerColor,
    infoColor,
    primaryColor,
    roseColor,
    successColor,
    warningColor,
    whiteColor
} from "./colors";
import {hexToRgb} from "@material-ui/core/styles";

const boxShadow = {
    boxShadow:
        `0 10px 30px -12px rgba(${
            hexToRgb(blackColor)
        }, 0.42), 0 4px 25px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 8px 10px -5px rgba(${
            hexToRgb(blackColor)
        }, 0.2)`,
}
const primaryBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(primaryColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(primaryColor[0])
        }, 0.2)`,
}
const infoBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(infoColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(infoColor[0])
        }, 0.2)`,
}
const successBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(successColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(successColor[0])
        }, 0.2)`,
}
const warningBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(warningColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(warningColor[0])
        }, 0.2)`,
}
const dangerBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(dangerColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(dangerColor[0])
        }, 0.2)`,
}
const roseBoxShadow = {
    boxShadow:
        `0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.14), 0 7px 10px -5px rgba(${
            hexToRgb(roseColor[0])
        }, 0.4)`,
}

const warningCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  warningColor[1]  }, ${  warningColor[2]  })`,
    ...warningBoxShadow,
}
const successCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  successColor[1]  }, ${  successColor[2]  })`,
    ...successBoxShadow,
}
const dangerCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  dangerColor[1]  }, ${  dangerColor[2]  })`,
    ...dangerBoxShadow,
}
const infoCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  infoColor[1]  }, ${  infoColor[2]  })`,
    ...infoBoxShadow,
}
const primaryCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  primaryColor[1]  }, ${  primaryColor[2]  })`,
    ...primaryBoxShadow,
}
const roseCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  roseColor[1]  }, ${  roseColor[2]  })`,
    ...roseBoxShadow,
}

export {
    // variables
    boxShadow,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    whiteColor,
    blackColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    hexToRgb,
}
