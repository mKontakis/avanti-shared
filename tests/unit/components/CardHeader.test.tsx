import {render} from "@testing-library/react";
import React from "react";
import CardHeader from "components/Card/CardHeader"


describe('<CardHeader />', () => {
    it('renders the CardHeader component', () => {

        const component = render(<CardHeader>
            <p/>
        </CardHeader>)

        expect(component).toBeTruthy()
    })
})
