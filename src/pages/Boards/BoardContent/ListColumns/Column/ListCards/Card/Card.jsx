import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx= {{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/480410760_1211464580316816_6042682827588187168_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH_uPFcU26HV9IkNuRIh4fUX-9qqsim4txf72qqyKbi3NvHYAQCznlrg1NwGL1uNdZ1VBPgecNmmDa7dhh71JHC&_nc_ohc=Q2UP-ITO-gYQ7kNvgHS_xgT&_nc_oc=AdiJpW9nPttfgRo5YPelkYdgnCWV-wjDYLNhAodSRyxO-XIH69gMlY_a0uu2wBpn6YFMGoKAab9NysVyOrxaQRxP&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A8bKSa-HZ3os2QeWMKIbQtN&oh=00_AYBkW2vpFJwqYogHzzwe-y-y5CCM_3UUKgj6yA8RiButGA&oe=67CE3F88"
        title="green iguana"
      />
      <CardContent sx= {{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Thanhlee</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon/>}>20</Button>
        <Button size="small" startIcon={<CommentIcon/>}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card