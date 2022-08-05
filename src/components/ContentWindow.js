import { Box, Heading, List, Text, Button } from 'grommet';
import { Apps, Configure } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'test0', appid: '12341234', desc: '测试app0' },
  { name: 'test1', appid: '12341234', desc: '测试app1' },
  { name: 'test1', appid: '12341234', desc: '测试app1' },
];

export function ContentWindow() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Heading margin='none'>设备管理中台 - 应用</Heading>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' justify='between' align='center'>
            <Apps />
            <Text weight='bold'>{datum.name}</Text>
            <Text>{datum.appid}</Text>
            <Text>{datum.desc}</Text>
            <Link href='/deviceProjects'>
              <Button icon={<Configure />} />
            </Link>
          </Box>
        )}
      </List>
    </Box>
  );
}