import { Box, Header, Select, Menu, Button, DropButton } from 'grommet';
import * as Icon from 'grommet-icons';
import Link from 'next/link';
import { SidebarWindow } from './SidebarWindow';

export function HeaderBar() {
  return (
    <Header background='brand' pad='small'>
      <Box direction='row' gap='medium' align='center'>
        <DropButton
          dropContent={<SidebarWindow />}
          dropAlign={{ top: 'bottom', left: 'left' }}
        >
          <Box fill>
            <Icon.Menu size='large' />
          </Box>
        </DropButton>
        <Link href='/'>
          <Button plain icon={<Icon.Inherit />} label='大晓AIoT PaaS平台' />
        </Link>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<Icon.User />} items={[ {label: '退出登录', icon: <Icon.Logout />, gap: 'small'} ]} />
    </Header>
  );
}
