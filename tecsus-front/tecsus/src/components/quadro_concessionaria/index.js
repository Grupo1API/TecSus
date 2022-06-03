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
import EditConcessionarias from "../../components/formConcessionaria/formCons";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import InfoConcessionaria from "../infoConcessionaria";
import baseURL from "../../utils";

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

export default function Quadro_concessionaria() {
  const classes = useStyles();
  const [listaConcessionarias, setListaConcessionarias] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaConcessionaria();
  }, []);

  async function listaConcessionaria() {
    try {
      const response = await fetch(
        `${baseURL}/cadastroconcessionaria`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaConcessionarias(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    const data = {
      id: id,
    };
    await fetch(`${baseURL}/concessionaria/excluir`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    listaConcessionaria();
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
            <StyledTableCell align="left">Nome Concessionaria</StyledTableCell>
            <StyledTableCell align="left">CPF/CNPJ</StyledTableCell>
            <StyledTableCell align="left">CEP</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaConcessionarias.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell>{x.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {x.nome}
              </StyledTableCell>
              <StyledTableCell align="left">{x.cnpj}</StyledTableCell>
              <StyledTableCell align="left">{x.cep}</StyledTableCell>
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
          <EditConcessionarias dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" color="#fff" />
          </IconButton>
          <InfoConcessionaria dados={dados} />
        </div>
      )}
    </div>
  );
}
