import React, { useEffect, useState } from 'react';

interface Senator {
  id: number;
  x: number;
  y: number;
}

const calculateCoordinates = (
  senatorsCount: number,
  svgWidth: number,
  svgHeight: number
): Senator[] => {
  const senators: Senator[] = [];

  for (let i = 0; i < senatorsCount; i = +1) {
    const angle = (2 * Math.PI * i) / senatorsCount;
    const x = svgWidth / 2 + (svgWidth / 4) * Math.cos(angle);
    const y = svgHeight / 2 + (svgHeight / 4) * Math.sin(angle);

    senators.push({ id: i, x, y });
  }

  return senators;
};

const Senators: React.FC = () => {
  const [senators, setSenators] = useState<Senator[]>([]);
  const [senatorsCount, setSenatorsCount] = useState(0);

  useEffect(() => {
    setSenators(calculateCoordinates(senatorsCount, 640, 320));
  }, [senatorsCount]);

  return (
    <div>
      <input
        type="number"
        value={senatorsCount}
        onChange={(e) => setSenatorsCount(Number(e.target.value))}
      />
      <svg width="640" height="320">
        {senators.map((senator) => (
          <circle key={senator.id} cx={senator.x} cy={senator.y} r="10" />
        ))}
      </svg>
    </div>
  );
};

export default Senators;
