import MuiButton from './MuiButton';
import MuiTextField from './MuiTextField';
import MuiFormControl from './MuiFormControl';

export default (theme, overrides) => ({
  ...overrides,

  MuiButton: MuiButton(theme, overrides),
  MuiTextField: MuiTextField(theme, overrides),
  MuiFormControl: MuiFormControl(theme, overrides),
});
