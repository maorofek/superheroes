import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { selectLastSearches } from '../Store';


function SideBar() {
    const lastSearches: string[] = useSelector(selectLastSearches);
    return (
        <ul className="list-group">
            <a href="#" className="list-group-item list-group-item-black black">
                Last Searches
            </a>
            {lastSearches.map((search, i) => (
                <a href="#" className="list-group-item list-group-item-action list-group-item-light" key={i}>
                    {search}
                </a>
            ))}
        </ul>


        // <MDBCard>
        //     {lastSearches.map((search: string, i: number) => (
        //         <MDBCardBody key={i}>{search}</MDBCardBody>
        //     ))}
        // </MDBCard>
    );
}
export default SideBar;
