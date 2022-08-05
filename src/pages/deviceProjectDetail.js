import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { MainWindow } from '../components/MainWindow';
import { HeaderBar } from '../components/HeaderBar';
import { ContentWindowProjectDetail } from '../components/ContentWindowProjectDetail';

function HomePage() {
  return (
    <Grommet full theme={grommet}>
      <Box fill>
        <HeaderBar />
        <MainWindow content={<ContentWindowProjectDetail />} />
      </Box>
    </Grommet>
  );
}

export default HomePage;