import React from "react";
import { CSSTransition } from "react-transition-group";
import brand from '../../src/images/brand.png';
const SplashScreen = () => {
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={1500}
            classNames="fade"
        >
            <div style={styles.container}>
                <img width={50} src={brand} alt=""></img>
                <h1 className="font-bold font-serif" style={styles.title}><span className="text-white"> -FLIX</span></h1>
            </div>
        </CSSTransition>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#18161646"
    },
    title: {
        fontSize: 30,
        color: "#333"
    }
};

export default SplashScreen;
