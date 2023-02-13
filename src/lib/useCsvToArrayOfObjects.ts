import { useEffect, useState } from 'react';

export const useCsvToArrayOfObjects = (csv: string) => {
  const [data, setData] = useState<Array<Record<string, any>>>([]);

  useEffect(() => {
    if (typeof csv !== 'string') {
      console.log(csv);
      return;
    }

    const lines = csv.split('\n');
    const headers = lines[0]!.split(',');

    setData(
      lines.slice(1).map((line) => {
        const values = line.split(',');
        return headers.reduce((acc, header, index) => {
          acc[header.trim()] = values[index]!.trim();
          return acc;
        }, {} as Record<string, any>);
      })
    );
  }, [csv]);

  return data;
};
