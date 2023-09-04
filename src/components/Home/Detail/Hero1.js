import React from 'react'
import { Heading, Text, Button } from '@aws-amplify/ui-react'
import '../Home.css'

export default function Hero1() {
    return (
        <div className='hero-container'>
            <div className='hero-message'>
                <Heading className='hero-message-heading' 
                level='4'
                textAlign='center'
                marginBlock='4vh'>
                    Your Reptile Empire, Elevated
                </Heading>
                <Text className='hero-message-text'
                variation="primary"
                as="p"
                marginBlock='5vh'
                lineHeight="1.5em"
                fontWeight={500}
                fontSize="1em"
                fontStyle="normal"
                textDecoration="none"
                textAlign='center'>
                    Unleash the power of efficiency and organization with RepTitles, the ultimate web application crafted exclusively for reptile breeders and purchasers.
                </Text>
                <Button 
                variation='primary'
                marginBlock='2vh'>
                    Learn More
                </Button>
            </div>
            <div className='hero-image' />
        </div>
    )
}
