import { Box, Heading, List, Text, Button } from 'grommet';
import { Apps, Configure, LinkNext, Add } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'test0', appid: '12341234', desc: '测试app0' },
  { name: 'test11111', appid: '12341234', desc: '测试app11' },
  { name: 'a', appid: '12341234', desc: '测试app1234' },
];

export function ContentWindowApps() {
  return (
    <Box margin='small' overflow='auto'>
      <Box direction='row' align='center' justify='between' flex={false}>
        <Heading>设备管理中台 - 应用</Heading>
        <Button primary label='添加应用' icon={<Add />} />
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Apps />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Text>{datum.appid}</Text>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
            <Box direction='row' gap='small' align='center'>
              <Link href='/deviceAppSetting'>
                <Button icon={<Configure />} />
              </Link>
              <Link href='/deviceProjects'>
                <Button icon={<LinkNext />} />
              </Link>
            </Box>
          </Box>
        )}
      </List>
    </Box>
  );
}