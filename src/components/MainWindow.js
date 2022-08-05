import { Box } from 'grommet';

export function MainWindow({ content }) {
  return (
    <Box direction='row' border='between' gap='small' fill>
      {content}
    </Box>
  );
}