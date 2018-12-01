import React, {Component} from "react";
import { Button, Col } from 'reactstrap';
import {FormErrors} from './FormErrors';
import TextareaAutosize from 'react-autosize-textarea';

class I extends Component {
    constructor(props){
        super(props);
        this.state=  {
            userName: '',
            birthday: '',
            sex: 'male',
            householdAddress: '',
            address: '',
            city: '',
            nation: '',
            passportNum:'',
            issuedDate: '',
            issuedAddress: '',
            accface: '',
            job: '',
            formErrors: {},
            userNameValid: false,
            birthdayValid: false,
            hhAddrValid: false,
            addressValid: false,
            cityValid: false,
            nationValid: false,
            passportNumValid: false,
            issuedDateValid: false,
            issuedAddressValid: false,
            accfaceValid: false,
            jobValid: true,
            formValid: false
        }
        this.nextPage = this.nextPage.bind(this);
        /* this.handleUserInput = this.handleUserInput.bind(this);
        in order to 'post' :))
        */
    }

    nextPage() {
        
        this.props.nextPage();
        /* and here
        let inf = this.state
        this.props.postForm(inf.userName, inf.birthday, inf.sex, inf.householdAddress, inf.address, inf.city, inf.nation, inf.passportNum, inf.issuedDate, inf.issuedAddress, inf.accface, inf.job);
    */
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let birthdayValid = this.state.birthdayValid;
        let hhAddrValid = this.state.hhAddrValid;
        let addressValid = this.state.addressValid;
        let cityValid = this.state.cityValid;
        let nationValid = this.state.nationValid;
        let passportNumValid = this.state.passportNumValid;
        let issuedDateValid = this.state.issuedDateValid;
        let issuedAddressValid = this.state.issuedAddressValid;
        let accfaceValid = this.state.accfaceValid;
        let jobValid = this.state.jobValid;
        switch(fieldName) {
        case 'userName':
            userNameValid = value && value.length && value.length<= 50;
            fieldValidationErrors.userNameValid = userNameValid ? '' : 'Họ tên không được để trống và không quá 50 ký tự!';
            break;
        case 'birthday':
            birthdayValid = value && value.length;
            fieldValidationErrors.birthdayValid = birthdayValid ? '': 'Ngày sinh không được bỏ trống!';
            break;
        case 'householdAddress':
            hhAddrValid = value && value.length && value.length <= 500;
            fieldValidationErrors.hhAddrValid = hhAddrValid ? '' : 'Địa chỉ hộ khẩu không được để trống và không quá 500 ký tự!';
            break;
        case 'address':
            addressValid = value && value.length && value.length <= 500;
            fieldValidationErrors.addressValid = addressValid ? '' : 'Địa chỉ hiện tại không được để trống và không quá 500 ký tự!';
            break;
        case 'city':
            cityValid = value && value.length && value.length <= 500;
            fieldValidationErrors.cityValid = cityValid ? '' : 'Thành phố đang ở hiện tại không được để trống và không quá 500 ký tự!';
            break;
        case 'nation':
            nationValid = value && value.length && value.length <= 500;
            fieldValidationErrors.nationValid = nationValid ? '' : 'Quốc gia đang ở hiện tại không được để trống và không quá 500 ký tự!';
            break;
        case 'passportNum':
            passportNumValid = value && value.length && !isNaN(Number(value));
            fieldValidationErrors.passportNumValid = passportNumValid ? '' : 'Số chứng minh nhân dân/ hộ chiếu phải là các chữ số từ 0-9';
            break;
        case 'issuedDate':
            issuedDateValid = value && value.length;
            fieldValidationErrors.issuedDateValid = issuedDateValid ? '' : 'Ngày cấp không được bỏ trống!';
            break;
        case 'issuedAddress':
            issuedAddressValid = value && value.length && value.length <= 500;
            fieldValidationErrors.issuedAddressValid = issuedAddressValid ? '' : 'Nơi cấp không được để trống và không quá 500 ký tự!';
            break;
        case 'accface':
            accfaceValid = value && value.length && value.length <= 500;
            fieldValidationErrors.accfaceValid = accfaceValid ? '' : 'Link Account Facebook không được để trống và không quá 500 ký tự!';
            break;
        case 'job':
            jobValid = value.length <= 500;
            fieldValidationErrors.jobValid = jobValid ? '' : 'Trình bày về công việv không được để trống và không quá 500 ký tự!';
            break;
          default:
            break;
        }
    this.setState({formErrors: fieldValidationErrors,
                    userNameValid: userNameValid,
                    birthdayValid: birthdayValid,
                    hhAddrValid: hhAddrValid,
                    addressValid: addressValid,
                    cityValid: cityValid,
                    nationValid: nationValid,
                    passportNumValid: passportNumValid,
                    issuedDateValid: issuedDateValid,
                    issuedAddressValid: issuedAddressValid,
                    accfaceValid: accfaceValid,
                    jobValid: jobValid
                    }, this.validateForm);
    }
      
    validateForm() {
    this.setState({formValid: this.state.userNameValid && this.state.birthdayValid
                            && this.state.hhAddrValid
                            && this.state.addressValid
                            && this.state.cityValid
                            && this.state.nationValid
                            && this.state.passportNumValid
                            && this.state.issuedDateValid
                            && this.state.issuedAddressValid
                            && this.state.accfaceValid
                            && this.state.jobValid});
    }
    render() {
        if (this.props.isPage !== 1) {
            return(
                <div></div>
            )
        }
        return(
        <div>
            <p>
            Bộ câu hỏi gồm: 4 phần và 21 câu, mất khoảng 15 phút của anh/chị.<br/>
            Cảm ơn anh/chị đã quan tâm tới chương trình đào tạo của ĐH FUNIX.<br/>
            Anh/chị vui lòng điền đầy đủ, chính xác tất cả các thông tin cá nhân để tiến hành các bước nhập học của nhà trường.
            </p>
            <p className='text-danger'>* required (Thông tin bắt buộc phải điền để tiếp tục)</p>
            <h3>I. THÔNG TIN CÁ NHÂN</h3>
            <div className="form-group">
                <label htmlFor="userName" md={12}><h4>1. Họ và tên: <span className='text-danger'>*</span></h4></label>
                    <input type='text' id="userName" name="userName" placeholder="Your Answer" className="form-control" value={this.state.userName}
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                <p className='text-danger'>{this.state.formErrors.userNameValid}</p>
            </div>
            
            <div className="form-group">
                <label htmlFor="birthday"><h4>2. Ngày tháng năm sinh: <span className='text-danger'>*</span></h4><small>Date</small></label>
                    <input type='date' id="birthday" name="birthday" className="form-control" value={this.state.birthday} required
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                <p className='text-danger'>{this.state.formErrors.birthdayValid}</p>
            </div>
            <div className='form-group'>
            <label><h4>3. Giới tính: <span className='text-danger'>*</span></h4></label>
            <div>
                <Col md={6}>
                <label>
                    <input name="sex" type="radio" value="male" defaultChecked onClick={this.handleUserInput}/>{' '} Nam
                </label>
                </Col>
                <Col md={6}>
                <label>
                    <input name="sex" type="radio" value="female" onClick={this.handleUserInput}/>{' '} Nữ
                </label>
                </Col>
            </div>
            </div>
            <div className='form-group'>
                <label htmlFor="householdAddress"><h4>4. Ðịa chỉ hộ khẩu: <span className='text-danger'>*</span></h4><small>Vui lòng viết theo dúng thông tin trên sổ hộ khẩu thường trú</small></label>
                    <TextareaAutosize id="householdAddress" name="householdAddress" placeholder="Your Answer" className='form-control'
                        value={this.state.householdAddress} 
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}
                        required/>
                    <p className='text-danger'>{this.state.formErrors.hhAddrValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="address" md={12}><h4>5. Ðịa chỉ đang ở hiện tại: <span className='text-danger'>*</span></h4><small>Vui lòng viết chính xác thông tin để nhà trường gửi: thẻ SV, huy hiệu, giấy tờ,... về cho sinh viên </small></label>
                    <TextareaAutosize id="address" name="address" placeholder="Your Answer" className="form-control"
                    value={this.state.address} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                <p className='text-danger'>{this.state.formErrors.addressValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="city" md={12}><h4>6. Thành phố đang ở hiện tại: <span className='text-danger'>*</span></h4></label>
                    <TextareaAutosize id="city" name="city" placeholder="Your Answer" className="form-control"
                    value={this.state.city} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                <p className='text-danger'>{this.state.formErrors.cityValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="nation" md={12}><h4>7. Quốc gia đang ở hiện tại: <span className='text-danger'>*</span></h4></label>
                    <input type='text' id="nation" name="nation" placeholder="Your Answer" className="form-control"
                    value={this.state.nation} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                    <p className='text-danger'>{this.state.formErrors.nationValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="passportNum" md={12}><h4>8. Số chứng minh nhân dân/ hộ chiếu: <span className='text-danger'>*</span></h4><small>Chú ý: viết đúng các chữ số từ 0-9</small></label>
                    <input type='text' id="passportNum" name="passportNum" placeholder="Your Answer" className="form-control"
                    value={this.state.passportNum} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                    <p className='text-danger'>{this.state.formErrors.passportNumValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="issuedDate" md={12}><h4>9. Ngày cấp: <span className='text-danger'>*</span></h4><small>Date</small></label>
                    <input type='date' id="issuedDate" name="issuedDate" placeholder="Your Answer" className="form-control"
                    value={this.state.issuedDate} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                    <p className='text-danger'>{this.state.formErrors.issuedDateValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="issuedAddress" md={12}><h4>10. Nơi cấp: <span className='text-danger'>*</span></h4></label>
                    <input type='text' id="issuedAddress" name="issuedAddress" placeholder="Your Answer" className="form-control"
                    value={this.state.issuedAddress} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                    <p className='text-danger'>{this.state.formErrors.issuedAddressValid}</p>
            </div>
            <div className="form-group">
                <label htmlFor="accface" md={12}><h4>11. Link Account Facebook <span className='text-danger'>*</span></h4><small>Ví dụ: <b><i><u>https://www.facebook.com/vinh.doanthe</u></i></b></small></label>
                    <input type='text' id="accface" name="accface" placeholder="Your Answer" className="form-control"
                    value={this.state.accface} 
                    onChange={this.handleUserInput}
                    onBlur={this.handleUserInput}
                    required/>
                    <p className='text-danger'>{this.state.formErrors.accfaceValid}</p>
            </div>
            <div className="form-group">
                    <label htmlFor="job" md={12}><h4>12. Nghề nghiệp: </h4></label>
                        <input type='text' id="job" name="job" placeholder="Your Answer" className="form-control"
                        value={this.state.job} 
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                    <p className='text-danger'>{this.state.formErrors.jobValid}</p>
            </div>
            <div className='panel panel-default'>
            <FormErrors formErrors={this.state.formErrors}/>
            </div>
            <div className='form-group row'>
                <Col md={6}></Col>
                <Col md={6}>
                    <Button type='submit' color="primary" onClick={this.nextPage} className='mx-auto d-block btn-info' disabled={!this.state.formValid}>
                    <b>Tiếp tục</b>
                    </Button>
                </Col>
            </div>
        </div>    
        )
    }
}
export default I;