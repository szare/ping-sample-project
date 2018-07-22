import * as React from 'react';
// import ClientEditor from './Test';
// import Hello from '../containers/Hello';
// import Button from '@material-ui/core/Button';
import {FriendList} from './FormikSample';

class HomePage extends React.Component {
    public render() {
        return (
            <div>
                {/* <ClientEditor /> */}
                {/* <Hello />,
                <Button variant="contained" color="primary">
                    Hello World
    </Button> */}
                <FriendList />
            </div>
        );
    }
}

export default HomePage; 