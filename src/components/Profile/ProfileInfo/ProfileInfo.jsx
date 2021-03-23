import classes from './ProfileInfo.module.css';
import React, { Component } from 'react';


const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src='http://pixner.net/peyamba/peyamba/assets/images/profile/profile-user.png' />
                <div>Albert Don</div>

            </div>
            <div className={classes.descriptionBlock}>
                <table>
                    <caption><h4>Base</h4></caption>
                    <tr>
                        <td className={classes.firstTd}>Name</td>
                        <td className={classes.secondTd}>Albert Don</td>
                    </tr>
                    <tr>
                        <td className={classes.firstTd}>Birthday</td>
                        <td className={classes.secondTd}>1998-01-19</td>
                    </tr>
                    <tr>
                        <td className={classes.firstTd}>I am a</td>
                        <td className={classes.secondTd}>Man</td>
                    </tr>
                    <tr>
                        <td className={classes.firstTd}>Country</td>
                        <td className={classes.secondTd}>France</td>
                    </tr>
                    <tr>
                        <td className={classes.firstTd}>City</td>
                        <td className={classes.secondTd}>Paris</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ProfileInfo;