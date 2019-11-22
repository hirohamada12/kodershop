/**
 *  About Us Page
 */
import React, { Component } from 'react';
import AboutBanner2 from '../../widgets/AboutBanner2';
import InterestingFacts from '../../widgets/InterestingFacts';
import OurTeam from '../../widgets/OurTeam';
import PageTitle from '../../widgets/PageTitle';
import { Row, Col,Container } from 'reactstrap';

const ourteam = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]

};

class Aboutus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="site-content">
                <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <div className="row intro-title align-items-center intro-section-center">
                            <PageTitle title="Về Chúng Tôi"/>
                        </div>
                    </Container>
                </div>
                <div className="content-wrapper">
                    <AboutBanner2 />
                    <InterestingFacts />
                    <div className="section-wrapper section-ptb">
                        <Container>
                            <Row className="justify-content-center">
                                <Col sm={12} lg={7}>
                                    <div className="section-title text-center">
                                        <h2 className="title">Về Chúng tôi</h2>
                                        <p className="text-center">Khám phá bộ sưu tập tốt nhất cho mùa thu của stylist Art. Thật quyến rũ, hiện đại và
                                            đam mê, bạn chắc chắn yêu thích bộ sưu tập này.</p>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <OurTeam settings={ourteam} />
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aboutus;
