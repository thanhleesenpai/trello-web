import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar({ board }) {
  return (
    <Box sx={{
      width:'100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
    }}>
      <Box sx= {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={ board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx = {MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx= {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { border: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="Thanhlee">
            <Avatar
              alt="Thanhlee"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/291684198_614607523335861_3331449266675353218_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFFXKxwrftNs8Au6Znq-O5hAgDfZjkmLfECAN9mOSYt8cFiHbAxRg8FDgtcV2eXHg7d2wQ7-jf3OeLMwPlWb15Z&_nc_ohc=wpCNmMm1dd4Q7kNvgGzD9gx&_nc_oc=AdlnIWF6eEqU4oN6OGy4i8LqjyBCNB835k_geaoVpw6n4oNaAr9okjMU-DySIMm6dGTBMbZH9QgO_BOrMvIXIhf9&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Wo4_w4UujbRWUAYiOvl69w&oh=00_AYEpRsJHD1uTs2WJi4Hbt7NRjVPwXfeo3ahNWTNoYh0Ang&oe=67E8942E"
            />
          </Tooltip>
          <Tooltip title="MinhHang">
            <Avatar
              alt="MinhHang"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/125847785_1101886750243166_2937152146556819847_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE9f1weYqdbu5jsaqvsMv9gSjkNGdBtNDlKOQ0Z0G00OWM0WNJlDVfznmPaIfe01s3Ro3ca54_snBDynVW-hzTE&_nc_ohc=Tu6xW15-dvEQ7kNvgG2YM-U&_nc_oc=Adi-Yx76lsTBwKnEuCh6jax2ogFO9mG8XZ7NnWeIXu-ehSUEcurTtdYPlvnfcon94DRvKKiC1-MCRtb32Kz1_DlG&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ALQKnTHP9RXmbkPxl6s6fed&oh=00_AYAGsZJqoV2rUfmPoMwDZslhmc1Jxz4yic0stovj4aY20Q&oe=67EE88B3"
            />
          </Tooltip>
          <Tooltip title="HaiSon">
            <Avatar
              alt="HaiSon"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/474687311_1694600067784757_3232080381320011114_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFXuioxTT1I6wh0AMNLPIpSmy35ORp039WbLfk5GnTf1fyEmGe2be5GZZLIUEMyH2LdGhDOyyqhvIPNTfBpYCri&_nc_ohc=kvo7p3DvhSIQ7kNvgG6AhAb&_nc_oc=Adk379_Jw8BXTIS4K8D3mjXGfB1Y3XTdE4gsYIZglMPwGLXVy2rBHKEHaQxTnox1_8P3rlPfV9JctiE3W8qdWDRd&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=77n7mdXaR66VF8Al86jD4g&oh=00_AYFy8f2IRPjoBL1X_QpzKMNnJmRjX3YFBKgrs3jYhWrhmQ&oe=67E894E1"
            />
          </Tooltip>
          <Tooltip title="KhanhToan">
            <Avatar
              alt="KhanhToan"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/474688289_1326782151678103_1272232622705946075_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFtcdZ0GWsUgVqR6GjAHuHHzoMD4zncyuzOgwPjOdzK7FvzHEAcs8A7SRUVjjpFGd_HvkLXxEDbJu0MZJAXc3FN&_nc_ohc=mN0deXJmoCwQ7kNvgFtFjVq&_nc_oc=Adn9QdsBmD_Px5nrQDKRYKY4uezZzZUekLNDoxzujP9LLCUuOKMIErengdPLHB7ZGgIxbz7bsuJeMnhLwTWIM8KW&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=IT1NJEg1gq5QsYZkwKO2Rw&oh=00_AYHu7USHySmC_14Xcz2LtbwDEpvwwna1wIDyxh9wlK7TXg&oe=67E8A4E5"
            />
          </Tooltip>
          <Tooltip title="TranLam">
            <Avatar
              alt="TranLam"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/480677852_1369986791025714_970050844027118170_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG3MaPCC69u6rp0fuxH9VSy1F7QqR_ekkTUXtCpH96SRM7mIf4vEWyLps49qND6LfmcpV8zp0aUmVgSZlFxutvI&_nc_ohc=QKAgglDGknQQ7kNvgEF0u54&_nc_oc=Adl1toWRhw8_gfVt5DeD2WFgbgDLnqw3sFJCveucCMIhGkPfcz2_MTiSBWs0fPodcb1qMm2nWBjNUL_thkNnAaiR&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=QGUCBvm92F8V-dgjL-pphg&oh=00_AYF981DmzfO7yqtF64f732JeCDX61Nbv_K4putSqRn1n1A&oe=67E89029"
            />
          </Tooltip>
          <Tooltip title="TienDat">
            <Avatar
              alt="TienDat"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/482274166_1695889111364643_6695710775196990699_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFYI2tTZO2JzTGkQmVldSr9b9v2O6rb5Khv2_Y7qtvkqIuRDFyXGLpoLL2fpdB3TVcS80S_VFML7VfwyBvdV73k&_nc_ohc=vem1dQF4ZCYQ7kNvgEcajNV&_nc_oc=Adm4uEYjtT8zc40D-p1DxZGuOlr2GMvmQdkvC-f_My_dCk96es61c1daGTwIYNRqnY1Xv-rdECuNzJWNOt-75iUi&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=gMg98g9ahaiVZWlBpYb_FQ&oh=00_AYFg9MP3Lgyxv8HdCWX0-rmTKmOw7csWaYcd307y0TNk8g&oe=67E88CDF"
            />
          </Tooltip>
          <Tooltip title="KienDinh">
            <Avatar
              alt="NguyenChien"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/283396385_691227682134756_7619514869970132687_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHowfjNeNejDc1zI1dxEQV2r9IfK4NSvMOv0h8rg1K8w7z18Ws91GhjR-YjO6SqMo_dWzEPZEBWbV2dtESmHiUp&_nc_ohc=WNW29YdPv4gQ7kNvgHAg2aD&_nc_oc=AdnSP5gh096MPZG0OBxRWmmAyYV466tIp3mpI5Lv9SL1wJIJeXxFAz9Q-kVpV0aKvqfuuPyt1Z-6-LkDmlF95CaO&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=uSc-LjcFTnMOiJ_I1qKCOA&oh=00_AYGmLzNOp4lfdFnfJQpw0983mjl6NR0m5diG1c-kqfZ6BQ&oe=67E89D73"
            />
          </Tooltip>
          <Tooltip title="Thanhlee">
            <Avatar
              alt="Thanhlee"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/291684198_614607523335861_3331449266675353218_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFFXKxwrftNs8Au6Znq-O5hAgDfZjkmLfECAN9mOSYt8cFiHbAxRg8FDgtcV2eXHg7d2wQ7-jf3OeLMwPlWb15Z&_nc_ohc=wpCNmMm1dd4Q7kNvgGzD9gx&_nc_oc=AdlnIWF6eEqU4oN6OGy4i8LqjyBCNB835k_geaoVpw6n4oNaAr9okjMU-DySIMm6dGTBMbZH9QgO_BOrMvIXIhf9&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Wo4_w4UujbRWUAYiOvl69w&oh=00_AYEpRsJHD1uTs2WJi4Hbt7NRjVPwXfeo3ahNWTNoYh0Ang&oe=67E8942E"
            />
          </Tooltip>
          <Tooltip title="MinhHang">
            <Avatar
              alt="MinhHang"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/125847785_1101886750243166_2937152146556819847_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE9f1weYqdbu5jsaqvsMv9gSjkNGdBtNDlKOQ0Z0G00OWM0WNJlDVfznmPaIfe01s3Ro3ca54_snBDynVW-hzTE&_nc_ohc=Tu6xW15-dvEQ7kNvgG2YM-U&_nc_oc=Adi-Yx76lsTBwKnEuCh6jax2ogFO9mG8XZ7NnWeIXu-ehSUEcurTtdYPlvnfcon94DRvKKiC1-MCRtb32Kz1_DlG&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ALQKnTHP9RXmbkPxl6s6fed&oh=00_AYAGsZJqoV2rUfmPoMwDZslhmc1Jxz4yic0stovj4aY20Q&oe=67EE88B3"
            />
          </Tooltip>
          <Tooltip title="HaiSon">
            <Avatar
              alt="HaiSon"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/474687311_1694600067784757_3232080381320011114_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFXuioxTT1I6wh0AMNLPIpSmy35ORp039WbLfk5GnTf1fyEmGe2be5GZZLIUEMyH2LdGhDOyyqhvIPNTfBpYCri&_nc_ohc=kvo7p3DvhSIQ7kNvgG6AhAb&_nc_oc=Adk379_Jw8BXTIS4K8D3mjXGfB1Y3XTdE4gsYIZglMPwGLXVy2rBHKEHaQxTnox1_8P3rlPfV9JctiE3W8qdWDRd&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=77n7mdXaR66VF8Al86jD4g&oh=00_AYFy8f2IRPjoBL1X_QpzKMNnJmRjX3YFBKgrs3jYhWrhmQ&oe=67E894E1"
            />
          </Tooltip>
          <Tooltip title="KhanhToan">
            <Avatar
              alt="KhanhToan"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/474688289_1326782151678103_1272232622705946075_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFtcdZ0GWsUgVqR6GjAHuHHzoMD4zncyuzOgwPjOdzK7FvzHEAcs8A7SRUVjjpFGd_HvkLXxEDbJu0MZJAXc3FN&_nc_ohc=mN0deXJmoCwQ7kNvgFtFjVq&_nc_oc=Adn9QdsBmD_Px5nrQDKRYKY4uezZzZUekLNDoxzujP9LLCUuOKMIErengdPLHB7ZGgIxbz7bsuJeMnhLwTWIM8KW&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=IT1NJEg1gq5QsYZkwKO2Rw&oh=00_AYHu7USHySmC_14Xcz2LtbwDEpvwwna1wIDyxh9wlK7TXg&oe=67E8A4E5"
            />
          </Tooltip>
          <Tooltip title="TranLam">
            <Avatar
              alt="TranLam"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/480677852_1369986791025714_970050844027118170_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG3MaPCC69u6rp0fuxH9VSy1F7QqR_ekkTUXtCpH96SRM7mIf4vEWyLps49qND6LfmcpV8zp0aUmVgSZlFxutvI&_nc_ohc=QKAgglDGknQQ7kNvgEF0u54&_nc_oc=Adl1toWRhw8_gfVt5DeD2WFgbgDLnqw3sFJCveucCMIhGkPfcz2_MTiSBWs0fPodcb1qMm2nWBjNUL_thkNnAaiR&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=QGUCBvm92F8V-dgjL-pphg&oh=00_AYF981DmzfO7yqtF64f732JeCDX61Nbv_K4putSqRn1n1A&oe=67E89029"
            />
          </Tooltip>
          <Tooltip title="TienDat">
            <Avatar
              alt="TienDat"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/482274166_1695889111364643_6695710775196990699_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFYI2tTZO2JzTGkQmVldSr9b9v2O6rb5Khv2_Y7qtvkqIuRDFyXGLpoLL2fpdB3TVcS80S_VFML7VfwyBvdV73k&_nc_ohc=vem1dQF4ZCYQ7kNvgEcajNV&_nc_oc=Adm4uEYjtT8zc40D-p1DxZGuOlr2GMvmQdkvC-f_My_dCk96es61c1daGTwIYNRqnY1Xv-rdECuNzJWNOt-75iUi&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=gMg98g9ahaiVZWlBpYb_FQ&oh=00_AYFg9MP3Lgyxv8HdCWX0-rmTKmOw7csWaYcd307y0TNk8g&oe=67E88CDF"
            />
          </Tooltip>
          <Tooltip title="KienDinh">
            <Avatar
              alt="NguyenChien"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/283396385_691227682134756_7619514869970132687_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHowfjNeNejDc1zI1dxEQV2r9IfK4NSvMOv0h8rg1K8w7z18Ws91GhjR-YjO6SqMo_dWzEPZEBWbV2dtESmHiUp&_nc_ohc=WNW29YdPv4gQ7kNvgHAg2aD&_nc_oc=AdnSP5gh096MPZG0OBxRWmmAyYV466tIp3mpI5Lv9SL1wJIJeXxFAz9Q-kVpV0aKvqfuuPyt1Z-6-LkDmlF95CaO&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=uSc-LjcFTnMOiJ_I1qKCOA&oh=00_AYGmLzNOp4lfdFnfJQpw0983mjl6NR0m5diG1c-kqfZ6BQ&oe=67E89D73"
            />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
