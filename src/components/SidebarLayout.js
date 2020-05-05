import React from 'react'
import Chrome from 'src/components/chrome/Chrome'

import {
  // @ts-ignore
  EuiFlexGroup,
  // @ts-ignore
  EuiFlexItem,
} from '@elastic/eui'


export default ({ sidebar, content }) => (
	<Chrome>
		<EuiFlexGroup>
		  <EuiFlexItem>
	    	{ content }
		  </EuiFlexItem>
		  <EuiFlexItem grow={ false  }>
		  	{ sidebar }
		  </EuiFlexItem>
		</EuiFlexGroup>
	</Chrome>
)
