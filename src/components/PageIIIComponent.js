import React, {Component} from "react";
import { Col, Button} from 'reactstrap';
import TextareaAutosize from 'react-autosize-textarea';
import {FormErrors} from './FormErrors';

class III extends Component {
    constructor(props){
        super(props);
        this.state = {
            reason: '',
            target: '',
            opinion: '',
            formErrors: {},
            reasonValid: false,
            targetValid: false,
            opinionValid: false,
            formValid: false
        }
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }
    nextPage() {
        this.props.nextPage();
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
        let reasonValid = this.state.reasonValid;
        let targetValid = this.state.targetValid;
        let opinionValid = this.state.opinionValid
        switch(fieldName) {
        case 'reason':
            reasonValid = value && value.length && value.length <= 2000;
            fieldValidationErrors.reasonValid = reasonValid ? '' : 'Trình bày lý do không quá 2000 ký tự!';
            break;
        case 'target':
            targetValid = value && value.length && value.length <= 2000;
            fieldValidationErrors.targetValid = targetValid ? '' : 'Trình bày mục tiêu của bạn không quá 2000 ký tự!';
            break;
        case 'opinion':
            opinionValid =  value && value.length && value.length <= 2000;
            fieldValidationErrors.opinionValid = opinionValid ? '' : 'Chia sẽ ý kiến của bạn không quá 2000 ký tự!';
            break;
          default:
            break;
        }
    this.setState({formErrors: fieldValidationErrors,
                    reasonValid: reasonValid,
                    targetValid: targetValid,
                    opinionValid: opinionValid       
                    }, this.validateForm);
    }
      
    validateForm() {
    this.setState({formValid: this.state.reasonValid && this.state.targetValid 
                                && this.state.opinionValid });
    }
    render() {
        if (this.props.isPage !== 3) {
            return(
                <div></div>
            )
        }
        return(
            <div id='III'><h3>III. LÝ DO THAM GIA HỌC TẠI FUNIX</h3>
            <Col><p>Anh/chị vui lòng thể hiện chi tiết về nhu cầu, kế hoạch, mục tiêu, động cơ học tập của mình</p></Col>
            <div className="form-group">
                    <label htmlFor="reason" md={12}><h4>1. Tại sao bạn quyết định học Công nghệ thông tin và lựa chọn FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ thông tin khoảng 5-10 dòng</small></label>
                        <TextareaAutosize id="reason" name="reason" required placeholder="Your Answer" className="form-control" rows='5'
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                    <p className='text-danger'>{this.state.formErrors.reasonValid}</p>
            </div>
            <div className="form-group">
                    <label htmlFor="target" md={12}><h4>2. Mục tiêu của bạn sau khi học tại FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ thông tin khoảng 5-10 dòng</small></label>
                        <TextareaAutosize id="target" name="target" required placeholder="Your Answer" rows='5' className="form-control"
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                    <p className='text-danger'>{this.state.formErrors.targetValid}</p>
            </div>
            <div className="form-group">
                    <label htmlFor="opinion" md={12}><h4>3. Ý kiến của bạn muốn chia sẽ với FUNIX <span className='text-danger'>*</span></h4><small>Anh/chị vui lòng chia sẻ mong muốn, nguyện vọng hoặc các câu hỏi dành cho FUNIX, khoảng 5-10 dòng</small></label>
                        <TextareaAutosize id="opinion" name="opinion" required placeholder="Your Answer" className="form-control" rows='5'
                        onChange={this.handleUserInput}
                        onBlur={this.handleUserInput}/>
                    <p className='text-danger'>{this.state.formErrors.opinionValid}</p>
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
export default III;