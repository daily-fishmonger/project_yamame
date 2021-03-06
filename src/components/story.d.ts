export interface Props {
  label: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  isWhite: boolean;
}

export type Classes = {
  [key: string]: boolean;
};

export type IconButtonColor = 'primary' | 'secondary' | 'orange';
export type IconType =
  | 'close'
  | 'home'
  | 'pause'
  | 'restart'
  | 'resume'
  | 'twitter';

export type Pages = 'start' | 'result';
