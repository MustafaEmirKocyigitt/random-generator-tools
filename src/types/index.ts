export interface GeneratorOption {
  label: string;
  value: string | number | boolean;
}

export interface RandomNumberConfig {
  min: number;
  max: number;
}

export interface PasswordConfig {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export interface NameConfig {
  gender: 'male' | 'female' | 'mixed';
}

export interface ColorResult {
  hex: string;
  rgb: string;
}

export interface PickerItem {
  id: string;
  text: string;
}
