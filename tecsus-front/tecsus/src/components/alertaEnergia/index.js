import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import baseURL from "../../utils";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: 1200,
  },
  body: {
    backgroundColor: "#fff",
  },
});

export default function TotalEnergia() {
  const classes = useStyles();
  const [avissoEnergia, setAvissoEnergia] = useState([]);

  useEffect(() => {
    AvissoEner();
  }, []);

  async function AvissoEner() {
    try {
      const response = await fetch(`${baseURL}/contadeenergia`, {
        method: "GET",
      });
      const data = await response.json();
      setAvissoEnergia(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const comparar_TotalEnergia = (x) => {
    if (x.valor_total >= x.contaenergia_contrato_id.valor_medio) {
      return (
        <Alert severity="error" variant="filled" icon={false}>
          Atenção - Valor total acima da média
        </Alert>
      );
    } else {
      return (
        <Alert severity="success" variant="filled" icon={false}>
          Abaixo - Valor total abaixo da média
        </Alert>
      );
    }
  };

  const comparar_consumoEnergia = (x) => {
    if (x.quantidade_kwh_mes >= x.contaenergia_contrato_id.media_consumo_kwm) {
      return (
        <Alert severity="error" variant="filled" icon={false}>
          Atenção - Consumo acima da média
        </Alert>
      );
    } else {
      return (
        <Alert severity="success" variant="filled" icon={false}>
          Abaixo - Consumo abaixo da média
        </Alert>
      );
    }
  };

  return (
    <div>
      <div>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Valor Total</StyledTableCell>
              <StyledTableCell align="left">Valor Médio </StyledTableCell>
              <StyledTableCell align="left">Consumo Kwh </StyledTableCell>
              <StyledTableCell align="left">Consumo Médio Kwh </StyledTableCell>
              <StyledTableCell align="left">Aviso Valor</StyledTableCell>
              <StyledTableCell align="left">Aviso Consumo</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.body}>
            {avissoEnergia.map((x) => (
              <StyledTableRow key={x.id}>
                <StyledTableCell>{x.id}</StyledTableCell>
                <StyledTableCell align="left">{x.valor_total}</StyledTableCell>
                <StyledTableCell align="left">
                  {x.contaenergia_contrato_id.valor_medio}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {x.quantidade_kwh_mes}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {x.contaenergia_contrato_id.media_consumo_kwm}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {comparar_TotalEnergia(x)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {comparar_consumoEnergia(x)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
