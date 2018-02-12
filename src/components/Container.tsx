import * as React from 'react'
import * as classnames from 'classnames'

import * as styles from './Container.module.scss'

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <div className={classnames(styles.root, className)}>{children}</div>
)

export default Container
