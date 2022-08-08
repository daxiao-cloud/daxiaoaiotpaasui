import { Box, Heading, Button, Text, List } from 'grommet';
import { Device, LinkPrevious, LinkNext, Configure } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'deviceGroup0', desc: '金乌1号' },
  { name: 'deviceGroup1111111', desc: '金乌2号' },
  { name: 'abc', desc: '金乌3号, 用来测试用来测试。' },
];

export function ContentWindowDeviceGroups() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/deviceProjects'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 工程详情</Heading>
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Device />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
            <Link href='/deviceGroupSetting'>
              <Button icon={<Configure />} />
            </Link>
            <Link href='/deviceDevices'>
              <Button icon={<LinkNext />} />
            </Link>
          </Box>
        )}
      </List>
    </Box>
  );
}