import React, {Component} from 'react';
import {Col, Button} from 'reactstrap';

class IV extends Component {
    constructor(props){
        super(props);
        this.state=  {
            photo: null,
            passportPhoto: null,
            degree: null,
            formErrors: {},
            photoValid: false,
            passportPhotoValid: false,
            degreeValid: true,
            formValid: false,
        }
        this.submitPage = this.submitPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this)
    }
    submitPage(){
        this.refs.ref1.focus();this.refs.ref1.blur()
        this.refs.ref2.focus();this.refs.ref2.blur()
        if(this.state.formValid) {
            this.nextPage();
        }
    }
    nextPage() {
        this.props.nextPage();
        this.props.submit();
    };
    prevPage() {
        this.props.prevPage();
    }
    handleUserInput = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;
        this.setState({[name]: file}, () => { this.validateField(name, file) });
    }
    validateField(fieldName, file) {
        let fieldValidationErrors = this.state.formErrors;
        let photoValid = this.state.photoValid;
        let passportPhotoValid = this.state.passportPhotoValid;
        let degreeValid = this.state.degreeValid;
        switch(fieldName) {
        case 'photo':
            photoValid = file && file.size <= 31457280;
            fieldValidationErrors.photoValid = photoValid ? '' : 'File ảnh dung lượng không quá 30Mb!';
            break;
        case 'passportPhoto':
            passportPhotoValid = file && file.size <= 31457280;
            fieldValidationErrors.passportPhotoValid = passportPhotoValid ? '' : 'Trình bày mục tiêu của bạn không quá 2000 ký tự!';
            break;
        case 'degree':
            degreeValid = file = 'null' ? true : file.size <= 31457280;
            fieldValidationErrors.degreeValid = degreeValid ? '' : 'Chia sẽ ý kiến của bạn không quá 2000 ký tự!';
            break;
          default:
            break;
        }
    this.setState({formErrors: fieldValidationErrors,
                    photoValid: photoValid,
                    passportPhotoValid: passportPhotoValid,
                    degreeValid: degreeValid       
                    }, this.validateForm);
    }
    validateForm() {
    this.setState({formValid: this.state.photoValid && this.state.passportPhotoValid 
                                && this.state.degreeValid });
    }
    render(){
        if (this.props.isPage !== 4) {
            return(
                <div></div>
            )
        }
        return(
            <div id='IV'><h3>IV. HOÀN THIỆN HỒ SƠ</h3>
            <Col><p>Anh/chị vui lòng hoàn thiện giấy tờ để nhà trường lập hồ sơ sinh viên của anh/chị</p></Col>
            <div className="form-group">
                    <label><h4>1. Ảnh 3X4 <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng scan rõ nét, chụp trên nền trắng hoặc xanh dương, tên file ảnh là tên đầy đủ của sinh viên</small></label>
                        <input type='file' id="photo" name="photo" accept="image/png, image/jpeg, image/pdf" required ref='ref1'
                            files={this.state.photo}
                            className="form-control"
                            onChange={this.handleUserInput}
                            onBlur={this.handleUserInput}/>
                            <p className='text-danger'>{this.state.formErrors.photoValid}</p>
            </div>
            <div className="form-group">
                    <label md={12}><h4>2. CMND/ Hộ chiếu/ Giấy khai sinh<span className='text-danger'>*</span></h4><small>1 bản scan/chụp ảnh CMND 2 mặt hoặc chộ chiếu. Với các sinh viên chưa đủ tuổi làm CMND vui lòng gửi giấy khai sinh.</small></label>
                        <input type='file' id="passportPhoto" name="passportPhoto" accept="image/png, image/jpeg, image/pdf" required ref='ref2'
                            className="form-control"
                            onChange={this.handleUserInput}
                            onBlur={this.handleUserInput}/>
                            <p className='text-danger'>{this.state.formErrors.passportPhotoValid}</p>
            </div>
            <div className="form-group">
                    <label md={12}><h4>3. Bằng tốt nghiệp THPT/bằng cấp cao nhất đã có </h4><small>Với anh/chị đã tốt nghiệp THPT có nhu cầu lấy bằng Đại học. Anh/chị vui lòng nộp 1 bản scan/chụp ảnh Bằng tốt nghiệp THPT hoặc bằng cấp cao nhất đã có (có thể nộp Giấy chứng nhận tốt nghiệp tạm thời và bổ sung sau khi có Bằng).</small></label>
                        <input type='file' id="degree" name="degree" accept="image/png, image/jpeg, image/pdf"
                            className="form-control"
                            onChange={this.handleUserInput}
                            onBlur={this.handleUserInput}/>
                            <p className='text-danger'>{this.state.formErrors.degreeValid}</p>
            </div>
            <div className='form-group row'>
                <Col md={6}><Button className='mx-auto d-block btn-warning' onClick={this.prevPage}>
                    Quay lại
                </Button></Col>
                <Col md={6}>
                    <Button type='submit' className='mx-auto d-block btn-info' onClick={this.submitPage}>
                    Hoàn thành
                    </Button>
                </Col>
            </div>
            </div>
        )
    }
}
export default IV;