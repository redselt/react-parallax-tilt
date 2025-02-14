import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './TiltScale.doctab';

const code = `import React, { useState } from 'react';

import Tilt from '../../src';
import './TiltScale.doctab.scss';

const TiltScale = () => {
  const [scale, setScale] = useState(1.15);

  return (
    <Tilt scale={scale} transitionSpeed={2500}>
      <div className="tilt-scale">
        <div className="header">
          <div>Scale x{scale}</div>
          <hr />
        </div>
        <div className="form">
          <input
            type="range"
            min="0.7"
            max="1.5"
            step="0.01"
            value={scale}
            onChange={ev => setScale(parseFloat(ev.target.value))}
          />
        </div>
      </div>
    </Tilt>
  );
};

export default TiltScale;
`;

const style = `@import '../ReactParallax.scss';

.tilt-scale {
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  font-size: 30px;
  font-style: italic;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;

  .header {
    font-size: 38px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      transform: scale(1.5);
      height: 20px;
      margin-right: 7px;
    }
  }
}
`;

const _TiltScale = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _TiltScale;
