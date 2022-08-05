import { Box, Header, Select, Menu, Text, DropButton } from 'grommet';
import * as Icon from 'grommet-icons';
import { SidebarWindow } from './SidebarWindow';

export function HeaderBar() {
  return (
    <Header background='brand' pad='small'>
      <Box direction='row' gap='small' align='center'>
        <DropButton
          dropContent={<SidebarWindow />}
          dropProps={{ top: 'bottom' }}
        >
          <Icon.Menu />
        </DropButton>
        <Icon.Anchor />
        <Text size='large'>大晓AIoT PaaS平台</Text>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<Icon.User />} items={[ {label: '退出登录', icon: <Icon.Logout />, gap: 'small'} ]} />
    </Header>
  );
}