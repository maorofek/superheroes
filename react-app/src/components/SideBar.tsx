import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { selectLastSearches } from '../Store';


function SideBar() {
    const lastSearches: string[] = useSelector(selectLastSearches);
    return (
        <MDBCard>
            {lastSearches.map((search: string, i: number) => (
                <MDBCardBody key={i}>{search}</MDBCardBody>
            ))}
        </MDBCard>
    );
}
export default SideBar;
