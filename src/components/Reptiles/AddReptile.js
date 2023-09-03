import React, { useState } from 'react'
import { Heading } from '@aws-amplify/ui-react'
import ReptileCreateForm from '../../ui-components/ReptileCreateForm'

export const AddReptile = () => {
    const [reptile, setReptile] = useState()

    return (
        <div>
            <Heading level={3}>
                Add Reptile
            </Heading>
            <ReptileCreateForm 
                onSubmit={(fields) => {
                    const updatedFields = {}
                    Object.keys(fields).forEach(key => {
                        updatedFields[key] = fields[key]
                    })
                    return updatedFields
                }}
                onError={(error) => {
                    console.log(error)
                }}/>
        </div>
    )
}
