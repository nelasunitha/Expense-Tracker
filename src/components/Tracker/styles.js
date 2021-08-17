import { makeStyles } from "@material-ui/core";

export default makeStyles(()=> ({
  income: {
    borderBlock: '10px solid rgba(0,255,0,0.5)',
    borderRadius:"75px",
    padding: '20px',
    width: '100%',
    maxWidth: '350px',
    margin: '100px auto'
  },
  expenses: {
    borderBlock: '10px solid rgba(255,0,0,0.5)',
    borderRadius:"75px",
    padding: '20px',
    width: '100%',
    maxWidth: '350px',
    margin: '100px auto'

  },
  welcome: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'spaceBetween',
    margin: 0,
    textShadow: '0px 5px 3px #292929'
},
latestTrasactions: {
    margin: '10px 0 0 0',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

}
}))