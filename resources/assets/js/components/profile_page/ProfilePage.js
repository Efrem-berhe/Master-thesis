import React, {Component} from 'react';
import ProfileImage from './ProfileImage';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

            this.state = {file: '',imagePreviewUrl: '',}

        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        console.log(this.state.file);
        data.append('avatar', this.state.file);
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "/uploadFile",
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (res) {
                console.log(res);
            }.bind(this)
        });
    }
    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
            });
        }
        reader.readAsDataURL(file)
    }
    render() {
        var img_src_paths = [
            "/img/avatars/adults/adult-man.png",
            "/img/avatars/adults/adult-women.png",
            "/img/avatars/animal/animal-duck.png",
            "/img/avatars/children/child-man-avatar.png",
            "/img/avatars/children/child-women-avatar.png",
            "/img/avatars/material/material-lump.png",
            "/img/avatars/older/old-man.png",
            "/img/avatars/older/old-women.png"];


        const profilePictures = img_src_paths.map(
            (img_src_path) =>
                <ProfileImage key={img_src_path} img_src={img_src_path}/>
        );
        return (
            <div>

                <div className="card mb-4">

                    <div className="card-header">
                        <h4 id="step1"className="card-title">Profile Picture</h4>
                        <h6 className="card-subtitle">Select or upload your profile picture</h6>
                    </div>

                    <div className="card-block">

                        <div className="row">

                            <div className="col-md-12">

                                    <form onSubmit={this.handleSubmit}>

                                        <div className="input-group">

                                            <label><input className="fileInput" type="file" size="200" onChange={this.handleImageChange}/></label>

                                            <span class="input-group-addon">
                                            <button className="submitButton customUpload" type="submit" ><i className="fa fa-upload uploadCustom" aria-hidden="true"></i></button>
                                            </span>
                                        </div>
                                    </form>


                                <div className="">

                                    <div className="row justify-content-wrap ">
                                        {profilePictures}
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

export default ProfilePage;
