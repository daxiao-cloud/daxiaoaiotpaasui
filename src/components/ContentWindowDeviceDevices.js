import { Box, Heading, Button, Text, List } from 'grommet';
import { Video, LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { sn: 'dxp4720985', type: '金乌1号', desc: '办公区0', online: false },
  { sn: 'dxp4720986', type: '金乌1号', desc: '会议室1', online: true },
  { sn: 'dxp4720987', type: '金乌1号', desc: '大堂', online: false },
];

export function ContentWindowDeviceDevices() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/deviceProjectDetail'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 设备列表</Heading>
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' justify='between' align='center'>
            <Video color={datum.online ? 'brand' : 'plain'} />
            <Text weight='bold'>{datum.sn}</Text>
            <Text>{datum.type}</Text>
            <Text>{datum.desc}</Text>
          </Box>
        )}
      </List>
    </Box>
  );
}