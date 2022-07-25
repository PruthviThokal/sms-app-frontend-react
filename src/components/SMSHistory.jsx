import React from 'react';
import './Client.css';
import moment from 'moment'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const SMSHistory = (props) => {
    console.log("props", props);
    const {image, message, number, name, createdAt} = props.sms;
  return (
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/worry-indian-farmer-standing-hand-folded-his-healthy-wheat-field-174017946.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', width:"20px" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Message -- 
              </Typography>
              {message} <br></br>
              Time -- {moment(createdAt).format('DD/MM/YYYY hh:mm:ss')}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}

export default SMSHistory;

