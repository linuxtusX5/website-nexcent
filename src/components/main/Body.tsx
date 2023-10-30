import { Row, Col, Container,Button, Form } from 'react-bootstrap';
import one from '../../assets/1st.png';
import clientName from '../../assets/clientname.png';
import membership from '../../assets/membership.png';
import national from '../../assets/national.png';
import clubs from '../../assets/clubs.png';
import two from '../../assets/2nd.png';
import mems from '../../assets/mems.png'; 
import clubs2 from '../../assets/clubs2.png';
import pay from '../../assets/pay.png';
import booking from '../../assets/booking.png';
import design from '../../assets/design.png';
import footer from '../../assets/footer.png';
import social from '../../assets/social.png';

import { AiOutlineArrowRight } from "react-icons/ai";

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
          <Button style={{background: '#4CAF4F', padding: '12px', paddingLeft: '20px', paddingRight: '20px', border: 'none'}}>Register</Button>
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

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <hr style={{width: '100px'}}/>
        </div>

        <div style={{marginTop: '50px'}}>
        <Row style={{padding: '20px'}}> 
          <Col>
          <div style={{ textAlign: 'center' }}>
            <img
              alt=''
              src={two}
            />
          </div>
          </Col>
          <Col>
            <p style={{fontWeight: 'bold', color: '#4D4D4D',fontSize: '30px'}}>The unseen of spending three <br/> years at Pixelgrade</p>
            <p style={{fontSize: '16px',  color: '#717171'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet 
            risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <Button style={{background: '#4CAF4F', padding: '15px',paddingLeft: '20px', paddingRight: '20px', border: 'none'}}>Learn More</Button>
          </Col>
        </Row>
        </div>

        
        <div style={{marginTop: '50px', backgroundColor: '#F5F7FA', paddingTop: '50px'}}>
          <Row  style={{ paddingLeft: '20vh',paddingRight: '10vh'}}>
            <Col xs={6}>
                <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>Helping a local
                <p style={{fontWeight: 'bold', fontSize: '30px', color: '#4CAF4F'}}>business reinvent itself</p></p>
                <p style={{fontSize: '16px', color: '#717171'}}>We reached here with our hard work and dedication</p>
            </Col>
            
        <Col xs={6}>
          <Row>
            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              alt=''
              src={mems}
            />
            <div  style={{textAlign: 'center'}}>
              <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>2,245,341</p>
              <p style={{fontSize: '16px', color: '#717171', marginTop: '-20px'}}>Members</p>
            </div>
            </Col>
            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              alt=''
              src={clubs2}
            />
            <div  style={{textAlign: 'center'}}>
              <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>46,328</p>
              <p style={{fontSize: '16px', color: '#717171', marginTop: '-20px'}}>Clubs</p>
            </div>
            </Col>
          </Row>
            <Row>
              <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              alt=''
              src={booking}
            />
            <div  style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>828,867</p>
                <p style={{fontSize: '16px', color: '#717171', marginTop: '-20px'}}>Event Bookings</p>
            </div>
              </Col>
              <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              alt=''
              src={pay}
            />
            <div  style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>1,926,436</p>
                <p style={{fontSize: '16px', color: '#717171', marginTop: '-20px'}}>Payments</p>
            </div>
              </Col>
            </Row>
          </Col>
          </Row>
        </div>

        <div style={{marginTop: '80px'}}>
          <Row style={{textAlign: 'center', paddingLeft: '20vh',paddingRight: '10vh'}}>
            <Col style={{textAlign: 'left', marginTop: '-30px'}}>
              <img src={design} alt="" />
            </Col>
            <Col style={{textAlign: 'left'}}>
              <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>How to design your site footer like<br/> we did</p>
              <p style={{fontSize: '16px', color: '#717171'}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque 
                elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi 
                facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur 
                quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <Button style={{background: '#4CAF4F', padding: '15px',paddingLeft: '20px', paddingRight: '20px', border: 'none'}}>Learn More</Button>
            </Col>
          </Row>
        </div>
        
        <div style={{marginTop: '50px', backgroundColor: '#F5F7FA', paddingTop: '50px', paddingBottom: '50px',textAlign: 'center'}}>
          <p style={{fontWeight: 'bold',fontSize: '30px', color: '#4D4D4D'}}>Caring is the new marketing</p>
              <Button style={{background: '#4CAF4F', padding: '15px',paddingLeft: '20px', paddingRight: '20px', border: 'none'}}>Get a Demo <AiOutlineArrowRight/></Button>
        </div>

        <div style={{background: '#263238', color: '#fff',textAlign: 'center', paddingTop: '10vh', paddingBottom: '10vh'}}>
          <Row>
            <Col style={{fontWeight: 400}}>
              <img src={footer} alt="" />
              <p>Copyright © 2023.</p>
              <p>All rights reserved</p>
              <img src={social} alt="" />
            </Col>
            <Col style={{fontWeight: 400, textAlign: 'left', paddingLeft: '40vh'}}>
              <p style={{fontSize: '25px', fontWeight: 600}}>Company</p>
              <p style={{paddingTop: '20px'}}>About</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </Col>
            <Col style={{fontWeight: 400, textAlign: 'left'}}>
              <p style={{fontSize: '25px', fontWeight: 600}}>Support</p>
              <p style={{paddingTop: '20px'}}>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privcy policy</p>
              <p>Status</p>
            </Col>
            <Col style={{fontWeight: 400, textAlign: 'left', paddingRight: '50px'}}>
              <p style={{fontSize: '25px', fontWeight: 600}}>Stay up to date</p>
                <Form.Control
                className="p-3"
                style={{backgroundColor: '#4D4D4D', border: 'none', borderRadius: '10px'}} type="email" placeholder="name@example.com" />
            </Col>
          </Row>
        </div>
    </div>
    </>
  )
}

export default main