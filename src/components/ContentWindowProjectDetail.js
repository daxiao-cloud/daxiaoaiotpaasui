import { Box, Heading, List, Text, Button } from 'grommet';
import { Apps, Configure, LinkPrevious } from 'grommet-icons';

const data = [
  { name: 'testproj0', appid: '12341234', desc: '测试project0' },
  { name: 'testproj1', appid: '12341234', desc: '测试project1' },
  { name: 'testproj1', appid: '12341234', desc: '测试project2' },
];

export function ContentWindowProjectDetail() {
  return (
    <Box margin='small' flex overflow='auto' gap='medium'>
      <Box direction='row' align='center' gap='small'>
        <Button icon={<LinkPrevious />} href='/' />
        <Heading margin='none'>设备管理中台 - 工程详情</Heading>
      </Box>
      <List data={data}>
        {(datum) => (
          <Box direction='row' gap='small' justify='between' align='center'>
            <Apps />
            <Text weight='bold'>{datum.name}</Text>
            <Text>{datum.appid}</Text>
            <Text>{datum.desc}</Text>
            <Button icon={<Configure />} href={`/${process.env.NEXT_PUBLIC_ANALYTICS_ID}/deviceProject`} />
          </Box>
        )}
      </List>
    </Box>
  );
}