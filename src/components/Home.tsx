import React, { Suspense, lazy, useState } from "react";
import "./style.css";
import Post from "./Post";

const LazyLoadedComponent = lazy(() => import("./FormModal"));

export const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "scroll",
  },

  profileDiv: {
    display: "flex",
    width: "700px",
    flexDirection: "column",
    padding: "48px 0px 16px",
  },
  heading: {
    color: "#C5C7CA",
    fontSize: "28px",
    textAlign: "left",
    fontWeight: "500px",
    width: "100%",
    margin: "0px",
  },
};

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };
  const onClose = () => {
    setShowComponent(false);
  };

  return (
    <>
      <div
        style={{
          ...styles.container,
          filter: showComponent ? "blur(5px)" : "none",
        }}
      >
        <div style={styles.profileDiv}>
          <p style={styles.heading}>Hello Jane</p>
          <p style={{ color: "#7F8084", fontSize: "16px", textAlign: "left" }}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <Post showComponent={showComponent} onClick={handleClick} />
      </div>
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponent
            isHomePage={true}
            isLoginPage={false}
            onClose={onClose}
            showForm={showComponent}
          />
        </Suspense>
      )}
    </>
  );
}
