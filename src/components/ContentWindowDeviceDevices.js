import { Box, Heading, Button, Text, List, DataTable } from 'grommet';
import { Video, LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

export function ContentWindowDeviceDevices() {
  return (
    <Box margin='small' overflow='auto'>
      <Box direction='row' align='center' gap='small' flex={false}>
        <Link href='/deviceGroups'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading>设备管理中台 - 设备列表</Heading>
      </Box>
      <DataTable
        columns={[{
          property: 'sn',
          header: <Text>SN</Text>,
          primary: true,
          render: datum => (
            <Link href='/deviceInfo'>
              <Box direction='row' align='center' gap='small'>
                <Video color={datum.online ? 'brand' : 'plain'} />
                <Text color={datum.online ? 'brand' : 'plain'} weight='bold'>{datum.sn}</Text>
              </Box>
            </Link>
          )
        }, {
          property: 'usn',
          header: <Text>USN</Text>
        }, {
          property: 'type',
          header: <Text>类型</Text>,
        }, {
          property: 'desc',
          header: <Text>描述</Text>,
        }]}
        data = {[
          { usn: 'daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT', sn: 'dxp4720985', type: '金乌1号', desc: '办公区0', online: false },
          { usn: 'daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myU', sn: 'dxp4720986', type: '金乌1号', desc: '会议室1', online: true },
          { usn: 'daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myV', sn: 'dxp4720987', type: '金乌1号', desc: '大堂', online: false },
        ]}
      />
    </Box>
  );
}