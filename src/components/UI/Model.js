import React, { Fragment } from "react";
// import { ReactDOM } from "react-dom";
import { createPortal } from 'react-dom';
import classes from './Model.module.css';


const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHideCart} />
  );
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Model = (props) => {

  return (
    <Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)};
      {/* {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}; */}
      {createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Model;
