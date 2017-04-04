import React from 'react'

import styles from './template.scss'

export default function Template(props) {
  return (
    <p className={styles.template}>{props.greeting}</p>
  )
}

Template.propTypes = {
  greeting: React.PropTypes.string
};
