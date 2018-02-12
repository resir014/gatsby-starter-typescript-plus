import * as React from 'react'
import * as classnames from 'classnames'

import * as styles from './Page.module.scss'

interface PageProps {
  className?: string
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <div className={classnames(styles.root, className)}>{children}</div>
)

export default Page
