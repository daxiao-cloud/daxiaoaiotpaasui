import { Box, Heading, List, Text, Button } from 'grommet';
import { Projects, Configure, LinkPrevious, LinkNext } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'testproj0', appid: '12341234', desc: '测试project0' },
  { name: 'testproj1111', appid: '12341234', desc: '测试project1' },
  { name: 'abc', appid: '12341234', desc: '测试project2' },
];

export function ContentWindowProjects() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 工程</Heading>
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Projects />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Text>{datum.appid}</Text>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
            <Box direction='row' gap='small' align='center'>
              <Link href='/deviceProjectSetting'>
                <Button icon={<Configure />} />
              </Link>
              <Link href='/deviceGroups'>
                <Button icon={<LinkNext />} />
              </Link>
            </Box>
          </Box>
        )}
      </List>
    </Box>
  );
}