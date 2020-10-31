import React, { Component } from 'react';

import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        reqInterceptor;
        resInterceptor;
        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor =  axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }
        state = {
            error: null
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        // componentDidMount() {
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     });
        // }

        errorConfirmedHandler = () => {
          this.setState({error:null})
        };

        render() {
            return (
                <>
                    <Modal
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
};

export default withErrorHandler;