import {render} from "@testing-library/react";
import Card from "components/Card/Card";
import React from "react";


describe('<Card />', () => {
    it('renders the Card component', () => {

        const component = render(<Card>
            <p/>
        </Card>)

        expect(component).toBeTruthy()
    })
})
