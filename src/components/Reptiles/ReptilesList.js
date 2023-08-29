import React, { useState, useEffect } from 'react'
import { 
    Heading, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody } from '@aws-amplify/ui-react'

export const ReptilesList = () => {

    return (
        <div>
            <Heading level={3}>
                Reptiles List
            </Heading>
            <Table highlightOnHover={true} variation="bordered">
                <TableHead>
                    <TableRow>
                        <TableCell as="th">
                            #
                        </TableCell>
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
            </Table>
        </div>
    )
}
