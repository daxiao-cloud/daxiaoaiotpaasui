import { Box, Heading, TableBody, Button, Table, TableHeader, TableRow, TableCell } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

export function ContentWindowDeviceInfo() {
  return (
    <Box margin='small' overflow='auto'>
      <Box direction='row' align='center' gap='small' flex={false}>
        <Link href='/deviceDevices'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading>设备管理中台 - 设备信息</Heading>
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>设备状态</strong>
            </TableCell>
            <TableCell>在线</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>SN</strong>
            </TableCell>
            <TableCell>dxp4720985</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>USN</strong>
            </TableCell>
            <TableCell>daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>设备组ID</strong>
            </TableCell>
            <TableCell>af9d40a5-7a36-5c07-b23a-851cd99fbfa5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>IMEI</strong>
            </TableCell>
            <TableCell>359313064530334</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>CPU</strong>
            </TableCell>
            <TableCell>ARM64</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>内存</strong>
            </TableCell>
            <TableCell>8GB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>存储</strong>
            </TableCell>
            <TableCell>128GB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>类型</strong>
            </TableCell>
            <TableCell>金乌1号</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>设备注册时间</strong>
            </TableCell>
            <TableCell>2022/8/8 16:20</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}