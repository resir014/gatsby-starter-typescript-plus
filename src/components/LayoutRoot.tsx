import * as React from 'react'
import * as classnames from 'classnames'

import * as styles from './LayoutRoot.module.scss'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <div className={classnames(styles.root, className)}>{children}</div>
)

export default LayoutRoot
