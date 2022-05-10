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
import EditClientes from "../../components/formEnergia/formEnergia";
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

export default function QuadroUnidades() {
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
        "http://localhost:8080/contadeenergia",
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
    await fetch(`http://localhost:8080/contasdeenergia/excluir/${id}`, {
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
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">Número de Instalação</StyledTableCell>
            <StyledTableCell align="left">Concessionária</StyledTableCell>
            <StyledTableCell align="left">Endereço</StyledTableCell>
            <StyledTableCell align="left">CEP</StyledTableCell>
            <StyledTableCell align="left">CNPJ</StyledTableCell>
            <StyledTableCell align="left">Nome do Cliente</StyledTableCell>
            <StyledTableCell align="left">Endereço Cliente</StyledTableCell>
            <StyledTableCell align="left">CEP Cliente</StyledTableCell>
            <StyledTableCell align="left">Nota Fiscal</StyledTableCell>
            <StyledTableCell align="left">Valor Total</StyledTableCell>
            <StyledTableCell align="left">Consumo Kwh</StyledTableCell>
            <StyledTableCell align="left">Data de Vencimento</StyledTableCell>
            <StyledTableCell align="left">Conta Mês Referência</StyledTableCell>
            <StyledTableCell align="left">Bandeira Tarifaria</StyledTableCell>
            <StyledTableCell align="left">Data de Emissão</StyledTableCell>
            <StyledTableCell align="left">N° Dias Faturamento</StyledTableCell>
            <StyledTableCell align="left">Descrição Consumo</StyledTableCell>
            <StyledTableCell align="left">N° Medidor</StyledTableCell>
            <StyledTableCell align="left">Const. Multa</StyledTableCell>
            <StyledTableCell align="left">Qtd Kwh Mês </StyledTableCell>
            <StyledTableCell align="left">Quantidade Kwh TUSD </StyledTableCell>
            <StyledTableCell align="left">Tarifa Aplicada R$ TUSD </StyledTableCell>
            <StyledTableCell align="left">Valor Fornercimento R$ TUSD </StyledTableCell>
            <StyledTableCell align="left">Valor Total R$ TUSD</StyledTableCell>
            <StyledTableCell align="left">Quantidade Kwh TE </StyledTableCell>
            <StyledTableCell align="left">Tarifa Aplicada R$ TE </StyledTableCell>
            <StyledTableCell align="left">Valor Fornecimento R$ TE </StyledTableCell>
            <StyledTableCell align="left">Valor Total R$ TE</StyledTableCell>
            <StyledTableCell align="left">Quantidade Kwh B. Vigentes</StyledTableCell>
            <StyledTableCell align="left">Tarifa Aplicada R$ B. Vigentes</StyledTableCell>
            <StyledTableCell align="left">Valor Fornecimento R$ B. Vigentes</StyledTableCell>
            <StyledTableCell align="left">Valor Total R$ B. Vigentes</StyledTableCell>
            <StyledTableCell align="left">Base de calculo</StyledTableCell>
            <StyledTableCell align="left">Valor Multa R$</StyledTableCell>
            <StyledTableCell align="left">CIP - Contribuição Municipal R$</StyledTableCell>
            <StyledTableCell align="left">Base de Calculo PIS</StyledTableCell>
            <StyledTableCell align="left">Aliquota PIS</StyledTableCell>
            <StyledTableCell align="left">Valor PIS R$</StyledTableCell>
            <StyledTableCell align="left">Base do Calculo COFINS</StyledTableCell>
            <StyledTableCell align="left">Aliquota COFINS</StyledTableCell>
            <StyledTableCell align="left">Valor Cofins R$</StyledTableCell>            
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaClientes.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell>{x.id}</StyledTableCell>
              <StyledTableCell align="left">{x.numero_instalacao}</StyledTableCell>
              <StyledTableCell align="left">{x.concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.endereco_concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.cep_concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.cnpj_concessionaria}</StyledTableCell>
              <StyledTableCell align="left">{x.nome_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.endereco_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.cep_cliente}</StyledTableCell>
              <StyledTableCell align="left">{x.nota_fiscal}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_total}</StyledTableCell>
              <StyledTableCell align="left">{x.consumo_kwh_mes}</StyledTableCell>
              <StyledTableCell align="left">{x.data_vencimento}</StyledTableCell>
              <StyledTableCell align="left">{x.conta_mes}</StyledTableCell>
              <StyledTableCell align="left">{x.bandeira_tarifaria}</StyledTableCell>
              <StyledTableCell align="left">{x.emissao}</StyledTableCell>
              <StyledTableCell align="left">{x.num_dias_faturamento}</StyledTableCell>
              <StyledTableCell align="left">{x.descricao_consumo}</StyledTableCell>
              <StyledTableCell align="left">{x.numero_medidor}</StyledTableCell>
              <StyledTableCell align="left">{x.const_mult}</StyledTableCell>
              <StyledTableCell align="left">{x.quantidade_kwh_mes}</StyledTableCell>
              <StyledTableCell align="left">{x.quantidade_kwh_tusd}</StyledTableCell>
              <StyledTableCell align="left">{x.tarifa_aplicada_tusd}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_fornecimento_tusd}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_total_tusd}</StyledTableCell>
              <StyledTableCell align="left">{x.quantidade_kwh_te}</StyledTableCell>
              <StyledTableCell align="left">{x.tarifa_aplicada_te}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_fornecimento_te}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_total_te}</StyledTableCell>
              <StyledTableCell align="left">{x.quantidade_kwh_abv}</StyledTableCell>
              <StyledTableCell align="left">{x.tarifa_aplicada_abv}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_fornecimento_abv}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_total_abv}</StyledTableCell>
              <StyledTableCell align="left">{x.base_calculo_itens}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_multa}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_cip_contrib_municipal}</StyledTableCell>
              <StyledTableCell align="left">{x.base_calculo_pis}</StyledTableCell>
              <StyledTableCell align="left">{x.aliquota_pis}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_pis}</StyledTableCell>
              <StyledTableCell align="left">{x.base_calculo_cofins}</StyledTableCell>
              <StyledTableCell align="left">{x.aliquota_cofins}</StyledTableCell>
              <StyledTableCell align="left">{x.valor_cofins}</StyledTableCell>
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
