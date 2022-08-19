import { Box, Heading, Text, Button, Form, FormField, TextArea, TextInput, Layer, CheckBox } from 'grommet';
import { LinkPrevious, Trash } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

export function ContentWindowDeviceGroupSetting() {
  const [open, setOpen] = useState();
  return (
    <Box margin='small' overflow='auto'>
      {open && (
        <Layer position='top' onClickOutside={() => setOpen(false)}>
          <Form>
            <Box width='medium' gap='small' margin='medium'>
              <Box direction='row' align='center' gap='small'>
                <Trash size='large' />
                <Heading>删除设备组</Heading>
              </Box>
              <Text color='status-critical'>警告：设备组删除后无法恢复，且该设备组里的设备将无法注册。请确认是否要继续操作。</Text>
              <Box direction='row' gap='small' justify='center'>
                <Button color='status-critical' primary label='删除' onClick={() => setOpen(false)} />
                <Button label='取消' onClick={() => setOpen(false)} />
              </Box>
            </Box>
          </Form>
        </Layer>
      )}
      <Box direction='row' align='center' gap='small' flex={false}>
        <Link href='/deviceGroups'>
          <Button icon={<LinkPrevious />} />
        </Link>
        <Heading>设备管理中台 - 设备组设置</Heading>
      </Box>
      <Form>
        <FormField label='设备组名'>
          <TextInput />
        </FormField>
        <FormField label='设备组描述'>
          <TextArea />
        </FormField>
        <FormField label='禁用'>
          <CheckBox />
        </FormField>
        <FormField label='设备组ID'>
          <TextInput value='E49A383B-C37E-1322-CEC9-74CCE97FEB0D' />
        </FormField>
        <FormField label='设备组Key'>
          <TextInput value='EC36948DFBB26815585ABD5E9375D934' />
        </FormField>
        <FormField label='创建时间'>
          <TextInput value='2022/8/19 17:55' />
        </FormField>
      </Form>
      <Box border={{ color: 'status-critical' }} round='xsmall' pad='small'>
        <Text size='large' color='status-critical'>危险区域</Text>
        <Box direction='row' align='center' justify='between'>
          <Text color='status-critical'>警告：设备组被删除后无法恢复，请谨慎操作。</Text>
          <Button label='删除设备组' color='status-critical' icon={<Trash />} primary onClick={() => setOpen(true)} />
        </Box>
      </Box>
    </Box>
  );
}