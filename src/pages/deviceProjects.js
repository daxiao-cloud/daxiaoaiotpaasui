import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { MainWindow } from '../components/MainWindow';
import { HeaderBar } from '../components/HeaderBar';
import { ContentWindowProjects } from '../components/ContentWindowProjects';

function HomePage() {
  return (
    <Grommet full theme={grommet}>
      <Box fill>
        <HeaderBar />
        <MainWindow content={<ContentWindowProjects />} />
      </Box>
    </Grommet>
  );
}

export default HomePage;