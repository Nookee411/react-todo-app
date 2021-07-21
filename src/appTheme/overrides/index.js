import MuiButton from './MuiButton';
import MuiCheckbox from './MuiCheckbox';
import MuiTextField from './MuiTextField';

export default (theme, overrides) => ({
  ...overrides,

  MuiButton: MuiButton(theme, overrides),
  MuiCheckbox: MuiCheckbox(theme, overrides),
  MuiTextField: MuiTextField(theme, overrides),
});
