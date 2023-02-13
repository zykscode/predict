import { useEffect, useMemo, useState } from 'react';

function filterObjects(key: string, values: any[], objects: any[]) {
  const newObj = objects.filter((obj) => values.includes(obj[key]));
  return newObj;
}

export default function useFilteredObjects(
  key: string,
  values: any[],
  objects: any[]
) {
  const [filteredObjects, setFilteredObjects] = useState<any[]>([]);

  useEffect(() => {
    setFilteredObjects(filterObjects(key, values, objects));
  }, []);

  return useMemo(() => filteredObjects, [filteredObjects]);
}
