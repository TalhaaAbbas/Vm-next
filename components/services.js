import Image from 'next/image'
import VideoImg from '../images/video.png';
import BlogImg from '../images/blog-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TabContainer, Row, Col, Nav, TabContent, TabPane,  NavLink, NavItem, Sonnet } from 'react-bootstrap';

export default function Services() { 
  return (
    <div className=''>
      <div>
      {/* <!-- services section --> */}
        <section>
            <div class="services-section">
              <div class="services-inner">
                <div class="title-wrap">
                    <h3 class="title">Our Services</h3>
                </div>
                <div class="images-tab-wrapper">
                  <TabContainer id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={5} md={5} lg={3} xl={3} className="no-p">
                        <Nav variant="pills" className="flex-column nav">
                          <NavItem>
                            <NavLink className="nav-link" eventKey="first">
                              <span class="">01</span>
                              <p>Videography</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink className="nav-link" eventKey="second">
                              <span class="">02</span>
                              <p>Photography</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="third">
                              <span class="">03</span>
                              <p>Virtual 3D tours</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="fourth">
                              <span class="">04</span>
                              <p>Virtual staging</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="fifth">
                              <span class="">05</span>
                              <p>Property sites</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="sixth">
                              <span class="">06</span>
                              <p>Brochures</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="seventh">
                              <span class="">07</span>
                              <p>Floor plans</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" eventKey="eight">
                              <span class="">08</span>
                              <p>Agent marketing</p>
                              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col sm={7} md={7} lg={9} xl={9} className="no-p">
                        <TabContent className="tab-content">
                          <TabPane className="tab-pane" eventKey="first">
                            <div className="tab-img">
                              <Image className="img" src={VideoImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="second">
                            <div className="tab-img">
                              <Image src={BlogImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="third">
                            <div className="tab-img">
                              <Image src={VideoImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="fourth">
                            <div className="tab-img">
                              <Image src={BlogImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="fifth">
                            <div className="tab-img">
                              <Image src={VideoImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="sixth">
                            <div className="tab-img">
                              <Image src={BlogImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="seventh">
                            <div className="tab-img">
                              <Image src={VideoImg} alt="service Image" />
                            </div>
                          </TabPane>
                          <TabPane className="tab-pane" eventKey="eight">
                            <div className="tab-img">
                              <Image src={BlogImg} alt="service Image" />
                            </div>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </TabContainer>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}
