import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations';
import { 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody,
    CheckboxField,
    Menu,
    MenuButton,
    MenuItem,
    Button,
    SearchField } from '@aws-amplify/ui-react'

export const ReptilesList = () => {

    const [reptiles, setReptiles] = useState([]);
    const [checkedReptiles, setCheckedReptiles] = useState([]);
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        fetchReptiles();
    }, []);

    useEffect(() => {
        console.log('checked reptiles: ', checkedReptiles);
    }, [checkedReptiles]);

    const fetchReptiles = async () => {
        try {
            const reptileData = await API.graphql({query: queries.listReptiles, filter: {type: {notContains: "_deleted"}}, authMode: "AMAZON_COGNITO_USER_POOLS"});
            const reptileList = reptileData.data.listReptiles.items;
            console.log('reptile list', reptileList);
            setReptiles(reptileList);
        } catch (error) {
            console.log('error on fetching reptiles', error);
        }
    };

    const handleDelete = async () => {
        try {
          // Check if there are selected reptiles to delete
          if (checkedReptiles.length > 0) {
            // Loop through the selected reptiles and delete them one by one
            for (const reptileId of checkedReptiles) {
              await API.graphql({
                query: mutations.deleteReptile,
                variables: { input: { id: reptileId } },
                authMode: 'AMAZON_COGNITO_USER_POOLS',
              });
            }
            // After deleting, fetch the updated list of reptiles
            fetchReptiles();
            // Clear the checkedReptiles array
            setCheckedReptiles([]);
          }
        } catch (error) {
          console.error('Error deleting reptiles', error);
        }
      };

    const handleCheckAll = (e) => {
        setCheckAll(!checkAll);
        setCheckedReptiles(reptiles.map(reptile => reptile.id));
        if (checkAll) {
            setCheckedReptiles([]);
        }
    };

    const handleCheck = (reptileId) => {
        const updatedCheckedReptiles = [...checkedReptiles];
    
        if (updatedCheckedReptiles.includes(reptileId)) {
            // If the reptile is already in the checkedReptiles, uncheck it
            updatedCheckedReptiles.splice(updatedCheckedReptiles.indexOf(reptileId), 1);
        } else {
            // If the reptile is not in the checkedReptiles, check it
            updatedCheckedReptiles.push(reptileId);
        }
    
        setCheckedReptiles(updatedCheckedReptiles);
    };

    return (
        <div style={{width: '95%', flexDirection: 'column', margin: 'auto'}}>
            <div className='reptile-list-toolbar' style={{flexDirection: 'row'}}>
                <div
                style={{maxWidth: '300px', width: '20%', float: 'left', display: 'flex', marginBottom: '2vh', marginTop: '3vh', flexDirection: 'row', marginRight: '2vh'}}>
                    <SearchField
                    label="Search"
                    placeholder="Search for a reptile..."
                    size="small"
                    variation="quiet"
                    hasSearchButton={false}
                    hasSearchIcon={true}
                    isDisabled={true}
                    />
                </div>
                <div
                style={{maxWidth: '300px', float: 'right', display: 'flex', marginBottom: '2vh', marginTop: '2vh', flexDirection: 'row'}}>
                    <Menu
                        trigger={
                            <MenuButton variation="link" size="small">
                                Actions
                            </MenuButton> }
                    >
                        <MenuItem onClick={handleDelete}>Delete selected reptile(s)</MenuItem>
                        <MenuItem disabled>Download selected reptiles (.csv)</MenuItem>
                        <MenuItem disabled>Download all reptiles (.csv)</MenuItem>
                    </Menu> 

                    <Button 
                    variation="primary"
                    style={{float: 'right', minWidth: '50%', marginLeft: '1vh'}}>
                        Add Reptile
                    </Button>
                </div>
            </div>
            
            <Table 
            highlightOnHover={true} 
            variation="bordered">
                <TableHead>
                    <TableRow>
                        <TableCell as="th"
                        style={{width: '5px'}}>
                            <CheckboxField 
                            checked={checkAll}
                            onChange={handleCheckAll} />
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reptiles.map((reptile, index) => {
                        try {return(<TableRow key={index}>
                            <TableCell>
                                <CheckboxField
                                checked={checkedReptiles.includes(reptile.id)}
                                onChange={() => handleCheck(reptile.id)}
                                 />
                            </TableCell>
                            <TableCell>{reptile.typeOfReptile || ""}</TableCell>
                            <TableCell>{reptile.species || ""}</TableCell>
                            <TableCell>{reptile.alias || ""}</TableCell>
                            <TableCell>{(reptile.sex === "MALE" ? "M" : (reptile.sex === "FEMALE" ? "F": reptile.sex === "UNKNOWN" ? "?" : "" ))}</TableCell>
                            <TableCell>{reptile.hatchDate || ""}</TableCell>
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
