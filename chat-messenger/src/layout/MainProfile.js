import "../css/MainProfile.css";

import React from 'react';
import { Route, IndexRoute } from 'react-router';




const MainPrfile = () => {
    return (
        <div id="user-profile">
        <div class="col-lg-10 col-md-5 col-sm-5">

            <div class="main-box clearfix">
                <h2>Donald Trump</h2>
                <div class="profile-status">
                    <i class="fa fa-check-circle"></i> Online
                </div>
                <img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-200x200.jpg" height = "200" width = "200" alt="" class="profile-img img-responsive center-block"></img>
                <div class="profile-label">
                    <span class="label label-danger">U.S. 45th President </span>
                </div>

                <div class="profile-stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <span>Super User</span>
                </div>

                <div class="profile-since">
                    Member since: Jan 2017
                </div>

                <div class="profile-details">
                    <ul class="fa-ul">
                        <li><i class="fa-li fa fa-truck"></i>Birthday: June 14, 1946</li>
                        <li><i class="fa-li fa fa-comment"></i>University: The Wharton School</li>
                        <li><i class="fa-li fa fa-tasks"></i>What's Up: Nobody knows more about COVID-19 than I do</li>
                    </ul>
                </div>

                <div class="profile-message-btn center-block text-center">
                    <a href="#" class="btn btn-success" style={{marginRight: 40 + "px"}}>
                        <i class="fa fa-envelope" onClick='ProfileSetting'></i> Edit Profile - Ben
                          
                    </a>
                    <a href="#" class="btn btn-danger">
                       <i class="fa fa-envelope"></i> Logout Account
                    </a>
                </div>
            </div>
            </div>
            </div>

    )



}
export default MainPrfile;
