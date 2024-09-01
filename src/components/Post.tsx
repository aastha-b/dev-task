import React, { Suspense, lazy, useState } from "react";
import { Posts } from "../constant";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const LazyLoadedComponent = lazy(() => import("./FormModal"));

export const styles: Record<string, React.CSSProperties> = {
  postsContainer: {
    display: "flex",
    maxWidth: "700px",
    flexDirection: "column",
    padding: "16px 0px ",
    width: "100%",
  },
  postDiv: {
    backgroundColor: "#27292D",
    borderRadius: "8px",
    border: "none",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    margin: "8px 0px",
  },
  postHeading: {
    color: "#C5C7CA",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: 500,
  },
  postDescription: {
    backgroundColor: "#1a1920",
    borderRadius: "8px",
    border: "2px solid #35373B",
    display: "flex",
    flexDirection: "row",
    padding: "16px",
    alignItems: "center",
  },
  descriptionBox: {
    backgroundColor: "#27292D",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "16px",
  },
  icon: { width: "18px", color: "white", height: "18px" },
  input: {
    backgroundColor: "#1a1920",
    color: "#7F8084",
    border: "none",
    fontSize: "16px",
    width: "100%",
    height: "50px",
  },
  button: {
    alignSelf: "flex-end",
    width: "111px",
    padding: "12px 0px",
    marginTop: "16px",
    backgroundColor: "#4A96FF",
    color: "white",
    borderRadius: "4px",
    border: "none",
    fontSize: "16px",
    fontWeight: 500,
  },
};

export const Post = ({
  onClick,
  showComponent,
}: {
  onClick: () => void;
  showComponent: boolean;
}) => {
  return (
    <>
      <div
        style={styles.postsContainer}
        onClick={() => {
          console.log("hello");
          onClick();
        }}
      >
        <div style={styles.postDiv}>
          <p style={styles.postHeading}>Create Post</p>
          <div style={styles.postDescription}>
            <div style={styles.descriptionBox}>
              <p style={styles.icon} className="far">
                💬
              </p>
            </div>
            <div
              style={{
                justifySelf: "flex-start",
                width: "100%",
              }}
            >
              <input
                type="text"
                style={styles.input}
                placeholder="How are you feeling today?"
              />
            </div>
          </div>
          <button style={styles.button}>Post</button>
        </div>
        {Posts.map((post) => (
          <div style={styles.postDiv}>
            <div style={{ display: "flex", paddingBottom: "12px" }}>
              <img
                src={require(`../assets/${post.profilePic}`)}
                width={"44px"}
                height={"44px"}
              ></img>
              <div style={{ marginLeft: "12px", textAlign: "left" }}>
                <p style={{ ...styles.postHeading, margin: "0px" }}>
                  {post.userName}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#7F8084",
                    margin: "0px",
                  }}
                >
                  {post.time} {post.isEdited && "• Edited"}
                </p>
              </div>
              <MoreHorizIcon
                style={{ color: "#7F8084", marginLeft: "auto" }}
              ></MoreHorizIcon>
            </div>
            <div style={styles.postDescription}>
              <div style={styles.descriptionBox}>
                <p style={styles.icon} className="far">
                  {post.icon}
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  padding: "8px 0px",
                  ...styles.input,
                }}
              >
                {post.text}
              </div>
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                padding: "12px 0px",
                display: "flex",
              }}
            >
              <img src={require("../assets/Chat Bubble.png")} />
              <span
                style={{
                  marginLeft: "12px",
                  color: "#7F8084",
                  fontSize: "14px",
                  alignSelf: "center",
                }}
              >
                {post.comments} Comment
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
