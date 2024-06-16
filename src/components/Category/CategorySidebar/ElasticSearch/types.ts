export interface ElasticSearchProps {
  value: string;
  isHintsOpen: boolean;
  onChange: (value: string) => void;
  onClick: (value: string) => void;
  closeHints: () => void;
}
