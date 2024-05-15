import React from "react";
import Lottie from "react-lottie";
import * as done from "./done.json";
import * as loading from "./loading.json";
import styles from "./Loader.module.css";

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused}
      />
    </div>
  );
};


export const Done = () => {

    const defaultOptions2 = {
      loop: false,
      autoplay: true,
      animationData: done,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className={styles.container}>
        <Lottie
          options={defaultOptions2}
          height={300}
          width={300}
          // isStopped={this.state.isStopped}
          // isPaused={this.state.isPaused}
        />
      </div>
    );
  };
