import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WithdrawalIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import  AnalyticsIcon  from '@mui/icons-material/Analytics';
import BuildIcon from '@mui/icons-material/Build';
import StorefrontIcon from '@mui/icons-material/Storefront';

export  default function MainListItems(){  
  return (
  <>
    <ListItemButton component={Link} to='/dashboard'>
      <ListItemIcon  sx={{ color: "white" }}>
        <AnalyticsIcon />
      </ListItemIcon>
      <ListItemText primary="Analysis" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon sx={{ color: "white" }}>
        <Inventory2Icon />
      </ListItemIcon>
      <ListItemText primary="Sub Admin" />
    </ListItemButton> */}
    <ListItemButton component={Link} to='/user'>
      <ListItemIcon sx={{ color: "white" }}>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton component={Link} to='/token'>
      <ListItemIcon sx={{ color: "white" }}>
        <CurrencyExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Token" />
    </ListItemButton>
    <ListItemButton component={Link} to='/kyc'>
      <ListItemIcon sx={{ color: "white" }}>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="KYC" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ color: "white" }}>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Wallet" />
    </ListItemButton>
    <ListItemButton component={Link} to='/deposit'>
      <ListItemIcon sx={{ color: "white" }}>
        <SaveAltIcon />
      </ListItemIcon>
      <ListItemText primary="Deposits" />
    </ListItemButton>
    <ListItemButton component={Link} to='/withdraw'>
      <ListItemIcon sx={{ color: "white" }}>
        <WithdrawalIcon />
      </ListItemIcon>
      <ListItemText primary="Withdrawals" />
    </ListItemButton>
    <ListItemButton component={Link} to='/order'>
      <ListItemIcon sx={{ color: "white" }}>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton component={Link} to='/report'>
      <ListItemIcon sx={{ color: "white" }}>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton component={Link} to='/support'>
      <ListItemIcon sx={{ color: "white" }}>
        <HelpCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItemButton>
  </>
  )
};

