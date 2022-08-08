import { Box, Heading, Button, Text, List } from 'grommet';
import { Device, LinkPrevious, LinkNext, Configure } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'deviceGroup0', desc: '金乌1号' },
  { name: 'deviceGroup1', desc: '金乌2号' },
  { name: 'deviceGroup1', desc: '金乌3号' },
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
          <Box direction='row' gap='small' justify='between' align='center'>
            <Device />
            <Text weight='bold'>{datum.name}</Text>
            <Text>{datum.desc}</Text>
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