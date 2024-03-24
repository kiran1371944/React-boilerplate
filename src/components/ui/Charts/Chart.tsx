/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Line } from 'react-chartjs-2';
import { Column, Row } from '../layout/Layout';

type KitchenlyChartProps = {
  title: string;
  subtitle: string;
  subtitleColor: string;
  aspectRatio: number;
  options: object;
  height?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
  backgroundColor?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export function KitchenlyChart({
  title,
  aspectRatio,
  data,
  options,
  subtitle,
  subtitleColor,
  height,
  width,
  minWidth,
  minHeight,
  backgroundColor,
}: KitchenlyChartProps) {
  return (
    <Column
      className=".main-chart"
      style={{
        backgroundColor: backgroundColor ?? `${subtitleColor}17`,
        width: width ?? '25em',
        minWidth: minWidth ?? '20em',
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        position: 'relative',
        height: height ?? '13em',
        minHeight: minHeight ?? 'auto',
        aspectRatio,
        justifyContent: 'flex-end',
        overflow: 'clip',
      }}
    >
      <Column
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          padding: '0.7em',
          fontSize: '12px',
          alignItems: 'flex-start',
        }}
      >
        <Row style={{ color: '#007171', fontSize: '14px', fontWeight: '500' }}>
          {title}
        </Row>
        <Row style={{ color: subtitleColor, fontSize: '24px' }}>{subtitle}</Row>
      </Column>
      <Column style={{ width: '100%', height: '65%', marginBottom: '-5px' }}>
        <Line
          style={{ transform: 'scale(1.02)' }}
          options={options}
          data={data}
        />
      </Column>
    </Column>
  );
}
