
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Row, Col } from 'react-bootstrap';
export default function ContactForm() {
  return (
    <div className="">
        <div class="contact-form-wrap">
            <div class="contact-form-inner">
                <div class="title">
                    <h2>Getin Touch</h2>
                </div>
                <div class="contact-form">
                <Form>
                    <div class="form-box">
                        <Row>
                            <Col sm={12} lg={12} md={12}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@email.com" />
                                    <Form.Text className="text-muted d-none">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={6} md={6}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicFname">
                                    <Form.Label>FIRST NAME</Form.Label>
                                    <Form.Control type="text" placeholder="John" />
                                    <Form.Text className="text-muted d-none">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={6} md={6}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicLname">
                                    <Form.Label>LAST NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Doe" />
                                    <Form.Text className="text-muted d-none">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={12} md={12}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicCompany">
                                    <Form.Label>COMPANY</Form.Label>
                                    <Form.Control type="text" placeholder="Real Estat Services" />
                                    <Form.Text className="text-muted d-none">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={12} md={12}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} type="text" placeholder="Additional Description" />
                                    <Form.Text className="text-muted d-none">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={12} md={12}>
                                <div className="form-submit-btn">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
                    {/* <form action="">
                        <div class="form-box">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" placeholder="name@email.com" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                    <div class="form-group">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" placeholder="John" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                    <div class="form-group">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" placeholder="Doe" />
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                    <div class="form-group">
                                        <label for="company">Company</label>
                                        <input type="text" id="company" placeholder="Real Estate Services" />
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                    <div class="form-group">
                                        <label for="message">MESSAGE</label>
                                        <textarea type="text" id="message" placeholder="Additional Details"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                    <div class="form-submit-btn">
                                        <input type="submit" value="Get In Touch" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    </div>
  )
}

