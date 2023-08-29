import React from 'react'
import { Heading } from '@aws-amplify/ui-react'
import ClutchCreateForm from '../../ui-components/ClutchCreateForm'

export const AddClutch = () => {

    return (
        <div>
            <Heading level={3}>
                Add Clutch
            </Heading>
            <ClutchCreateForm />
        </div>
    )
}