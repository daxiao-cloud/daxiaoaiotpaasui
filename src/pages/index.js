import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { MainWindow } from '../components/MainWindow';
import { HeaderBar } from '../components/HeaderBar';
import { ContentWindow } from '../components/ContentWindow';

function HomePage() {
  return (
    <Grommet full theme={grommet}>
      <Box fill>
        <HeaderBar />
        <MainWindow content={<ContentWindow />} />
      </Box>
    </Grommet>
  );
}

export default HomePage;