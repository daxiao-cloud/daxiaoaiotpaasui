import { Box } from 'grommet';

export function MainWindow({ content }) {
  return (
    <Box border='between' gap='small' fill>
      {content}
    </Box>
  );
}