import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WavesIcon from '@material-ui/icons/Waves';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BusinessIcon from '@material-ui/icons/Business';
import LaptopIcon from '@material-ui/icons/Laptop';
import StorageIcon from '@material-ui/icons/Storage';
import WarningIcon from '@material-ui/icons/Warning';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const drawerWidth = 285;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    height: '100%'
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#1DD9B1',
    color: '#000'
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  itens:{
    marginBottom:'0.5px',
  },
  
  link: {
    textDecoration: "none",
    color: '#000'
 },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [openContas, setOpenContas] = useState(false)
  const [openContratos, setOpenContratos] = useState(false)
  const [openPainel, setOpenPainel] = useState(false)

  const handleClickContas= () => {
    setOpenContas(!openContas);
    setOpenContratos(false);
    setOpenPainel(false);

  };
  const handleClickContratos= () => {
    setOpenContratos(!openContratos);
    setOpenContas(false);
    setOpenPainel(false);
  };
  const handleClickPainel= () => {
    setOpenPainel(!openPainel);
    setOpenContratos(false);
    setOpenContas(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >       
        <Divider />
        <List>
            <ListItem button  className={classes.itens} >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <div>
                <ListItemText primary="Usuario" style={{marginRight:'12px'}} />
                <ListItemText secondary="(Administrador)"/>
              </div>
            </ListItem>
            <Divider />
            <Link to='/' className={classes.link} > 
              <ListItem button className={classes.itens}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>

            <ListItem button onClick={handleClickContas} className={classes.itens}>
              <ListItemIcon>
                  <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Cadastro Contas" />
              {openContas ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openContas} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to='/contas_energia' className={classes.link}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <FlashOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Energia" />
                  </ListItem>
                </Link>

                <Link to='/contas_agua' className={classes.link}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <WavesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Água" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to='/unidade' className={classes.link} >
              <ListItem button className={classes.itens}>
                <ListItemIcon>
                  <ApartmentIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastro Unidades" />
              </ListItem>
            </Link>

            <ListItem button onClick={handleClickContratos} className={classes.itens}>
              <ListItemIcon>
                  <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary="Cadastro Contratos" />
              {openContratos ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openContratos} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to='/contrato_energia' className={classes.link} >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <FlashOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Energia" />
                  </ListItem>
                </Link>

                <Link to='/contrato_agua' className={classes.link} >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <WavesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Água" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to='/concessionaria' className={classes.link} >
              <ListItem button className={classes.itens}>
                <ListItemIcon>
                  <BusinessIcon/>
                </ListItemIcon>
                <ListItemText primary="Cadastro Concessionária" />
              </ListItem>
            </Link>

            <ListItem button className={classes.itens}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Relátorios" />
            </ListItem>

            <ListItem button onClick={handleClickPainel} className={classes.itens}>
              <ListItemIcon>
                  <LaptopIcon />
              </ListItemIcon>
              <ListItemText primary="Painel de Controle" />
              {openPainel ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openPainel} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

                <ListItem  button className={classes.nested}>
                  <ListItemIcon>
                    <LayersIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quadro Unidades" />
                </ListItem>

                <ListItem  button className={classes.nested}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Quadro Contratos" />
                </ListItem>

                <ListItem  button className={classes.nested}>
                  <ListItemIcon>
                    <LayersIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quadro Concessionária" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.itens}>
              <ListItemIcon>
                <WarningIcon />
              </ListItemIcon>
              <ListItemText primary="Alertas" />
            </ListItem>

            <ListItem button className={classes.itens}>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Log" />
            </ListItem>

            <ListItem button className={classes.itens}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Configuração" />
            </ListItem>
            
        </List>
        <Link to='/' className={classes.link} style={{width: '100px', margin: '1px auto', textAlign:'center'}}>
          <Button size="small" color="#000" >Sair</Button>
        </Link>
      </Drawer>
    </div>
  );
}

