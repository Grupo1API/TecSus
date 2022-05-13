import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from '../../components/menu'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditAgua from "../formAgua/index";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from '@material-ui/icons/Info';
import InfoAgua from "../infoAgua";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      
    },
    body: {
      backgroundColor: "#fff",
    },
    button: {
      display: "flex",
    },
    modal: {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "rgba(0, 0, 0,0.5)",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "190vh",
    },
    close: {
      position: "absolute",
      top: "1em",
      right: "25em",
      color: "#fff",
    },
  });
  

export default function QuadroContratoAgua() {
  const classes = useStyles();
  const [listaAguas, setListaAguas] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false)
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaAgua();
  }, []);

  async function listaAgua() {
    try {
      const response = await fetch(
        "http://localhost:8080/contratoagua",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaAguas(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    const data ={
        id:id
    }
    await fetch(`http://localhost:8080/contratoagua/excluir`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    listaAgua();
  }

  function handleClose(event) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false)
  }

  return (
    <div>
      <Menu/>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Numero Fornecimento</StyledTableCell>
            <StyledTableCell align="left">CNPJ/CPF Concessionaria</StyledTableCell>
            <StyledTableCell align="left">Concessionaria</StyledTableCell>            
            <StyledTableCell align="left">Nome Unidade</StyledTableCell>
            <StyledTableCell align="left">CNPJ/CPF Unidade</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaAguas.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell >{x.n_fornecimento}</StyledTableCell>
              <StyledTableCell align="left" >{x.cnpj_concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.nome_cliente}</StyledTableCell>
              <StyledTableCell align="left" >{x.cpf_cnpj_Agua}</StyledTableCell>
              <StyledTableCell align="left" className={classes.button}>
                <IconButton
                    color="primary"
                    onClick={() => {
                      setModalInfo(true);
                      setDados(x);
                    }}
                  >
                    <InfoIcon/>
                </IconButton>

                <IconButton
                  color="primary"
                  onClick={() => {
                    setModalEdit(true);
                    setDados(x);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleDelete(x.id)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {modalEdit && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" color="#fff" />
          </IconButton>
          <EditAgua dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
          <div className={classes.modal}>
            <IconButton className={classes.close} onClick={handleClose}>
              <CloseIcon fontSize="large" color="#fff" />
            </IconButton>
            <InfoAgua dados={dados}/>
          </div>
        )}
    </div>
  );
}