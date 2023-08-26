import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{backgroundColor:"black",width:"106%"}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Babyfarm.info@gmail.com
              </p>
              
          </MDBCol>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/profile.php?id=61550100891555'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/Babyfarminfo'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
            
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://t.me/babyfarmtoken'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='telegram' />
            
          </MDBBtn>
          
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/babyfarm.info/'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          BabyFarm.com
        </a>
      </div>
    </MDBFooter>
  );
}