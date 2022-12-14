import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WithdrawalIcon from '@mui/icons-material/IosShare';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import  AnalyticsIcon  from '@mui/icons-material/Analytics';
import BuildIcon from '@mui/icons-material/Build';

export  default function MainListItems(){  
  return (
  <>
    <ListItemButton selected>
      <ListItemIcon  style={{ color: "white" }}>
        <AnalyticsIcon />
      </ListItemIcon>
      <ListItemText primary="Analysis" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <Inventory2Icon />
      </ListItemIcon>
      <ListItemText primary="Sub Admin" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <CurrencyExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Token" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="KYC" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Wallet" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <WithdrawalIcon />
      </ListItemIcon>
      <ListItemText primary="Withdrawals" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{ color: "white" }}>
        <HelpCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItemButton>
  </>
  )
};

