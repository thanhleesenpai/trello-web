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
function BoardBar() {
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
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      borderBottom: '1px solid white'
    }}>
      <Box sx= {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Thanhlee MERN Stack Board"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
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
              border: 'none'
            }
          }}
        >
          <Tooltip title="Thanhlee">
            <Avatar
              alt="Thanhlee"
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/291684198_614607523335861_3331449266675353218_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFFXKxwrftNs8Au6Znq-O5hAgDfZjkmLfECAN9mOSYt8cFiHbAxRg8FDgtcV2eXHg7d2wQ7-jf3OeLMwPlWb15Z&_nc_ohc=a0t9OoAOXE4Q7kNvgH32hVp&_nc_oc=AdiLaaNPwLO_RQdGfKWKaesvX-noN366C44HXvjuzZ-pDwp9DW-8kKY7Ml-Zvbu5NPO2-xodRQu2s8Nt3QhafIcU&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=Au2_8cKZvClmXxoxSIut7T2&oh=00_AYBtWDqbbKUtKCjIvZ1uL3PTa4Hsn9YI3N5BPA2La230dQ&oe=67CA096E" 
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
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/474687311_1694600067784757_3232080381320011114_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFXuioxTT1I6wh0AMNLPIpSmy35ORp039WbLfk5GnTf1fyEmGe2be5GZZLIUEMyH2LdGhDOyyqhvIPNTfBpYCri&_nc_ohc=JgUOW9LRwDkQ7kNvgG-VGlz&_nc_oc=AdhWlsqYUR3UO-_1apYQLHEQ3X5SLzv7Lfbu1ZQzk7FdvQHhl3oSCdgpNfx7GAqltvt0c6OUx0nXhO5_lw2OZYio&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ASJ1D8oH4QVCnSkTHbGgjCy&oh=00_AYANVq7bAYOuHVMMWhVjhjJRdukCYm_kCKdomOLnOcI21g&oe=67CCE561"
            />
          </Tooltip>
          <Tooltip title="KhanhToan">
            <Avatar
              alt="KhanhToan"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/474688289_1326782151678103_1272232622705946075_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFtcdZ0GWsUgVqR6GjAHuHHzoMD4zncyuzOgwPjOdzK7FvzHEAcs8A7SRUVjjpFGd_HvkLXxEDbJu0MZJAXc3FN&_nc_ohc=qMzUPpgpu6cQ7kNvgGiLDWd&_nc_oc=Adj5BK0RFJOwzzioev4rJupf4P-GpOTDstm-ZX2FftnXBjd0najOgpk1bOYWaEkVJ45Nk_QvbbOGn6wdT7FVd1GH&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AXAzl8mGWrPmAThAjOMLHPq&oh=00_AYAJf1hE-Oxup__qwmUrZisV-Nvgbosn7SSglNxyPOolJw&oe=67CCF565"
            />
          </Tooltip>
          <Tooltip title="TranLam">
            <Avatar
              alt="TranLam"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/480677852_1369986791025714_970050844027118170_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG3MaPCC69u6rp0fuxH9VSy1F7QqR_ekkTUXtCpH96SRM7mIf4vEWyLps49qND6LfmcpV8zp0aUmVgSZlFxutvI&_nc_ohc=znYBY5am4-wQ7kNvgHlaOlo&_nc_oc=AdhoMSLzoKk2KSFEv2sHSwq7sOQaXpQIq9AZW7Ge-MHYU7jriyWEmPR0evUc_Ozly2Dqh4Sl_vWscaWkM9-5mx06&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ao_aa9_BDrFztEGtcI9tt0Q&oh=00_AYA4Kd3iqVBXNyUxhrltMQhTQ30N6Zykae_l_NYdDps7dg&oe=67CCE0A9" 
            />
          </Tooltip>
          <Tooltip title="TienDat">
            <Avatar
              alt="TienDat"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/476341409_1674341143519440_7803849277311711667_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF2aTTEBVfS11w6Ypp38ZN3CtuWS9qUFBoK25ZL2pQUGr9cQoHycV6v_sAJQRy-EkX__kGTMp_UVZAvZ0MD-zbY&_nc_ohc=fncwupXj0RMQ7kNvgFDZkYX&_nc_oc=AdjL-guXHmLurU__Y6w8jYZ4v02LWNJ9cndVohd8C_bOfByNz67DI0irM2bf-ePdqPLDqhJx2FFKvY1_HUb7B87-&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AQ1IuAzllQcwLTk-KleRz2L&oh=00_AYAL1Py5a2O7GWq3JXd4AsDg5QO_n17pY9mYNMN8ArY3Xw&oe=67CCD35A" 
            />
          </Tooltip>
          <Tooltip title="KienDinh">
            <Avatar
              alt="KienDinh"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/475464602_1322215802151180_879203392921324708_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH0TXQhASz81HdtRcnN6rmZI74tOpD4bWwjvi06kPhtbApih216ncWM1xaJiFLhYBUoCzna6DLAxcB1GGMVyb-u&_nc_ohc=UIzgtUSMpY4Q7kNvgHPUMxk&_nc_oc=AdgN68dfoSBlgN9cfEXqJwDKuf_MJf7-DmQo4J4x4RiSGHjnKqJ2BLXYeg9py6gmEykDGFr96iaNdh8uIrcK7m7X&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ARrDWZyP9cul0KVNHVzdbTx&oh=00_AYDGJrkV7naB3kyVyfSKZvIrTT2Dz9K9UkboU_2mCZV4oQ&oe=67CCED30" 
            />
          </Tooltip>
          <Tooltip title="Thanhlee">
            <Avatar
              alt="Thanhlee"
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/291684198_614607523335861_3331449266675353218_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFFXKxwrftNs8Au6Znq-O5hAgDfZjkmLfECAN9mOSYt8cFiHbAxRg8FDgtcV2eXHg7d2wQ7-jf3OeLMwPlWb15Z&_nc_ohc=a0t9OoAOXE4Q7kNvgH32hVp&_nc_oc=AdiLaaNPwLO_RQdGfKWKaesvX-noN366C44HXvjuzZ-pDwp9DW-8kKY7Ml-Zvbu5NPO2-xodRQu2s8Nt3QhafIcU&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=Au2_8cKZvClmXxoxSIut7T2&oh=00_AYBtWDqbbKUtKCjIvZ1uL3PTa4Hsn9YI3N5BPA2La230dQ&oe=67CA096E" 
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
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/474687311_1694600067784757_3232080381320011114_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFXuioxTT1I6wh0AMNLPIpSmy35ORp039WbLfk5GnTf1fyEmGe2be5GZZLIUEMyH2LdGhDOyyqhvIPNTfBpYCri&_nc_ohc=JgUOW9LRwDkQ7kNvgG-VGlz&_nc_oc=AdhWlsqYUR3UO-_1apYQLHEQ3X5SLzv7Lfbu1ZQzk7FdvQHhl3oSCdgpNfx7GAqltvt0c6OUx0nXhO5_lw2OZYio&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ASJ1D8oH4QVCnSkTHbGgjCy&oh=00_AYANVq7bAYOuHVMMWhVjhjJRdukCYm_kCKdomOLnOcI21g&oe=67CCE561"
            />
          </Tooltip>
          <Tooltip title="KhanhToan">
            <Avatar
              alt="KhanhToan"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/474688289_1326782151678103_1272232622705946075_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFtcdZ0GWsUgVqR6GjAHuHHzoMD4zncyuzOgwPjOdzK7FvzHEAcs8A7SRUVjjpFGd_HvkLXxEDbJu0MZJAXc3FN&_nc_ohc=qMzUPpgpu6cQ7kNvgGiLDWd&_nc_oc=Adj5BK0RFJOwzzioev4rJupf4P-GpOTDstm-ZX2FftnXBjd0najOgpk1bOYWaEkVJ45Nk_QvbbOGn6wdT7FVd1GH&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AXAzl8mGWrPmAThAjOMLHPq&oh=00_AYAJf1hE-Oxup__qwmUrZisV-Nvgbosn7SSglNxyPOolJw&oe=67CCF565"
            />
          </Tooltip>
          <Tooltip title="TranLam">
            <Avatar
              alt="TranLam"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/480677852_1369986791025714_970050844027118170_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG3MaPCC69u6rp0fuxH9VSy1F7QqR_ekkTUXtCpH96SRM7mIf4vEWyLps49qND6LfmcpV8zp0aUmVgSZlFxutvI&_nc_ohc=znYBY5am4-wQ7kNvgHlaOlo&_nc_oc=AdhoMSLzoKk2KSFEv2sHSwq7sOQaXpQIq9AZW7Ge-MHYU7jriyWEmPR0evUc_Ozly2Dqh4Sl_vWscaWkM9-5mx06&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ao_aa9_BDrFztEGtcI9tt0Q&oh=00_AYA4Kd3iqVBXNyUxhrltMQhTQ30N6Zykae_l_NYdDps7dg&oe=67CCE0A9" 
            />
          </Tooltip>
          <Tooltip title="TienDat">
            <Avatar
              alt="TienDat"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/476341409_1674341143519440_7803849277311711667_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF2aTTEBVfS11w6Ypp38ZN3CtuWS9qUFBoK25ZL2pQUGr9cQoHycV6v_sAJQRy-EkX__kGTMp_UVZAvZ0MD-zbY&_nc_ohc=fncwupXj0RMQ7kNvgFDZkYX&_nc_oc=AdjL-guXHmLurU__Y6w8jYZ4v02LWNJ9cndVohd8C_bOfByNz67DI0irM2bf-ePdqPLDqhJx2FFKvY1_HUb7B87-&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AQ1IuAzllQcwLTk-KleRz2L&oh=00_AYAL1Py5a2O7GWq3JXd4AsDg5QO_n17pY9mYNMN8ArY3Xw&oe=67CCD35A" 
            />
          </Tooltip>
          <Tooltip title="KienDinh">
            <Avatar
              alt="KienDinh"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/475464602_1322215802151180_879203392921324708_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH0TXQhASz81HdtRcnN6rmZI74tOpD4bWwjvi06kPhtbApih216ncWM1xaJiFLhYBUoCzna6DLAxcB1GGMVyb-u&_nc_ohc=UIzgtUSMpY4Q7kNvgHPUMxk&_nc_oc=AdgN68dfoSBlgN9cfEXqJwDKuf_MJf7-DmQo4J4x4RiSGHjnKqJ2BLXYeg9py6gmEykDGFr96iaNdh8uIrcK7m7X&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ARrDWZyP9cul0KVNHVzdbTx&oh=00_AYDGJrkV7naB3kyVyfSKZvIrTT2Dz9K9UkboU_2mCZV4oQ&oe=67CCED30" 
            />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
