import Link from 'next/dist/client/link'
import { Form } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Button} from 'react-bootstrap'

export default function Register() {
  return (
    <div className=''>
      <div>
        <div class="auth-portal-wrap">
            <div class="auth-portal-inner">
                <div class="auth-portal-form-wrap" data-aos="fade-up" data-aos-duration="1500">
                    <div class="title">
                        <h2>Sign Up</h2>
                        <p>
                            <Link href="/login">
                                <a>Already have an account?</a>
                            </Link>
                        </p>
                    </div>
                    <div class="auth-form-box">
                        <Form>
                            <Row>
                                <Col sm={12} lg={6} md={6}>
                                    <Form.Group className="mb-3 form-group" controlId="formRegFName">
                                        <Form.Label>FIRST NAME</Form.Label>
                                        <Form.Control type="text" placeholder="John" />
                                        <Form.Text className="text-muted d-none">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={6} md={6}>
                                    <Form.Group className="mb-3 form-group" controlId="formRegLName">
                                        <Form.Label>LAST NAME</Form.Label>
                                        <Form.Control type="text" placeholder="Doe" />
                                        <Form.Text className="text-muted d-none">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={12} md={12}>
                                    <Form.Group className="mb-3 form-group" controlId="formRegMail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@email.com" />
                                        <Form.Text className="text-muted d-none">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={12} md={12}>
                                    <Form.Group className="mb-3 form-group" controlId="formRegPass">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="**********" />
                                        <Form.Text className="text-muted d-none">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={12} md={12}>
                                    <Form.Group className="mb-3 form-group" controlId="formRegRepPass">
                                        <Form.Label>REPEAT PASSWORD</Form.Label>
                                        <Form.Control type="password" placeholder="**********" />
                                        <Form.Text className="text-muted d-none">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={12} md={12}>
                                    <div class="submit-button">
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
