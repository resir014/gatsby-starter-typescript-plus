import * as React from 'react'
import * as classnames from 'classnames'

import * as styles from './LayoutMain.module.scss'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <main className={classnames(styles.root, className)}>{children}</main>
)

export default LayoutMain
