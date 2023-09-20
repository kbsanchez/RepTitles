import React, { useState } from 'react'
import {
    View,
    Heading,
    Text,
    Image,
    Button,
    Divider } from '@aws-amplify/ui-react'
import { Storage } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

const ViewReptile = ({ reptile, onClose }) => {
    const image = async () => {
        await Storage.get(reptile.image)
    }
    return (
    <View>
        <Heading level={2}>{`${reptile.alias}'s details` || 'N/A'}</Heading>
        <Divider />
        <Text>
            <strong>Classification: </strong>{reptile.typeOfReptile || 'N/A'}
            &emsp;<strong>Species: </strong> {reptile.species || 'N/A'}
            <br />
            <strong>Sex: </strong>{reptile.sex || 'N/A'}
            &emsp;<strong>Hatch Date: </strong>{reptile.hatchDate || 'N/A'}
        </Text>
        <Image
        alt={`Image of ${reptile.alias}` || 'Image of reptile'}
        src={image}
        accessLevel="protected"
        fallbackSrc="../../assets/RepTitles.png"
        onStorageGetError={(error) => console.error(error)}
        />
        <Text>
            <strong>Breeder: </strong>{reptile.breederName || 'N/A'} &emsp; {reptile.breederEmail || 'N/A'}
            <br />
            <br />
            <strong>Additional Notes: </strong>{reptile.notes || 'N/A'}
        </Text>
        <Divider />
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Button 
            variation='menu'
            onClick={onClose}>Go Back</Button>
            <div style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: '0'}}>
            <Button
            variation='destructive'>Delete</Button>
            <Button
            variation='warning'>Update</Button>
            </div>
            
        </div>
    </View>
    );
};

export default ViewReptile;
    