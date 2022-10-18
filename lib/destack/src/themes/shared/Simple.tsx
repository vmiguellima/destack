import React from 'react'

import { useNode } from '@craftjs/core'

export const ContainerSimple = ({ children }) => {
  const { connectors } = useNode((node) => ({ node }))

  return <div ref={(ref) => connectors.connect(ref as HTMLElement)}>{children}</div>
}

ContainerSimple.craft = {
  displayName: 'Container',
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {},
}
