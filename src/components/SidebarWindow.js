import { Box, Anchor, Accordion, AccordionPanel } from 'grommet';

export function SidebarWindow() {
  return (
    <Box width='medium' gap='small' margin='small'>
      <Accordion>
        <AccordionPanel label='互联网产品'>
          <Box pad='small' gap='small'>
            <Anchor label='登录中台' />
          </Box>
        </AccordionPanel>
        <AccordionPanel label='IoT产品'>
          <Box pad='small' gap='small'>
            <Anchor label='OTA中台' />
            <Anchor label='设备管理中台' />
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
}