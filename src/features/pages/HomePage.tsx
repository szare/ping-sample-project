import * as React from 'react';
// import ClientEditor from './Test';
import Hello from '../containers/Hello';

class HomePage extends React.Component {
    public render() {
      return (
            <div>
                {/* <ClientEditor /> */}
                <Hello/>,
            </div>
        );
    }
}

export default HomePage; 