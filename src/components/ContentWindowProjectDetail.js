import { Box, Heading, Button, Form } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

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