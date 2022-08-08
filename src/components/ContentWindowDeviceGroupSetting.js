import { Box, Heading, Text, Button, Form, FormField, TextArea, TextInput } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

export function ContentWindowDeviceGroupSetting() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/deviceProjectDetail'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 设备组设置</Heading>
      </Box>
      <Form>
        <FormField label='设备组名'>
          <TextInput />
        </FormField>
        <FormField label='设备组描述'>
          <TextArea />
        </FormField>
      </Form>
      <Box border={{ color: 'status-critical' }} round='xsmall' pad='small'>
        <Text size='large' color='status-critical'>危险区域</Text>
        <Box direction='row' align='center' justify='between'>
          <Text color='status-critical'>警告：设备组被删除后无法恢复，请谨慎操作。</Text>
          <Button label='设备组工程' color='status-critical' primary />
        </Box>
      </Box>
    </Box>
  );
}