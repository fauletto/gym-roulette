import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://frankauletto.dev/">
        Frank Auletto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;