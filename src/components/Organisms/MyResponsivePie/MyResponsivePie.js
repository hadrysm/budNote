import React from 'react';
import PropTypes from 'prop-types';

import { ResponsivePie } from '@nivo/pie';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data, colorBy /* see data tab */ }) => (
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
