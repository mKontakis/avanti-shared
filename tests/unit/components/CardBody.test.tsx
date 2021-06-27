import {render} from "@testing-library/react";
import CardBody from "../../../src/components/Card/CardBody";
import React from "react";

describe('<CardBody />', () => {
    it('renders the CardHeader component', () => {

        const component = render(<CardBody>
            <p/>
        </CardBody>)

        expect(component).toBeTruthy()
    })
})
