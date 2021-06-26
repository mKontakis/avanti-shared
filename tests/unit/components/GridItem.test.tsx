import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import GridItem, {GridItemProps} from "../../../src/components/Grid/GridItem";

describe('<GridItem />', () => {
    it('renders the GridItem component', () => {
        const props: GridItemProps = {
            children: <p/>,
            className: ""
        }

        const component = render(<GridItem {...props} />)

        expect(component).toBeTruthy()
    })
})
