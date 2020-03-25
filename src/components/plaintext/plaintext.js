import React from "react";
import "./plaintext.css";
const PlainText = props => {
  const inputText = props.text;
  if (!inputText) {
    return null;
  }
  const plaintext = inputText
    .replace(/<[^>]*>?/gm, "")
    .replace(/\&quot\;/gm, "'");
  return <p className="plaintext">(from wikipedia) {plaintext} ...</p>;
};

export default PlainText;
