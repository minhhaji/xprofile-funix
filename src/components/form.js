import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Label, Col, Button} from 'reactstrap';
import { Control, Form, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

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
                <CardHeader className="bg-primary text-white"><h1>SƠ YẾU LÝ LỊCH</h1></CardHeader>
                <CardBody id='card'>
                <p>
            Bộ câu hỏi gồm: 4 phần và 21 câu, mất khoảng 15 phút của anh/chị.<br/>
            Cảm ơn anh/chị đã quan tâm tới chương trình đào tạo của ĐH FUNIX.<br/>
            Anh/chị vui lòng điền đầy đủ, chính xác tất cả các thông tin cá nhân để tiến hành các bước nhập học của nhà trường.
            </p>
            <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Not <strong>vinhdt@funix.edu.vn</strong>? <a href='#'>Switch account</a></p>
            <p>Any files that are upleaded will be shared outside of the organization they belong to.</p>
            <p className='text-danger'>* required</p>
            <Form model='form' onSubmit={(values) => this.handleSubmit(values)}>
            <div id='ttcn'><h3>I. THÔNG TIN CÁ NHÂN</h3>
                
                <div className="form-group">
                        <Label htmlFor="name" md={12}><h4>1. Họ và tên: <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),
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
                </div>
                <div className="form-group">
                        <Label htmlFor="birthday" md={12}><h4>2. Ngày tháng năm sinh: <span className='text-danger'>*</span></h4><small>Date</small></Label>
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
                </div>
                <div className='form-group'>
                        <Label htmlFor="sex" md={12}><h4>3. Giới tính: <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                        <Control.radio model=".sex" value="Male" validators={{
                                    required
                                }}/>Nam <br/>
                        <Control.radio model=".sex" value="Female" validators={{
                                    required
                                }}/>Nữ
                        <Errors
                                className="text-danger"
                                model=".sex"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />        
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="householdAddress" md={12}><h4>4. Địa chỉ hộ khẩu: <span className='text-danger'>*</span></h4><small>Vui lòng viết theo đúng thông tin trên sổ hộ khẩu thường trú</small></Label>
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
                </div>  
                <div className="form-group">
                        <Label htmlFor="address" md={12}><h4>5. Địa chỉ đang ở hiện tại: <span className='text-danger'>*</span></h4><small>Vui lòng viết chính xác thông tin để nhà trường gửi: thẻ SV, huy hiệu, giấy tờ,... về cho sinh viên </small></Label>
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
                </div>
                <div className="form-group">
                        <Label htmlFor="city" md={12}><h4>6. Thành phố đang ở hiện tại: <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                            <Control.text model=".city" id="city" name="city"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".city"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="nation" md={12}><h4>7. Quốc gia đang ở hiện tại: <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                            <Control.text model=".nation" id="nation" name="nation"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".nation"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="passportNum" md={12}><h4>8. Số chứng minh nhân dân/ hộ chiếu: <span className='text-danger'>*</span></h4><small>Chú ý: viết đúng các chữ số từ 0-9</small></Label>
                        <Col md={12}>
                            <Control.text model=".passportNum" id="passportNum" name="passportNum"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required, isNumber
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".passportNum"
                                show="touched"
                                messages={{
                                    required: 'Required! ', isNumber: 'must be digits form 0 to 9'
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="issuedDate" md={12}><h4>9. Ngày cấp: <span className='text-danger'>*</span></h4><small>Date</small></Label>
                        <Col md={12}>
                            <Control.text type='date' model=".issuedDate" id="issuedDate" name="issuedDate"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".issuedDate"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="issuedAddress" md={12}><h4>10. Nơi cấp: <span className='text-danger'>*</span></h4></Label>
                        <Col md={12}>
                            <Control.text model=".issuedAddress" id="issuedAddress" name="issuedAddress"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".issuedAddress"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="accface" md={12}><h4>11. Link Account Facebook <span className='text-danger'>*</span></h4><small>Ví dụ: <a href='https://www.facebook.com/vinh.doanthe'>https://www.facebook.com/vinh.doanthe</a></small></Label>
                        <Col md={12}>
                            <Control.text model=".accface" id="accface" name="accface"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".accface"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="job" md={12}><h4>12. Nghề nghiệp: </h4></Label>
                        <Col md={12}>
                            <Control.text model=".job" id="job" name="job"
                                placeholder="Your Answer"
                                className="form-control"
                                    />
                        </Col>
                </div></div>
                <div id='ttlhk'><h3>II. THÔNG TIN LIÊN HỆ KHÁC</h3>
                <Col><p>Trong trường hợp không thể liên hệ với anh/chị qua số điện thoại di động cá nhân, nhà trường có thể liên hệ với ai? Anh chị vui lòng cung cấp số điện thoại, tên, mối quan hệ,... ví dụ: Nguyễn Văn A-Bố-0</p></Col>
                <div className="form-group">
                        <Label htmlFor="nameRelative" md={12}><h4>1. Họ và tên: </h4></Label>
                        <Col md={12}>
                            <Control.text model=".nameRelative" id="nameRelative" name="nameRelative"
                                placeholder="Your Answer"
                                className="form-control"
                                    />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="relationship" md={12}><h4>2. Mối quan hệ: </h4></Label>
                        <Col md={12}>
                            <Control.text model=".relationship" id="relationship" name="relationship"
                                placeholder="Your Answer"
                                className="form-control"
                                    />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="phonenum" md={12}><h4>3. Số điện thoại: </h4><small>Chú ý: viết liền các chữ số từ 0-9, không có kí tự đặc biệt. Định dạng: Mã nướcxxxxxxxx. Ví dụ: Việt Nam: +84xxxxxxxx</small></Label>
                        <Col md={12}>
                            <Control.text model=".phonenum" id="phonenum" name="phonenum"
                                placeholder="Your Answer"
                                className="form-control"
                                validators={{
                                    isNumber
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".phonenum"
                                show="touched"
                                messages={{
                                    isNumber: 'must be digits form 0 to 9'
                                }}
                                />
                        </Col>
                </div></div>
                <div id='ldtg'><h3>III. LÝ DO THAM GIA HỌC TẠI FUNIX</h3>
                <Col><p>Anh/chị vui lòng thể hiện chi tiết về nhu cầu, kế hoạch, mục tiêu, động cơ học tập của mình</p></Col>
                <div className="form-group">
                        <Label htmlFor="reason" md={12}><h4>1. Tại sao bạn quyết định học Công nghệ thông tin và lựa chọn FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ thông tin khoảng 5-10 dòng</small></Label>
                        <Col md={12}>
                            <Control.textarea model=".reason" id="reason" name="reason"
                                placeholder="Your Answer"
                                className="form-control"
                                rows='5'
                                validators={{
                                    required, minLength: minLength(150),
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".reason"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be 150 or more',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="target" md={12}><h4>2. Mục tiêu của bạn sau khi học tại FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ thông tin khoảng 5-10 dòng</small></Label>
                        <Col md={12}>
                            <Control.textarea model=".target" id="target" name="target"
                                placeholder="Your Answer"
                                className="form-control"
                                rows='5'
                                validators={{
                                    required, minLength: minLength(150),
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".target"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 150 characters',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label htmlFor="opinion" md={12}><h4>3. Ý kiến của bạn muốn chia sẽ với FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ mong muốn, nguyện vọng hoặc các câu hỏi dành cho FUNIX, khoảng 5-10 dòng</small></Label>
                        <Col md={12}>
                            <Control.textarea model=".opinion" id="opinion" name="opinion"
                                placeholder="Your Answer"
                                className="form-control"
                                rows='5'
                                validators={{
                                    required, minLength: minLength(150),
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".opinion"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 150 characters',
                                }}
                                />
                        </Col>
                </div></div>
                <div id='cpt'><h3>IV. HOÀN THIỆN HỒ SƠ</h3>
                <Col><p>Anh/chị vui lòng hoàn thiện giấy tờ để nhà trường lập hồ sơ sinh viên của anh/chị</p></Col>
                <div className="form-group">
                        <Label md={12}><h4>1. Ảnh 3X4 <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng scan rõ nét, chụp trên nền trắng hoặc xanh dương, tên file ảnh là tên đầy đủ của sinh viên</small></Label>
                        <Col md={12}>
                            <Control.file model=".photo" id="photo" name="photo"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".photo"
                                show="touched"
                                messages={{
                                    required: 'Required! '
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label md={12}><h4>2. CMND/ Hộ chiếu/ Giấy khai sinh<span className='text-danger'>*</span></h4><small>1 bản scan/chụp ảnh CMND 2 mặt hoặc chộ chiếu. Với các sinh viên chưa đủ tuổi làm CMND vui lòng gửi giấy khai sinh.</small></Label>
                        <Col md={12}>
                            <Control.file model=".passportPhoto" id="passportPhoto" name="passportPhoto"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".passportPhoto"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                }}
                                />
                        </Col>
                </div>
                <div className="form-group">
                        <Label md={12}><h4>3. Bằng tốt nghiệp THPT/bằng cấp cao nhất đã có </h4><small>Với anh/chị đã tốt nghiệp THPT có nhu cầu lấy bằng Đại học. Anh/chị vui lòng nộp 1 bản scan/chụp ảnh Bằng tốt nghiệp THPT hoặc bằng cấp cao nhất đã có (có thể nộp Giấy chứng nhận tốt nghiệp tạm thời và bổ sung sau khi có Bằng).</small></Label>
                        <Col md={12}>
                            <Control.file model=".target" id="target" name="target"
                                className="form-control"
                                    />
                        </Col>
                </div></div>
                <div className="form-group">
                                    <Col>
                                        <Button type="submit" className="btn btn-primary btn-block">
                                        Submit 
                                        </Button>
                                    </Col>
                </div>
                </Form>
                </CardBody>
            </Card>
            </div>
        </div>
        )
    }
};
export default Background;