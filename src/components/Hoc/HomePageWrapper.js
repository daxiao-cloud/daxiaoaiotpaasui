import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { MainWindow } from '../MainWindow';
import { HeaderBar } from '../HeaderBar';

function makeHomePage(content) {
  return function () {
    return (
      <Grommet full theme={grommet}>
        <Box fill>
          <HeaderBar />
          <MainWindow content={content} />
        </Box>
      </Grommet>
    );
  }
}

export { makeHomePage };