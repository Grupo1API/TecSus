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
import EditClientes from "../../components/formulario/formCons";
import CloseIcon from "@material-ui/icons/Close";

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
      color: theme.palette.common.white,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: "90%",
    marginLeft:'284px'
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
    height: "100%",
  },
  close: {
    position: "absolute",
    top: "5em",
    right: "20em",
    color: "#fff",
  },
});

export default function QuadroConcessionaria() {
  const classes = useStyles();
  const [listaClientes, setListaClientes] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaCliente();
  }, []);

  async function listaCliente() {
    try {
      const response = await fetch(
        "http://localhost:8080/cadastroconcessionaria",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaClientes(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    await fetch(`http://localhost:8080/concessionaria/excluir/${id}`, {
      method: "DELETE",
    });
    listaCliente();
  }

  function handleClose(event) {
    event.preventDefault();
    setModalEdit(false);
  }

  return (
    <>
      <Menu/>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Numero Fornecimento</StyledTableCell>
            <StyledTableCell align="left">CNPJ</StyledTableCell>
            <StyledTableCell align="left">Concessionaria</StyledTableCell>
            <StyledTableCell align="left">CNPJ/CPF Unidade</StyledTableCell>
            <StyledTableCell align="left">Nome Unidade</StyledTableCell>
            <StyledTableCell align="left">Cod.Cliente</StyledTableCell>
            <StyledTableCell align="left">Pde_Rgi</StyledTableCell>
            <StyledTableCell align="left">Hidrometro</StyledTableCell>
            <StyledTableCell align="left">Tipo de Ligação</StyledTableCell>
            <StyledTableCell align="left">CNPJ</StyledTableCell>
            <StyledTableCell align="left">CEP</StyledTableCell>
            <StyledTableCell align="left">Inscrição Estadual</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaClientes.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell >{x.cnpj}</StyledTableCell>
              <StyledTableCell align="left" >{x.nome}</StyledTableCell>
              <StyledTableCell align="left">{x.segmento}</StyledTableCell>
              <StyledTableCell align="left" >{x.cep}</StyledTableCell>
              <StyledTableCell align="left">{x.rua}</StyledTableCell>
              <StyledTableCell align="left">{x.bairro}</StyledTableCell>
              <StyledTableCell align="left">{x.cidade}</StyledTableCell>
              <StyledTableCell align="left">{x.uf}</StyledTableCell>
              <StyledTableCell align="left">{x.numero}</StyledTableCell>
              <StyledTableCell align="left" >{x.telefone}</StyledTableCell>
              <StyledTableCell align="left">{x.inscricao_estadual}</StyledTableCell>
              <StyledTableCell align="left">{x.inscricao_especial}</StyledTableCell>
              <StyledTableCell align="left" className={classes.button}>
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
          <EditClientes dados={dados} modalEdit={modalEdit} />
        </div>
      )}
    </>
  );
}
