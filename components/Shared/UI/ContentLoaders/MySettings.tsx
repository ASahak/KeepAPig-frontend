import React from 'react';
import { Skeleton } from '@/components/Plugins';

const MySettings: React.FC<{ [key: string]: any }> = (props) => {
  return (
    <Skeleton
      sectionSpacing={20}
      grid={[
        {
          w: '1fr',
          h: '100%',
          rows: [
            {
              alignment: 'center',
              cols: [{ w: '130px', h: '130px', r: '50%', margin: [35, 0] }]
            },
            [{ w: '100%', h: '100px', r: '10px' }]
          ]
        },
        {
          w: '3fr',
          h: '100%',
          repeatCount: 5,
          withOpacity: true,
          rows: [[{ w: '100%', h: '100px', r: '10px', margin: [10, 0, 0] }]]
        }
      ]}
    />
  );
};
MySettings.displayName = 'MySettingsLoader';
export default MySettings;
