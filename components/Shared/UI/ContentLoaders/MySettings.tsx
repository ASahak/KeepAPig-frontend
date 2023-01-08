import React, { useMemo } from 'react';
import { Skeleton, SkeletonGridType } from '@/components/Plugins';

const MySettings: React.FC<{ [key: string]: any }> = () => {
  const gridArea: SkeletonGridType = useMemo(
    () => ({
      direction: 'row',
      children: [
        {
          h: 'auto',
          direction: 'column',
          children: [
            {
              h: '200px',
              skeletons: [{ w: '130px', h: '130px', r: '50%', margin: [35, 'auto'] }]
            },
            {
              skeletons: [
                { w: '100%', h: '40px', r: '5px', margin: [0] },
                { w: '50%', h: '30px', r: '5px', margin: [0] },
                { w: '100%', h: '40px', r: '5px', margin: [0] },
                { w: '80%', h: '20px', r: '5px', margin: [0] },
                { w: '90%', h: '40px', r: '5px', margin: [0] },
                {
                  h: '40px',
                  children: [
                    {
                      repeatCount: 3,
                      direction: 'row',
                      skeletons: [{ w: '1fr', h: '20px', r: '5px', margin: [0] }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          w: '3fr',
          h: 'auto',
          margin: [30, 0, 0],
          children: [
            {
              repeatCount: 4,
              direction: 'row',
              h: 'auto',
              skeletons: [{ w: '150px', h: '40px', r: '5px', margin: [0] }]
            },
            {
              skeletons: [{ w: '1fr', h: '10px', r: '5px', margin: [0] }]
            },
            {
              direction: 'row',
              justifyContent: 'space-between',
              skeletons: [
                { w: '100px', h: '30px', r: '5px', margin: [0] },
                { w: '100px', h: '30px', r: '5px', margin: [0] }
              ]
            },
            {
              repeatCount: 2,
              direction: 'row',
              children: [
                {
                  repeatCount: 4,
                  withOpacity: true,
                  skeletons: [
                    { w: '1fr', h: '100px', r: '5px', margin: [0] },
                    { w: '1fr', h: '100px', r: '5px', margin: [0] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),
    []
  );

  return <Skeleton grid={gridArea} />;
};
MySettings.displayName = 'MySettingsLoader';
export default MySettings;
