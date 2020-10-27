import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data, colorBy, sliceLabel }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 20, bottom: 20, left: 20 }}
      sortByValue
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={colorBy}
      enableRadialLabels={false}
      sliceLabel={sliceLabel}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor={colors.text}
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
          itemTextColor: colors.white,
          symbolSize: 14,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: colors.primary,
              },
            },
          ],
        },
      ]}
    />
  );
};

MyResponsivePie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  colorBy: PropTypes.func.isRequired,
  sliceLabel: PropTypes.func.isRequired,
};

export default MyResponsivePie;
