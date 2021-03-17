import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    debugger;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>
                <div className={classes.dialogItem}>
                    <img src={props.ava} />
                    <p>{props.name}</p>
                </div>

            </NavLink>

        </div >
    );
}


export default DialogItem;