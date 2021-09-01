import { CalendarToday, LocationSearching, MailOutline, PermIdentity,PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import './user.css'
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                <div className="userAddButton">Create</div>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        className="userShowImg" 
                        src="https://images.unsplash.com/photo-1550523092-8acb0743bc10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80" alt="" 
                        />
                        <div className="userShowTopTitle">
                        <span className="userShowUser">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                            annabek99
                        </span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                            10.12.1990
                        </span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                            +91-1111-11111
                        </span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                            user@gmail.com
                        </span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                            NewYork | USA
                        </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                               <label>UserName</label> 
                               <input type="text" 
                               placeholder="annabeck99"
                               className="userUpdateInput"
                               />
                            </div>
                            <div className="userUpdateItem">
                               <label>FullName</label> 
                               <input type="text" 
                               placeholder="Anna Becker"
                               className="userUpdateInput"
                               />
                            </div>
                            <div className="userUpdateItem">
                               <label>Email</label> 
                               <input type="email" 
                               placeholder="user@gmail.com"
                               className="userUpdateInput"
                               />
                            </div>
                            <div className="userUpdateItem">
                               <label>Phone</label> 
                               <input type="text" 
                               placeholder="+91-1111-11111"
                               className="userUpdateInput"
                               />
                            </div>
                            <div className="userUpdateItem">
                               <label>Address</label> 
                               <input type="text" 
                               placeholder="NewYork"
                               className="userUpdateInput"
                               />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.unsplash.com/photo-1550523092-8acb0743bc10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{'display':'none'}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


