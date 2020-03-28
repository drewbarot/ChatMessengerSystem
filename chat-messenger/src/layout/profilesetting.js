import React from 'react';




const ProfileSetting = () => {
    return (
        <div id="profile-setting">
        <div class="col-lg-10 col-lg-10 col-sm-5">

        <div class="edit-box clearfix">
            <h2>Edit Profile</h2>

            <div class="profile-details">
            <img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-200x200.jpg" height = "300" width = "300" alt="" class="profile-img img-responsive"></img>
            <div class="profile-label">
                <span class="label label-danger">Bio: U.S. 45th President </span>
            </div>
                <ul class="fa-ul">
                    <li><i class="fa-li fa fa-truck"></i>Birthday: June 14, 1946</li>
                    <li><i class="fa-li fa fa-comment"></i>University: The Wharton School</li>
                    <li><i class="fa-li fa fa-tasks"></i>What's Up: Nobody knows more about COVID-19 than I do</li>
                </ul>
            </div>


        </div>

          </div>
          </div>
        )


}
export default ProfileSetting;
