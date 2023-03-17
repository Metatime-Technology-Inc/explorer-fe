import { Flex } from '@chakra-ui/react';
import React from 'react';

import CodeEditorTab from './CodeEditorTab';

interface Props {
  tabs: Array<string>;
  activeTab: string;
  onTabSelect: (tab: string) => void;
  onTabClose: (tab: string) => void;
}

const CodeEditorTabs = ({ tabs, activeTab, onTabSelect, onTabClose }: Props) => {
  const tabsPathChunks = React.useMemo(() => {
    return tabs.map((tab) => tab.split('/'));
  }, [ tabs ]);

  return (
    <Flex
      bgColor="lightblue"
      borderBottomWidth="1px"
      borderColor="divider"
      flexWrap="wrap"
    >
      { tabs.map((tab) => (
        <CodeEditorTab
          key={ tab }
          path={ tab }
          isActive={ activeTab === tab }
          onClick={ onTabSelect }
          onClose={ onTabClose }
          isCloseDisabled={ tabs.length === 1 }
          tabsPathChunks={ tabsPathChunks }
        />
      )) }
    </Flex>
  );
};

export default React.memo(CodeEditorTabs);
