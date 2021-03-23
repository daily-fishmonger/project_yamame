export interface Props {
  label: string;
  color: string;
  size: 'small' | 'medium';
  isWhite: boolean;
}

export type Classes = {
  [key: string]: boolean;
};
