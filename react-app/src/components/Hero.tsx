import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';



function App() {
    return (
        <MDBCard>
            <MDBCardBody>ID</MDBCardBody>
            <MDBCardBody>Name</MDBCardBody>
            <MDBCardBody>fullName</MDBCardBody>
            {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> */}
        </MDBCard>
    );
}

export default App;