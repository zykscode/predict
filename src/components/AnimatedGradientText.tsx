/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import React, { useState } from 'react';

interface AnimatedGradientTextProps {
  content: undefined | number;
  startColor: string;
  endColor: string;
  index?: number;
  type: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  content,
  startColor,
  endColor,
  type,
  index,
}) => {
  const [newContent] = useState(content);
  const styles = {
    '--content': newContent,
    '--start-color': startColor,
    '--end-color': endColor,
  } as React.CSSProperties;
  return (
    <span
      className={`animated-gradient-text_background animated-gradient-text_background-${index}  `}
      data-content={`${content} ${type}`}
      style={styles}
    >
      <span
        className={`animated-gradient-text_foreground animated-gradient-text_foreground-${index}`}
      >
        {`${content} ${type}`}
      </span>
    </span>
  );
};

export default AnimatedGradientText;
