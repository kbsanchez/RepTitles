import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import * as queries from '../../graphql/queries'
import { 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody,
    CheckboxField,
    SelectField,
    Button,
    SearchField } from '@aws-amplify/ui-react'

export const ReptilesList = () => {

    const [reptiles, setReptiles] = useState([]);
    const [action, setAction] = useState("");
    const [checkedReptiles, setCheckedReptiles] = useState([]);
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        fetchReptiles();
    }, []);

    const fetchReptiles = async () => {
        try {
            const reptileData = await API.graphql({query: queries.listReptiles, authMode: "AMAZON_COGNITO_USER_POOLS"});
            const reptileList = reptileData.data.listReptiles.items;
            console.log('reptile list', reptileList);
            setReptiles(reptileList);
        } catch (error) {
            console.log('error on fetching reptiles', error);
        }
    };

    const handleCheckAll = (e) => {
        setCheckAll(!checkAll);
        setCheckedReptiles(reptiles.map(reptile => reptile.id));
        if (checkAll) {
            setCheckedReptiles([]);
        }
    };

    const handleCheck = (e) => {
        const { reptile, checked } = e.target;
        setCheckedReptiles([...checkedReptiles, reptile.id]);
        if (!checked) {
        setCheckedReptiles(checkedReptiles.filter(item => item !== reptile.id));
        }
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
                    <SelectField 
                    label="Actions"
                    labelHidden
                    placeholder="Actions"
                    value={action}
                    style={{float: 'right', marginRight: '1vh'}}
                    onChange={(e) => setAction(e.target.value)}>
                        <option value="MultiDelete">Delete selected reptile(s)</option>
                        <option value="DownloadSelected" disabled>Download selected reptiles (.csv)</option>
                        <option value="DownloadAll" disabled>Download all reptiles (.csv)</option>
                    </SelectField>
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
                                onChange={handleCheck}
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
