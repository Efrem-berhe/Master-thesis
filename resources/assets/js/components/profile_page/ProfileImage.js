import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class ProfileImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingModal: false,
        }
        // This binding is necessary to make `this` work in the callback
        this.handleSave = this.handleSave.bind(this);
    }

    handleClick = () => this.setState({isShowingModal: true})
    handleClose = () => this.setState({isShowingModal: false})
    handleSave() {
        var data = {
            avatar: this.props.img_src,
        }

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: "POST",
            url: "/profile",
            data: data,
            success: function (response) {
                // you will get response from your php page (what you echo or print)
                console.log(response);
                this.handleClose();
                location.reload();
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }.bind(this),

            dataType: "text",
        });
    }
    render() {
        return (
            <div>
                <div className="col-md-3 col-sm-12 card-block">

                    <a className="" onClick={this.handleClick}>
                        <img className="rounded img-responsive"
                             src={this.props.img_src}
                             alt="Card image cap" width={100} height={100}></img>
                    </a>

                    {
                        this.state.isShowingModal &&
                        <ModalContainer>
                            <ModalContainer onClose={this.handleClose}>
                                <ModalDialog onClose={this.handleClose}>
                                <div className="btn-group btn-group-vertical">
                                    <button className="btn-group-lg"><img className="img-responsive"
                                                                          width={200}
                                                                          height={200}
                                                                          src={this.props.img_src}
                                                                          alt="Card image cap"></img></button>
                                    <button className="btn btn-success" onClick={this.handleSave}>Save</button>
                                </div>
                                </ModalDialog>
                            </ModalContainer>
                        </ModalContainer>
                    }

                </div>
            </div>
        );
    }
}

export default ProfileImage;
