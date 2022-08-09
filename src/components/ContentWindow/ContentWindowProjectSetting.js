import { Box, Heading, Text, Button, Form, FormField, TextArea, TextInput, Layer } from 'grommet';
import { LinkPrevious, Trash } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

export function ContentWindowProjectSetting() {
  const [open, setOpen] = useState();
  return (
    <Box margin='small' flex overflow='auto'>
      {open && (
        <Layer position='top' onClickOutside={() => setOpen(false)}>
          <Form>
            <Box width='medium' gap='small' margin='medium'>
              <Box direction='row' align='center' gap='small'>
                <Trash size='large' />
                <Heading>删除工程</Heading>
              </Box>
              <Text color='status-critical'>警告：工程删除后无法恢复。请确认是否要继续操作。</Text>
              <Box direction='row' gap='small' justify='center'>
                <Button color='status-critical' primary label='删除' onClick={() => setOpen(false)} />
                <Button label='取消' onClick={() => setOpen(false)} />
              </Box>
            </Box>
          </Form>
        </Layer>
      )}
      <Box direction='row' align='center' gap='small' flex={false}>
        <Link href='/deviceProjects'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading>设备管理中台 - 工程设置</Heading>
      </Box>
      <Form>
        <FormField label='工程名'>
          <TextInput />
        </FormField>
        <FormField label='工程描述'>
          <TextArea />
        </FormField>
      </Form>
      <Box border={{ color: 'status-critical' }} round='xsmall' pad='small'>
        <Text size='large' color='status-critical'>危险区域</Text>
        <Box direction='row' align='center' justify='between'>
          <Text color='status-critical'>警告：工程被删除后无法恢复，请谨慎操作。</Text>
          <Button label='删除工程' color='status-critical' icon={<Trash />} primary onClick={() => setOpen(true)} />
        </Box>
      </Box>
    </Box>
  );
}