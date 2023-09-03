import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import * as queries from '../../graphql/queries'
import { 
    Heading, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody } from '@aws-amplify/ui-react'

export const ReptilesList = () => {

    const [reptiles, setReptiles] = useState([]);

    useEffect(() => {
        fetchReptiles();
    }, []);

    const fetchReptiles = async () => {
        try {
            const reptileData = await API.graphql({query: queries.listReptiles, authMode: "AMAZON_COGNITO_USER_POOLS"})
            const reptileList = reptileData.data.listReptiles.items
            console.log('reptile list', reptileList)
            setReptiles(reptileList)
        } catch (error) {
            console.log('error on fetching reptiles', error)
        }
    };

    return (
        <div>
            <Heading level={3}>
                Reptiles List
            </Heading>
            <Table highlightOnHover={true} variation="bordered">
                <TableHead>
                    <TableRow>
                        <TableCell as="th">
                            Type
                        </TableCell>
                        <TableCell as="th">
                            Species
                        </TableCell>
                        <TableCell as="th">
                            Alias
                        </TableCell>
                        <TableCell as="th">
                            Sex
                        </TableCell>
                        <TableCell as="th">
                            Hatch Date
                        </TableCell>
                        <TableCell as="th">
                            Breeder
                        </TableCell>
                        <TableCell as="th">
                            Clutch ID
                        </TableCell>
                        <TableCell as="th">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reptiles.map((reptile, index) => {
                        try {return(<TableRow key={index}>
                            <TableCell>{reptile.typeOfReptile || ""}</TableCell>
                            <TableCell>{reptile.species || ""}</TableCell>
                            <TableCell>{reptile.alias || ""}</TableCell>
                            <TableCell>{reptile.sex || ""}</TableCell>
                            <TableCell>{reptile.hatchDate || ""}</TableCell>
                            <TableCell>{reptile.breederName || ""}</TableCell>
                            <TableCell>{reptile.clutchID || ""}</TableCell>
                            <TableCell>Placeholder</TableCell>
                        </TableRow>)
                        } catch (error) {
                            console.log('error on displaying reptiles', error)
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
