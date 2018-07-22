import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withRoot from '../pages/withRoot';
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
class PWPaper extends React.Component<WithStyles<'root'>> {
  public render() {
    return (
      <div>
        <Paper className={this.props.classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
        </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
        </Typography>
        </Paper>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(PWPaper));
