import { Row, Col, Container,Button } from 'react-bootstrap';
import one from '../../assets/1st.png';
import clientName from '../../assets/clientname.png';
import membership from '../../assets/membership.png';
import national from '../../assets/national.png';
import clubs from '../../assets/clubs.png';

function main() {
  return (
    <>
    <div style={{backgroundColor: '#F5F7FA'}}>
    <Container
      style={{
        paddingTop: '20vh',
        paddingBottom: '10px'
      }}>
        <Row>
        <Col xs={6}>
          <p style={{fontWeight: 'bold',fontSize: '52px', color: '#4D4D4D'}}>Lessons and insights
          <p style={{fontWeight: 'bold', fontSize: '52px', color: '#4CAF4F'}}>from 8 years</p></p>
          <p style={{fontSize: '16px', color: '#717171'}}>Where to grow your business as a photographer: site or social media?</p>
          <Button style={{background: '#4CAF4F', paddingLeft: '20px', paddingRight: '20px', border: 'none'}}>Register</Button>
        </Col>
        <Col xs={6}>
          <img style={{marginTop: '-55px', marginLeft: '30px'}}
            alt=''
            src={one}
          />
        </Col>
        </Row>
    </Container>
    </div>

    <div style={{marginTop: '20px'}}>
    <Container>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{fontSize: '30px', fontWeight: 'bold', color: '#4D4D4D'}}>Our Client</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <p style={{fontSize: '16px', color: '#717171'}}>We have been working with some Fortune 500+ clients</p>
      </div>
      <div>
          <img style={{width: '170vh', height: '60px'}}
            alt=''
            src={clientName}
          />
      </div>
    </Container>
    </div>
    
    <div style={{marginTop: '20px'}}>
        <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bold', color: '#4D4D4D'}}>Manage your entire community </p>
        <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '30px', fontWeight: 'bold', color: '#4D4D4D', marginTop: '-20px'}}>in a single system</p>
        <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '16px', color: '#717171', marginTop: '-15px'}}>Who is Nexcent suitable for?</p>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Row style={{padding: '20px'}}> 
        <Col xs={6} md={4}>
          <div style={{ textAlign: 'center' }}>
          <img style={{width: '100px', height: '100px'}}
            alt=''
            src={membership}
          />
          </div>
          <p style={{fontWeight: 'bold', color: '#4D4D4D', fontSize: '30px',textAlign: 'center'}}>Membership <br/>Organisations</p>
          <p style={{fontSize: '16px',  color: '#717171', textAlign: 'center'}}>Our membership management software provides full automation of membership renewals and payments</p>
        </Col>
        <Col xs={6} md={4}>
          <div style={{ textAlign: 'center' }}>
          <img style={{width: '100px', height: '100px',}}
            alt=''
            src={national}
          />
          </div>
          <p style={{fontWeight: 'bold', color: '#4D4D4D',fontSize: '30px', textAlign: 'center'}}>National <br />Associations</p>
          <p style={{fontSize: '16px',  color: '#717171', textAlign: 'center'}}>Our membership management software provides full automation of membership renewals and payments</p>
        </Col>
        <Col xs={6} md={4}>
          <div style={{ textAlign: 'center' }}>
          <img style={{width: '100px', height: '100px',}}
            alt=''
            src={clubs}
          />
          </div>
          <p style={{fontWeight: 'bold', color: '#4D4D4D',fontSize: '30px', textAlign: 'center'}}>Clubs And <br/>Groups</p>
          <p style={{fontSize: '16px',  color: '#717171', textAlign: 'center'}}>Our membership management software provides full automation of membership renewals and payments</p>
        </Col>
        </Row>
        </div>
    </div>
    </>
  )
}

export default main