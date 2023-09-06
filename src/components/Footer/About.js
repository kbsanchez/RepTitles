import React from 'react'
import Footer from './Footer'
import { 
    Heading, 
    Grid, 
    useTheme, 
    Card, 
    Text,
    Expander,
    ExpanderItem } from '@aws-amplify/ui-react'
import { GiReptileTail } from 'react-icons/gi'
import './Footer.css'

export function About() {
    const { tokens } = useTheme();

    return (
        <div className='about-container'
        minHeight='fit-content'>
            <Grid
            templateColumns={{ base: '1fr', large: '1fr 1fr' }}
            templateRows={{ base: 'repeat(4, 17rem)', large: 'repeat(3, 17rem)' }}
            gap={tokens.space.small}>
                <Heading
                level={2}
                fontWeight='bold'
                columnSpan={[1, 1, 1, 2]}>
                    <GiReptileTail />
                    <br/>
                    About Us
                    <Text 
                    fontWeight='medium' 
                    fontSize='large' 
                    padding='4vh'>
                        Our mission is simple: to empower reptile enthusiasts and breeders with the tools they need to succeed. We believe that every reptile deserves the best care and attention, and that begins with effective management.                    </Text>
                </Heading>

                <Card
                rowSpan={{ base: 1, large: 2 }}
                backgroundColor='black'
                display='flex'
                alignItems='center'
                justifyContent='center'
                paddingBottom='2vh'>
                    <a href='https://www.tampasnakes.com/why-our-snakes/' target='_blank' rel='noreferrer noopener'>
                        <img className='about-card-logo' src='https://www.tampasnakes.com/wp-content/uploads/2021/05/Logo_Black-Resized2.png' alt='Tampa Snakes Logo' />
                    </a>

                </Card>

                <div className='faq-container'>
                    <Heading level={4} marginBottom='2vh'>
                        Frequently Asked Questions
                    </Heading>
                    <Expander type='multiple'>
                        <ExpanderItem title='Why choose RepTitles?' value='faq-1'>
                            It offers efficient tools for uploading, managing, and generating reptile-related documents, making it easier for breeders to organize and track their reptiles.
                        </ExpanderItem>
                        <ExpanderItem title='Can I generate PDFs of my documents?' value='faq-2'>
                            Absolutely! RepTitles allows you to generate PDFs of your reptile documents with just a click. You can then download, print, or share these PDFs as needed.
                        </ExpanderItem>
                        <ExpanderItem title='Is my data secure on RepTitles?' value='faq-3'>
                            Yes, we take data security seriously. RepTitles uses robust security measures to protect your data. We also offer user authentication and access controls to ensure your information is only accessible to authorized users.
                        </ExpanderItem>
                    </Expander>
                </div>
            </Grid>

            <Footer/>
        </div>
    )
}
