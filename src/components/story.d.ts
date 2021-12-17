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
export type TextButtonColor = 'blue' | 'purple';
export type IconType =
  | 'close'
  | 'home'
  | 'pause'
  | 'restart'
  | 'resume'
  | 'twitter'
  | 'hamburger';

export type Pages = 'start' | 'result';

export type HelpContent = {
  img: string;
  title: string;
  text: string;
};

export type HelpPage = HelpContent[];
