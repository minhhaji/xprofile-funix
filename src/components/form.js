import React, {Component} from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import I from './PageIComponent';
import II from './PageIIComponent';
import III from './PageIIIComponent';
import IV from './PageIVComponent';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPage: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }
    nextPage() {
        this.setState((state) => ({ isPage: state.isPage + 1}));
        console.log('Pagenow: ' + JSON.stringify(this.state.isPage));
    }
    prevPage() {
        this.setState((state) => ({ isPage: state.isPage - 1}));
        console.log('Pagenow: ' + JSON.stringify(this.state.isPage));
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('done')
    }
    render() {
        return(
        <div className='container'>
            <div className='text-left'>
            <Card>
                <CardHeader className="bg-primary text-white text-center"><h1>SƠ YẾU LÝ LỊCH</h1></CardHeader>
                <CardBody>
            <form model='form' onSubmit={(values) => this.handleSubmit(values)}>
            <I isPage={this.state.isPage} nextPage={this.nextPage}/>
            <II isPage={this.state.isPage} nextPage={this.nextPage} prevPage={this.prevPage}/>
            <III isPage={this.state.isPage} nextPage={this.nextPage} prevPage={this.prevPage}/>
            <IV isPage={this.state.isPage} prevPage={this.prevPage} nextPage={this.nextPage} submit={this.handleSubmit}/>
                </form>
                </CardBody>
            </Card>
            </div>
        </div>
        )
    }
};
export default Form;