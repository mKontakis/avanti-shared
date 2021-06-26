import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import GridContainer, {GridContainerProps} from "../../../src/components/Grid/GridContainer";

describe('<GridContainer />', () => {
    it('renders the GridContainer component', () => {
        const props: GridContainerProps = {
            children: <p/>,
            className: ""
        }

        const component = render(<GridContainer {...props} justify="center"/>)

        expect(component).toBeTruthy()
    })

    it('Renders the GridContainer component with Default props', () => {

        const component = render(<GridContainer>
           <p>Test</p>
        </GridContainer>)

        expect(component).toBeTruthy()
    })
})
