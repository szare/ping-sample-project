import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators,} from 'redux';
// import * from '../../actions';

// import { Dispatch} from 'redux';
const actions = {
  updateClientName: (): boolean => true,
  updateClientAge: (): boolean => true,
};

interface IProps extends IStateProps, IDispatchProps{
  isEditing: boolean;
}

const ClientEditor =(props: IProps): JSX.Element => (
  <div>
    <input value={props.name}/> <button onClick={props.updateClientName}> update Name </button>
    <input value={props.age}/> <button onClick={props.updateClientAge}> update age </button>
    </div>
);

interface IStateProps{
  name: string;
  age: number;
}

const mapStateToProps = (state: any): IStateProps => ({ 
  name: state.name,
  age: state.age,
 });

 interface IDispatchProps{
   updateClientName: typeof actions.updateClientName;
   updateClientAge: typeof actions.updateClientAge;
 }

const mapDispatchToProps = (dispatch: any): IDispatchProps =>({
 ...bindActionCreators({ 
   ...actions,
 }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientEditor);