import React, { Component } from 'react';

import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        constructor(props) {
            super(props);
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }
        state = {
            error: null
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