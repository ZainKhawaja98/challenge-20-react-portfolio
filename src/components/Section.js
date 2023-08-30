import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  container: {
    background: 'linear-gradient(20deg,dodgerblue,green,silver)',
  },
  colstyles: {
    display: 'flex',
    padding: '25px',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  photo: {
    display: 'flex',
    borderRadius: 30,
    border:'solid 7.5px black',
    width: 'auto',
    maxHeight: '500px',
    minHeight: '250px',
    minWidth: '250px'    
  },
  pstyles: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'medium',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadow: '1px 1px 5px white',
    padding: '15px',
    minHeight:'400px',
    overflowY: 'auto'
  },
  pcontainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'solid 7.5px black',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(45deg, dodgerblue, white, green)',
    width: 'auto',
    maxHeight: '500px', 
    minHeight: '250px',
    minWidth: '250px'  
  },
  row1:{
    height: 'auto'
  },
  title:{
    fontFamily: 'palatino',
    color: 'black',
    textShadow: '2px 2px 3px white',
  },
  title2:{
    marginBottom: '30px',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
      <Row style={styles.row1}>
        <Col md={1}></Col>
       <Col md={5} style={styles.colstyles} className='mb-1'>
        <center>
          <h3 style={styles.title} className='mt-2'><strong>Full-Stack Software Developer</strong></h3>
        </center>
       <img src={require('../images/myself.jpg')} className='img-fluid mx-4 mt-1' alt='Myself' style={styles.photo}/>
       <center><h4 style={styles.title} className='mt-2'>~ A photo of myself ~</h4></center>
       </Col>
       <Col md={5} style={styles.colstyles}>
        <style>
          {`
            ::-webkit-scrollbar{
              display: none;
            }
          `}
        </style>
        <section style={styles.pcontainer} className='mx-4 mt-5'>
          <div style={styles.pstyles}>
          <h3 style={styles.title2}><em>⭐ ~A little about myself~ ⭐</em></h3>
           <p>   
            Type a description of yourself here
           </p>
          </div>
        </section>
       </Col>
       <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default Section;