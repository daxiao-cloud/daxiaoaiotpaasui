import { Box, Heading, List, Text, Button, Layer, Form, FormField, TextInput, TextArea } from 'grommet';
import { Apps, Configure, LinkNext, Add } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  { name: 'test0', appid: '12341234', desc: '测试app0' },
  { name: 'test11111', appid: '12341234', desc: '测试app11' },
  { name: 'a', appid: '12341234', desc: '测试app1234' },
];

export function ContentWindowApps() {
  const [open, setOpen] = useState();
  return (
    <Box margin='small' overflow='auto'>
      {open && (
        <Layer position='top' onClickOutside={() => setOpen(false)}>
          <Form>
            <Box width='medium' gap='small' margin='medium'>
              <Box direction='row' align='center' gap='small'>
                <Add size='large' />
                <Heading>添加应用</Heading>
              </Box>
              <FormField label='应用名'>
                <TextInput />
              </FormField>
              <FormField label='应用描述'>
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
        <Heading>设备管理中台 - 应用列表</Heading>
        <Button primary label='添加应用' icon={<Add />} onClick={() => setOpen(true)} />
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Apps />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Text>{datum.appid}</Text>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
            <Box direction='row' gap='small' align='center'>
              <Link href='/deviceAppSetting'>
                <Button icon={<Configure />} />
              </Link>
              <Link href='/deviceProjects'>
                <Button icon={<LinkNext />} />
              </Link>
            </Box>
          </Box>
        )}
      </List>
    </Box>
  );
}