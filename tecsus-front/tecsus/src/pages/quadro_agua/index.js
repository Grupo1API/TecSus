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
import EditClientes from "../../components/formulario/formAgua";
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

export default function QuadroAguak() {
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
        "http://localhost:8080/contadeagua",
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
    await fetch(`http://localhost:8080/contasdeagua/excluir/${id}`, {
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
            <StyledTableCell align="left">Cep</StyledTableCell>
            <StyledTableCell align="left">economia</StyledTableCell>
            <StyledTableCell align="left">Data Apresentação</StyledTableCell>
            <StyledTableCell align="left">Proxima Leitura</StyledTableCell>
            <StyledTableCell align="left">Condição Leitura</StyledTableCell>
            <StyledTableCell align="left">Consumo m3</StyledTableCell>
            <StyledTableCell align="left">Periodo de Consumo</StyledTableCell>
            <StyledTableCell align="left">Media de Consumo</StyledTableCell>
            <StyledTableCell align="left">Valor total Esgoto</StyledTableCell>
            <StyledTableCell align="left">Valor total de consumo</StyledTableCell>
            <StyledTableCell align="left">Multa</StyledTableCell>
            <StyledTableCell align="left">Valor tributos</StyledTableCell>
            <StyledTableCell align="left">Juros Moradia</StyledTableCell>
            <StyledTableCell align="left">Taxa de Regulação</StyledTableCell>
            <StyledTableCell align="left">Data Vencimento</StyledTableCell>
            <StyledTableCell align="left">Segmento</StyledTableCell>
            <StyledTableCell align="left">N° do Documento</StyledTableCell>
            <StyledTableCell align="left">Data Emissão</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaClientes.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell >{x.n_fornecimento}</StyledTableCell>
              <StyledTableCell align="left" >{x.cnpj}</StyledTableCell>
              <StyledTableCell align="left">{x.concessionaria}</StyledTableCell>
              <StyledTableCell align="left" >{x.cpf_cnpj_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.nome_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.codigo_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.pde_rgi}</StyledTableCell>
              <StyledTableCell align="left">{x.hidrometro}</StyledTableCell>
              <StyledTableCell align="left">{x.tipo_ligacao}</StyledTableCell>
              <StyledTableCell align="left" >{x.cep}</StyledTableCell>
              <StyledTableCell align="left">{x.economia}</StyledTableCell>
              <StyledTableCell align="left">{x.data_apresentacao}</StyledTableCell>
              <StyledTableCell align="left">{x.proxima_leitura}</StyledTableCell>
              <StyledTableCell align="left">{x.condicao_leitura}</StyledTableCell>
              <StyledTableCell align="left">{x.consumo_m3}</StyledTableCell>
              <StyledTableCell align="left" >{x.periodo_consumo}</StyledTableCell>
              <StyledTableCell align="left">{x.media_consumo}</StyledTableCell>
              <StyledTableCell align="left">{x.subtotal_agua}</StyledTableCell>
              <StyledTableCell align="left">{x.subtotal_esgoto}</StyledTableCell>
              <StyledTableCell align="left">{x.vtConsumo}</StyledTableCell>
              <StyledTableCell align="left">{x.multa}</StyledTableCell>
              <StyledTableCell align="left">{x.at_monet}</StyledTableCell>
              <StyledTableCell align="left" >{x.juros_moradia}</StyledTableCell>
              <StyledTableCell align="left">{x.taxa_regulacao}</StyledTableCell>
              <StyledTableCell align="left">{x.data_vencimento}</StyledTableCell>
              <StyledTableCell align="left">{x.segmento}</StyledTableCell>
              <StyledTableCell align="left">{x.documento}</StyledTableCell>
              <StyledTableCell align="left">{x.dataEmissao}</StyledTableCell>
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