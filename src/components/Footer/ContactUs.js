import React from 'react'
import { 
    Heading,
    Grid,
    useTheme,
    Text,
    Card,
    Button,
    TextField,
    SelectField,
    TextAreaField
 } from '@aws-amplify/ui-react'
 import Footer from './Footer'
 import './Footer.css'

export function ContactUs() {
    const { tokens } = useTheme();

    return (
        <div className='contact-us-container'>
            <Heading level={3}>
                Contact Us
            </Heading>
            <Grid
            templateColumns={{ base: '1fr', large: '1fr 1fr' }}
            templateRows={{ base: 'repeat(4, 10rem)', large: 'repeat(3, 10rem)' }}
            gap={tokens.space.small}
            paddingTop='6vh'>
                <Card
                rowSpan={{ base: 1, large: 2 }}
                borderRadius='xl'
                display='flex'
                style={{flexDirection: 'column'}}
                alignItems='center'
                justifyContent='center'>
                    <Heading level={4}>
                        We want to hear from you!
                    </Heading>
                    <Text
                    padding='xl'>
                        Placeholder text
                    </Text>
                </Card>
                <Card
                rowSpan={{ base: 1, large: 2 }}
                borderRadius='xl'
                display='flex'
                style={{flexDirection: 'column'}}
                alignItems='center'
                justifyContent='center'>
                    <form>
                        <div className='full-name'
                        style={{display: 'flex', flexDirection: 'row'}}>
                        <TextField placeholder='First Name'
                        size='large'
                        marginRight='1vw' />
                        <TextField placeholder='Last Name'
                        size='large'
                        marginLeft='1vw' />
                        </div>
                        <TextField placeholder='email@email.com'
                        size='large' />
                        <SelectField placeholder='Category' 
                        options={['Business Inquiry', 'Feature request', 'Troubleshooting', 'General']} 
                        size='large' />
                        <TextAreaField placeholder='Message Contents'
                        size='large' />
                        <Button variation='primary'
                        size='large'
                        margin='2vh'>
                            Send Message
                        </Button>
                    </form>
                </Card>
            </Grid>

            <Footer />
        </div>
    )
}
