import { Box, Heading, Button, Form, FormField, TextInput, TextArea, Text } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import Link from 'next/link';

export function ContentWindowAppSetting() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Link href='/'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading margin='none'>设备管理中台 - 应用设置</Heading>
      </Box>
      <Form>
        <FormField label='应用名'>
          <TextInput />
        </FormField>
        <FormField label='应用描述'>
          <TextArea />
        </FormField>
      </Form>
      <Box border={{ color: 'status-critical' }} round='xsmall' pad='small'>
        <Text size='large' color='status-critical'>危险区域</Text>
        <Box direction='row' align='center' justify='between'>
          <Text color='status-critical'>警告：应用被删除后无法恢复，请谨慎操作。</Text>
          <Button label='删除应用' color='status-critical' primary />
        </Box>
      </Box>
    </Box>
  );
}