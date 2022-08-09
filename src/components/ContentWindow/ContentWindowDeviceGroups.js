import { Box, Heading, Button, Text, List, Layer, Form, FormField, TextInput, TextArea } from 'grommet';
import { Device, LinkPrevious, LinkNext, Configure, Add } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  { name: 'deviceGroup0', desc: '金乌1号' },
  { name: 'deviceGroup1111111', desc: '金乌2号' },
  { name: 'abc', desc: '金乌3号, 用来测试用来测试。' },
];

export function ContentWindowDeviceGroups() {
  const [open, setOpen] = useState();
  return (
    <Box margin='small' flex overflow='auto'>
      {open && (
        <Layer position='top' onClickOutside={() => setOpen(false)}>
          <Form>
            <Box width='medium' gap='small' margin='medium'>
              <Box direction='row' align='center' gap='small'>
                <Add size='large' />
                <Heading>添加设备组</Heading>
              </Box>
              <FormField label='设备组名'>
                <TextInput />
              </FormField>
              <FormField label='设备组描述'>
                <TextArea />
              </FormField>
              <Box direction='row' gap='small' justify='center'>
                <Button primary label='确定' onClick={() => setOpen(false)} />
                <Button label='取消' onClick={() => setOpen(false)} />
              </Box>
            </Box>
          </Form>
        </Layer>
      )}
      <Box direction='row' align='center' justify='between' flex={false}>
        <Box direction='row' align='center' gap='small'>
          <Link href='/deviceProjects'>
            <Button icon={<LinkPrevious />} />
          </Link>
          <Heading>设备管理中台 - 设备组列表</Heading>
        </Box>
        <Button primary label='添加设备组' icon={<Add />} onClick={() => setOpen(true)} />
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Device />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
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