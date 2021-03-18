// 一旦Sizeだけvalidatorの代用としての型定義
export type Size = 'small' | 'medium';

export interface Props {
  label: string;
  color: string;
  size: 'small' | 'medium';
}
