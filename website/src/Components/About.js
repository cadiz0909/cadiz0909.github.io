import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>{this.props.labels.me}</h2>

            <p className="white-text">{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>{this.props.labels.contact_details}</h2>
                  <p className="address">
						   <span className="white-text">{name}</span><br />
						   <span className="white-text">{street}<br />
						         {city} {state}, {zip}
                   </span><br />
                     <span className="white-text">{phone}</span><br />
                     <span className="white-text">{email}</span>
						   
                     
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download="daniel_resume"><i className="fa fa-download"></i>{this.props.labels.download}</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
