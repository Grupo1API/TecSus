import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditEnergia from "../../components/formEnergia/formEnergia";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";
import InfoEnergia from "../infoEnergia";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      color: theme.palette.hover,
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
    height: "100vh",
  },
  close: {
    position: "absolute",
    top: "1em",
    right: "25em",
    color: "#fff",
  },
});

export default function Quadro_contrato_energia() {
  const classes = useStyles();
  const [listaEnergias, setListaEnergias] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dados, setDados] = useState([]);
  const [modalInfo, setModalInfo] = useState(false);

  useEffect(() => {
    listaEnergia();
  }, []);

  async function listaEnergia() {
    try {
      const response = await fetch("http://localhost:8080/contratoenergia", {
        method: "GET",
      });
      const data = await response.json();
      setListaEnergias(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    const data = {
      id: id,
    };
    await fetch(`http://localhost:8080/contratoenergia/excluir`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    listaEnergia();
  }

  function handleClose(event) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false);
  }

  return (
    <div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">Numero Instalação</StyledTableCell>
            <StyledTableCell align="left">
              CNPJ/CPF Concessionaria
            </StyledTableCell>
            <StyledTableCell align="left">Concessionaria</StyledTableCell>
            <StyledTableCell align="left">Nome Unidade</StyledTableCell>
            <StyledTableCell align="left">CNPJ/CPF Unidade</StyledTableCell>
            <StyledTableCell align="left">Valor Médio</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaEnergias.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell>{x.id}</StyledTableCell>
              <StyledTableCell align="left">
                {x.numero_instalacao}
              </StyledTableCell>
              <StyledTableCell align="left">
                {x.contrato_concessionaria_id.cnpj}
              </StyledTableCell>
              <StyledTableCell align="left">
                {x.contrato_concessionaria_id.nome}
              </StyledTableCell>
              <StyledTableCell align="left">
                {x.contrato_unidade_id.nome}
              </StyledTableCell>
              <StyledTableCell align="left">
                {x.contrato_unidade_id.cpf_cnpj}
              </StyledTableCell>
              <StyledTableCell align="left">R$ {x.valor_medio}</StyledTableCell>
              <StyledTableCell align="left" className={classes.button}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setModalInfo(true);
                    setDados(x);
                  }}
                >
                  <InfoIcon />
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
          <EditEnergia dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" color="#fff" />
          </IconButton>
          <InfoEnergia dados={dados} modalInfo={modalInfo} />
        </div>
      )}
    </div>
  );
}
