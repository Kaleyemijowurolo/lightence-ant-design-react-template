import React, { CSSProperties, useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading/Loading';

export interface BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEvents?: Record<string, (e: any) => void>;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  classname?: string;
}

interface DefaultTooltipStyles {
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  textStyle: {
    fontWeight: number;
    fontSize: number;
    color: string;
  };
}

export const getChartColors = (theme: DefaultTheme): string[] => [
  theme.chartColor1,
  theme.chartColor2,
  theme.chartColor3,
  theme.chartColor4,
  theme.chartColor5,
];

export const getDefaultTooltipStyles = (theme: DefaultTheme): DefaultTooltipStyles => ({
  borderColor: theme.chartColor1,
  borderWidth: 2,
  borderRadius: parseInt(theme.borderRadius),
  textStyle: {
    fontWeight: 600,
    fontSize: 16,
    color: theme.chartColor1,
  },
});

export const BaseChart: React.FC<BaseChartProps> = ({ option, width, height, onEvents, style, ...props }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const chartHeight = height || '400px';

  const defaultOption = {
    color: getChartColors(theme),
  };

  useEffect(() => {
    // TODO FIXME workaround to make sure that parent container is initialized before the chart
    setTimeout(() => {
      setLoading(false);
    }, 1000 / 2);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ReactECharts
      {...props}
      option={{ ...defaultOption, ...option }}
      style={{ ...style, height: chartHeight, minHeight: height === '100%' ? 400 : 'unset', width, zIndex: 0 }}
      onEvents={onEvents}
    />
  );
};
