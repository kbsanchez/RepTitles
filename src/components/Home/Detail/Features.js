import React from 'react'
import { Heading, Grid, Card, Text } from '@aws-amplify/ui-react'
import * as IconsAi from 'react-icons/ai'
import * as IconsGi from 'react-icons/gi'
import * as IconsPi from 'react-icons/pi'
import * as IconsSl from 'react-icons/sl'
import * as IconsBs from 'react-icons/bs'
import * as IconsMd from 'react-icons/md'
import { FeatureData } from './FeatureData'

const Features = () => {
    return (
        <div className='features-container' id='features'>
            <Heading 
            level={3} 
            color='white'
            paddingTop='3vh'
            paddingBottom='3vh'
            >
                Features that Scale With You
            </Heading>
            <Grid className='features-grid'
            templateColumns={{base: "1fr", large: "1fr 1fr"}}
            templateRows="10rem 10rem">
                {FeatureData.map((items, key) => (
                    <Card 
                    key={key}
                    variation="outlined"
                    backgroundColor='black'
                    margin='2vh'
                    display='flex'
                    flexDirection='flex-row'
                    alignItems='center'>
                        <DynamicIcon name={items.icon} />
                        <div>
                            <Heading 
                            level={5}
                            color='white'>
                                {items.title}
                            </Heading>
                            <Text
                            color='white'
                            paddingTop='1vh'
                            paddingBottom='1vh'
                            paddingInline='1vh'>
                                {items.desc}
                            </Text>
                        </div>
                        
                    </Card>
                ))}
            </Grid>

        </div>
    );
};

const DynamicIcon = ({ name }) => {
    switch (name.slice(0, 2)) {
        case 'Gi':
            const IconGi = IconsGi[name]
            return <IconGi color='white' size='75px' />
        case 'Pi':
            const IconPi = IconsPi[name]
            return <IconPi color='white' size='75px' />
        case 'Sl':
            const IconSl = IconsSl[name]
            return <IconSl color='white' size='75px' />
        case 'Bs':
            const IconBs = IconsBs[name]
            return <IconBs color='white' size='75px' />
        case 'Md':
            const IconMd = IconsMd[name]
            return <IconMd color='white' size='75px' />
        default:
            return <IconsAi.AiOutlinePlusSquare color='white' size='75px' />;    
    }
    
};

export default Features;