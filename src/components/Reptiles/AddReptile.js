import React from 'react'
import { Heading } from '@aws-amplify/ui-react'
import ReptileCreateForm from '../../ui-components/ReptileCreateForm'
import { ReptilesList } from './ReptilesList'

export const AddReptile = () => {

    return (
        <div>
            <Heading level={3}>
                Add Reptile
            </Heading>
            <ReptileCreateForm />
        </div>
    )
}
