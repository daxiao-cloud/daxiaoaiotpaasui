import { Box, Heading, List, Text, Button, Form } from 'grommet';
import { Apps, Configure, FormRefresh, LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

const data = [
  { name: 'testproj0', appid: '12341234', desc: '测试project0' },
  { name: 'testproj1', appid: '12341234', desc: '测试project1' },
  { name: 'testproj1', appid: '12341234', desc: '测试project2' },
];

export function ContentWindowProjectDetail() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/deviceProjects'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 工程详情</Heading>
      </Box>
      <Form>
        
      </Form>
    </Box>
  );
}