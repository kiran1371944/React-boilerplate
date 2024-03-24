import styled from '@emotion/styled';
import { ReactNode } from 'react';

type ColumnOrRowProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
};

export const Column = styled.div<ColumnOrRowProps>`
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${(props) => (props.width ? props.width : '1em')}
    height: ${(props) => (props.height ? props.height : '1em')}

`;

export const Row = styled.div<ColumnOrRowProps>`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${(props) => (props.width ? props.width : '1em')}
    height: ${(props) => (props.height ? props.height : '1em')}
`;

export function FullScreenColumn({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-screen w-screen flex justify-start items-start fixed"
      style={{ backgroundColor: '#f6fdff', overflowX: 'clip' }}
    >
      {children}
    </div>
  );
}

export function FullScreenGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-screen w-screen justify-center items-start fixed"
      style={{
        backgroundColor: '#f6fdff',
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        position: 'relative',
        gridTemplateRows: '100px 1fr',
      }}
    >
      {children}
    </div>
  );
}

interface SpacerRowProps {
  width?: string;
}

export const SpacerRow = styled.div<SpacerRowProps>`
  flex-direction: row;
  display: flex;
  width: ${(props) => (props.width ? props.width : '1em')};
`;

interface SpacerColumnProps {
  height?: string;
}
export const SpacerColumn = styled.div<SpacerColumnProps>`
  flex-direction: row;
  display: flex;
  height: ${(props) => (props.height ? props.height : '1em')};
`;

interface LinearGradientProps {
  direction?: string;
  flexDirection?: string;
  color1: string;
  color2: string;
  width?: string;
  height: string;
}

export const LinearGradient = styled.div<LinearGradientProps>`
  flex-direction: ${(props) => props.flexDirection || 'column'};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    ${(props) => props.direction || 'to right'},
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
`;
