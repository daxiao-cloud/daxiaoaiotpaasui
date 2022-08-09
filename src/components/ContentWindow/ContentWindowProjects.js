import { Box, Heading, List, Text, Button, Layer, Form, FormField, TextInput, TextArea } from 'grommet';
import { Projects, Configure, LinkPrevious, LinkNext, Add } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  { name: 'testproj0', appid: '12341234', desc: '测试project0' },
  { name: 'testproj1111', appid: '12341234', desc: '测试project1' },
  { name: 'abc', appid: '12341234', desc: '测试project2' },
];

export function ContentWindowProjects() {
  const [open, setOpen] = useState();
  return (
    <Box margin='small' flex overflow='auto'>
      {open && (
        <Layer position='top' onClickOutside={() => setOpen(false)}>
          <Form>
            <Box width='medium' gap='small' margin='medium'>
              <Box direction='row' align='center' gap='small'>
                <Add size='large' />
                <Heading>添加工程</Heading>
              </Box>
              <FormField label='工程名'>
                <TextInput />
              </FormField>
              <FormField label='工程描述'>
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
          <Link href='/'>
            <Button icon={<LinkPrevious />} />
          </Link>
          <Heading>设备管理中台 - 工程列表</Heading>
        </Box>
        <Button primary label='添加工程' icon={<Add />} onClick={() => setOpen(true)} />
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' align='center'>
            <Box direction='row' gap='small' align='center' width='medium'>
              <Projects />
              <Text weight='bold'>{datum.name}</Text>
            </Box>
            <Text>{datum.appid}</Text>
            <Box flex>
              <Text>{datum.desc}</Text>
            </Box>
            <Box direction='row' gap='small' align='center'>
              <Link href='/deviceProjectSetting'>
                <Button icon={<Configure />} />
              </Link>
              <Link href='/deviceGroups'>
                <Button icon={<LinkNext />} />
              </Link>
            </Box>
          </Box>
        )}
      </List>
    </Box>
  );
}