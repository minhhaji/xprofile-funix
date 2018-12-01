import React,{ Component } from 'react';
import {Button, Col} from 'reactstrap';
import TextareaAutosize from 'react-autosize-textarea';
import {FormErrors} from './FormErrors';

class II extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameRelative: '',
            relationship: '',
            phonenum: '',
            formErrors: {},
            nameRelativeValid: true,
            relationshipValid: true,
            phonenumValid: true,
            formValid: true
        }
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        /* this.handleUserInput = this.handleUserInput.bind(this);
        in order to 'post' :))
        */
    }
    nextPage() {
        this.props.nextPage();
        /* and here
        let inf = this.state
        this.props.postForm(inf.nameRelative, inf.relationship, inf.phonenum);
    */
    };
    prevPage() {
        this.props.prevPage();
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameRelativeValid = 'true';
        let relationshipValid = this.state.relationshipValid;
        let phonenumValid = this.state.phonenumValid
        switch(fieldName) {
        case 'nameRelative':
            nameRelativeValid = value.length <= 50;
            fieldValidationErrors.nameRelativeValid = nameRelativeValid ? '' : 'Họ tên người thân không quá 50 ký tự!';
            break;
        case 'relationship':
            relationshipValid = value.length <= 500;
            fieldValidationErrors.relationshipValid = relationshipValid ? '' : 'Trình bày mối quan hệ không quá 500 ký tự!';
            break;
        case 'phonenum':
            phonenumValid =  !isNaN(Number(value));
            fieldValidationErrors.phonenumValid = phonenumValid ? '' : 'Số điện thoại phải là các chữ số từ 0-9';
            break;
          default:
            break;
        }
    this.setState({formErrors: fieldValidationErrors,
                    nameRelativeValid: nameRelativeValid,
                    relationshipValid: relationshipValid,
                    phonenumValid: phonenumValid       
                    }, this.validateForm);
    }
      
    validateForm() {
    this.setState({formValid: this.state.nameRelativeValid && this.state.relationshipValid 
                                && this.state.phonenumValid });
    }
    render(){
        if (this.props.isPage !== 2) {
            return(
                <div></div>
            )
        }
        return(
        <div><h3>II. THÔNG TIN LIÊN HỆ KHÁC</h3>
            <Col><p>Trong trường hợp không thể liên hệ được với anh/chị qua số điện thoại di động cá nhân, nhà trường có thể liên hệ với ai? Anh chị vui lòng cung cấp số điện thoại, tên, mối quan hệ , Ví dụ: Nguyễn Văn B - Bố - 0903752875</p></Col>
            <div className="form-group">
                    <label htmlFor="nameRelative" md={12}><h4>1. Họ và tên: </h4></label>
                        <input type='text' id="nameRelative" name="nameRelative"
                            placeholder="Your Answer"
                            className="form-control"
                            value={this.state.nameRelative}
                            onChange={this.handleUserInput}
                            onBlur={this.handleUserInput}/>
                    <p className='text-danger'>{this.state.formErrors.nameRelativeValid}</p>
            </div>
            <div className="form-group">
                    <label htmlFor="relationship" md={12}><h4>2. Mối quan hệ: </h4></label>
                        <TextareaAutosize id="relationship" name="relationship"
                            placeholder="Your Answer"
                            className="form-control"
                            value={this.state.relationship}
                            onChange={this.handleUserInput}/>
                        <p className='text-danger'>{this.state.formErrors.relationshipValid}</p>
            </div>
            <div className="form-group">
                    <label htmlFor="phonenum" md={12}><h4>3. Số điện thoại: </h4><small>Số ĐT viết liền, không có ký tự đặc biệt, định dạng: Mã nướcxxxxx, VD: Việt Nam: 8412342349704, Nhật Bản: 812389472398</small></label>
                        <input type='text' id="phonenum" name="phonenum"
                            placeholder="Your Answer"
                            className="form-control"
                            value={this.state.phonenum}
                            onChange={this.handleUserInput}/>
                        <p className='text-danger'>{this.state.formErrors.phonenumValid}</p>
            </div>
            <FormErrors formErrors={this.state.formErrors}/>
            <div className='form-group row'>
                <Col md={6}><Button type='submit' className='mx-auto d-block btn-warning' onClick={this.prevPage}>
                    Quay lại
                </Button></Col>
                <Col md={6}>
                    <Button type='submit' className='mx-auto d-block btn-info' onClick={this.nextPage} disabled={!this.state.formValid}>
                    Tiếp tục
                    </Button>
                </Col>
            </div>
            </div>
        )
    }
}
export default II;