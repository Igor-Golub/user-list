import React from 'react';

interface Props {
  value: string;
  highlight: string
}

function getHighlightedText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === highlight.toLowerCase() ? (
        <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

const HighlightedText = ({ highlight, value }: Props) => {
  return (
    <p>{getHighlightedText(value, highlight)}</p>
  );
};

export default HighlightedText;