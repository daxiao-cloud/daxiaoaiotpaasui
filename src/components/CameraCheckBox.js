import { Box, CheckBox, Text } from 'grommet';
import { Video } from 'grommet-icons';

export function CameraCheckBox({ checked, label }) {
  return (
    <CheckBox checked={checked} label={<Box direction='row' gap='small' align='center'><Video /><Text>{label}</Text></Box>} />
  );
}