import React, { Component } from "react";
import { withCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import UserContext from "../userContext";
import {BsFillPeopleFill, BsFillPersonFill} from "react-icons/bs";
import {RiContactsBookFill, RiFileListLine} from "react-icons/ri";
import {IoIosPeople} from "react-icons/io";
import {TbCalendarEvent} from "react-icons/tb";
import {BiNews} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";

class ActivityLeft extends Component {

  constructor(props) {
    super(props);

    this.state = {
      followers: "",
      following: "",
      user: "",
    };
  }

  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_API_URL}/uapi/users/${
        this.props.cookies.get("auth-token").user.id
      }/no_of_follow/`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${this.props.cookies.get("auth-token").token}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ following: resp.no_following });
        this.setState({ followers: resp.no_followers });
      })
      .catch((error) => console.log(error));

    // fetch(
    //   `${process.env.REACT_APP_API_URL}/uapi/users/${this.props.location.state}/`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Token ${this.props.cookies.get("auth-token").token}`,
    //     },
    //   }
    // )
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     this.setState({ user: resp });
    //   })
    //   .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="network_left" style={{ marginTop: "45px" }}>
        <div style={{width: 300}} className="network_left__top">
          <div className="text-left w-100 pl-2 mt-2 pb-1">
            Manage my network
          </div>

          <div>

            <div style={{width: 273}} className="border-bottom pb-2">

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <BsFillPeopleFill style={{fontSize:23}}/>
                  <span className="ml-3">Connections</span>
                </div>
                <div className="col-3">319</div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <RiContactsBookFill style={{fontSize:23}}/>
                  <span className="ml-3">Contacts</span>
                </div>
                <div className="col-3">319</div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <BsFillPersonFill style={{fontSize:23}}/>
                  <span className="ml-3">Following & followers</span>
                </div>
                <div className="col-3"></div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <IoIosPeople style={{fontSize:23}}/>
                  <span className="ml-3">Groups</span>
                </div>
                <div className="col-3"></div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <TbCalendarEvent style={{fontSize:23}}/>
                  <span className="ml-3">Event</span>
                </div>
                <div className="col-3">1</div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <RiFileListLine style={{fontSize:23}}/>
                  <span className="ml-3">Pages</span>
                </div>
                <div className="col-3">74</div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <BiNews style={{fontSize:23}}/>
                  <span className="ml-3">Newsletters</span>
                </div>
                <div className="col-3">74</div>
              </div>

              <div className="row left_link py-2">
                <div className="col-9 text-left pl-2">
                  <HiOutlineHashtag style={{fontSize:23}}/>
                  <span className="ml-3">Hashtags</span>
                </div>
                <div className="col-3"></div>
              </div>

            </div>

          </div>
          <UserContext.Consumer>
            {(props) => {
              return <img src={props.user.cover_pic} alt="background" />;
            }}
          </UserContext.Consumer>
          <UserContext.Consumer>
            {(props) => {
              return (
                <Avatar
                  src={props.user.profile_pic}
                  className="network_left__avatar"
                ></Avatar>
              );
            }}
          </UserContext.Consumer>

          <Link to={"/profile"}>
            <span style={{ fontWeight: "bold" }}>
              {this.props.cookies.get("auth-token").user.username}
            </span>
          </Link>
        </div>

        <div className="network_left__stats">
          <div className="network_left__stat">
            <p>Followers</p>
            <p className="network_left__statNumber">{this.state.followers}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(ActivityLeft);
