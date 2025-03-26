import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt="Thanhle"
            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/291684198_614607523335861_3331449266675353218_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFFXKxwrftNs8Au6Znq-O5hAgDfZjkmLfECAN9mOSYt8cFiHbAxRg8FDgtcV2eXHg7d2wQ7-jf3OeLMwPlWb15Z&_nc_ohc=wpCNmMm1dd4Q7kNvgGzD9gx&_nc_oc=AdlnIWF6eEqU4oN6OGy4i8LqjyBCNB835k_geaoVpw6n4oNaAr9okjMU-DySIMm6dGTBMbZH9QgO_BOrMvIXIhf9&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Wo4_w4UujbRWUAYiOvl69w&oh=00_AYEpRsJHD1uTs2WJi4Hbt7NRjVPwXfeo3ahNWTNoYh0Ang&oe=67E8942E"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }}/> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }}/> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles