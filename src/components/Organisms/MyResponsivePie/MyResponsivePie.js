import React from 'react';
import PropTypes from 'prop-types';

import { ResponsivePie } from '@nivo/pie';

// const data = [
//   {
//     id: 'mieszkanie',
//     value: 310, - sum of all id's
//     color: 'hsl(163, 70%, 50%)', - random
//   },
//   {
//     id: 'jedzenie',
//     value: 479,
//     color: 'hsl(52, 70%, 50%)',
//   },
// ];

const MyResponsivePie = ({ data, colorBy }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 0, right: 20, bottom: 20, left: 20 }}
    sortByValue
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={colorBy}
    enableRadialLabels={false}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        translateY: 0,
        translateX: -20,
        itemWidth: 100,
        itemHeight: 22,
        itemTextColor: '#999',
        symbolSize: 14,
        symbolShape: 'circle',
      },
    ]}
  />
);

MyResponsivePie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  colorBy: PropTypes.func.isRequired,
};

export default MyResponsivePie;
