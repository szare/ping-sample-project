import * as React from 'react';

interface IProps {
    text: string;
    age?: number;
}

interface IState {
    email: string;
    name: string;
}

export default class Form extends React.Component<IProps, IState> {
    public state: IState = {
        name: '',
        email: ''
    }
   public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // const { name, value }: any = e.target;
        const {value }: any = e.target;
        this.setState({
            'name': value
        });
    }
    public render() {
        const { text } = this.props;
        const { name } = this.state;
        return (
            <div>
                {text}
                <input name="name" value={name} onChange={this.handleChange} />
            </div>
        );
    }
}
