import { geoMercator, geoPath } from 'd3-geo';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import MapPath from './MapPath';

interface Props {
  data: GeoJSON.FeatureCollection;
}

const Map: FC<Props> = ({ data }) => {
  const initialProjection = () => geoMercator().fitSize([100, 100], data);
  const [projections, setProjection] = useState(initialProjection);
  useEffect(() => {
    function handleResize() {
      setProjection(initialProjection);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, []);

  const path = geoPath().projection(projections);

  const containerRef = useRef<SVGSVGElement>(null);
  return (
    <svg ref={containerRef} viewBox="0 0 100 100">
      {' '}
      <g className="regions">
        {data.features.map((feature) => (
          <MapPath
            key={feature.properties!.lganame || feature.properties!.adminName}
            feature={feature}
            path={path}
          />
        ))}
      </g>
    </svg>
  );
};

export default Map;
