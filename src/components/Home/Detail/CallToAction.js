import React from 'react'
import { Heading, Text, Button } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'

export default function CallToAction() {
    const navigate = useNavigate();

    return (
        <div className='call-to-action-container'>
            <Heading
            level={3}
            color='white'>
                Unleash the Full Potential of <strong>RepTitles</strong>
            </Heading>
            <Text
            color='white'
            margin='2vh'>
                Join our community of reptile enthusiasts and breeders by creating your free RepTitles account today. With your account, you'll gain access to powerful tools for managing your reptiles and their documents, streamlining your reptile-related tasks, and ensuring you're always one step ahead.            
            </Text>
            <Button 
            variation='primary'
            marginTop='2vh'
            onClick={() => navigate('/login')}>
                Get Started Now
            </Button>
        </div>
    )
}
