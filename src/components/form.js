import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Label, Row, Col, Button} from 'reactstrap';
import { Control, Form, Errors, Field } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Background extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
    }
    render() {
        return(
        <div className='container'>
            <div id='form' className='text-left mx-auto d-block'>
            <Card>
                <CardHeader className="bg-info text-white"><h1>SƠ YẾU LÝ LỊCH</h1></CardHeader>
                <CardBody className='bg-light'>
                <p>
            Bộ câu hỏi gồm: 4 phần và 21 câu, mất khoảng 15 phút của anh/chị.<br/>
            Cảm ơn anh/chị đã quan tâm tới chương trình đào tạo của ĐH FUNIX.<br/>
            Anh/chị vui lòng điền đầy đủ, chính xác tất cả các thông tin cá nhân để tiến hành các bước nhập học của nhà trường.
            </p>
            <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Not <strong>vinhdt@funix.edu.vn</strong>? <a href='#'>Switch account</a></p>
            <p>Any files that are upleaded will be shared outside of the organization they belong to.</p>
            <p className='text-danger'>* required</p>
            <Form model='form' onSubmit={(values) => this.handleSubmit(values)}>
                <h3>I. Thông tin cá nhân</h3>
                <Row className="form-group">
                        <Label htmlFor="name" md={12}><h4>Họ và tên <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3)
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 2 characters',
                                }}
                                />
                        </Col>
                </Row>
                <Row className="form-group">
                        <Label htmlFor="birthday" md={12}><h4>Ngày tháng năm sinh <span className='text-danger'>*</span></h4><small>date</small></Label>
                        <Col md={12}>
                            <Control.text type='date' model=".birthday" id="birthday" name="birthday"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".birthday"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </Row>
                <div className='form-group'><Label htmlFor="sex"><h4>Giới tính <span className='text-danger'>*</span></h4></Label>
                        <div >
                        <Control.radio model=".sex" value="Male" />Nam <br/>
                        <Control.radio model=".sex" value="Female" />Nữ
                        </div>
                </div>
                <Row className="form-group">
                        <Label htmlFor="householdAddress" md={12}><h4>Địa chỉ hộ khẩu <span className='text-danger'>*</span></h4><small>Vui lòng viết theo đúng thông tin trên sổ hộ khẩu thường trú</small></Label>
                        <Col md={12}>
                            <Control.text model=".householdAddress" id="householdAddress" name="householdAddress"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".householdAddress"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </Row>  
                <Row className="form-group">
                        <Label htmlFor="address" md={12}><h4>Địa chỉ đang ở hiện tại <span className='text-danger'>*</span></h4><small>Vui lòng viết chính xác thông tin để nhà trường gửi: thẻ SV, huy hiệu, giấy tờ,... về cho sinh viên </small></Label>
                        <Col md={12}>
                            <Control.text model=".address" id="address" name="address"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".address"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </Row>        
                </Form>
                </CardBody>
            </Card>
            </div>
        </div>
        )
    }
};
export default Background;