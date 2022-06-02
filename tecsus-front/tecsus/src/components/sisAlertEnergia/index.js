import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from '@material-ui/lab';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

const useStyles= makeStyles({
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
    height: "105vh",
  },
  close: {
    position: "absolute",
    top: "1em",
    right: "25em",
    color: "#fff",
  },
});




const animes = [
  { id: 1 ,  name :'naratu' , valor:"8" , valor_medio:"17"},
  { id: 2 ,  name :'narat444' , valor:"14" , valor_medio:"15"},
  {id: 3 , name : 'a' , valor:"15" ,  valor_medio:"4"},
  


];

export default function TotalEnergia() {
  const classes = useStyles();
  const [avissoEnergia, setAvissoEnergia] = useState([]);

useEffect(() => {
  AvissoEner();
}, []);

async function AvissoEner() {
  try {
    const response = await fetch(
      "http://localhost:8080/contadeenergia",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setAvissoEnergia(data);
  } 
  catch (error) {
    console.log(error.message);
  }
  
}

const comparar_TotalEnergia = avissoEnergia.map((x)=>{
  if ( x.valor_total >= x.contaenergia_contrato_id.valor_medio) 
  { 
    x.numero_medidor = <Alert severity="error">
    <AlertTitle>Atenção</AlertTitle>
  Valor total acima da media — <strong>ACIMA O NORMAL</strong>
  </Alert>
 } else if(x.valor_total < ( x.contaenergia_contrato_id.valor_medio  ) ){
        x.numero_medidor = <Alert severity="success">
        <AlertTitle>Abaixo</AlertTitle>
        Consumo abaixo da media — <strong>ABAIXO DA MEDIA</strong>
      {/* Consumo esta perto da media — <strong>CONSUMO PERTO DA MEDIA TOTAL</strong> */}
      </Alert>
     
    }  }
  )

  // const comparar_KHM = avissoEnergia.map((x)=>{
  //   if ( x.quantidade_kwh_mes >= x.contaenergia_contrato_id.valor_medio) 
  //   { 
  //     x.numero_medidor = <Alert severity="error">
  //     <AlertTitle>Atenção</AlertTitle>
  //   Valor total acima da media — <strong>ACIMA O NORMAL</strong>
  //   </Alert>
  //  } else if(x.valor_total < ( x.contaenergia_contrato_id.valor_medio  ) ){
  //         x.hidrometro = <Alert severity="success">
  //         <AlertTitle>Abaixo</AlertTitle>
  //         Consumo abaixo da media — <strong>ABAIXO DA MEDIA</strong>
  //       {/* Consumo esta perto da media — <strong>CONSUMO PERTO DA MEDIA TOTAL</strong> */}
  //       </Alert>
       
  //     }  }
  //   )


// const listasAnimes = animes.map(
//   (anime)=>
//   <li key={anime.id}>{anime.valor } ---- {anime.valor_medio}</li>
  
// )

// const valor_total =  
//   animes.map((anime)=> 
//   {if (anime.valor >= anime.valor_medio) {
//     return<Alert severity="warning">
//     <AlertTitle>Atenção</AlertTitle>
//     This is a warning alert — <strong>check it out!</strong>
//   </Alert>
//   }else{
// return null
//   }}

//    )

  return (
    <div> 
      <div>        
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Data Emissão</StyledTableCell>
              {/* <StyledTableCell align="left">quantidade KWH/mes</StyledTableCell> */}
              <StyledTableCell align="left">Valor Total</StyledTableCell>
              <StyledTableCell align="left">Valor Medio </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.body}>
            {avissoEnergia.map((x) => (
              <StyledTableRow key={x.id}>
                <StyledTableCell>{x.id}</StyledTableCell>
                <StyledTableCell align="left">{x.emissao}</StyledTableCell>
                {/* <StyledTableCell align="left">Kwh {x.quantidade_kwh_mes}</StyledTableCell> */}
                <StyledTableCell align="left">R$ {x.valor_total}</StyledTableCell>
                <StyledTableCell align="left">R$ {x.contaenergia_contrato_id.valor_medio}</StyledTableCell>
                <StyledTableCell align="left">{x.numero_medidor}</StyledTableCell>
                {/* <StyledTableCell align="left">{x.const_mult}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  
    {/* <h1>sla teste</h1> */}
    {/* {comparar_Total} */}
    
    
    </div>
  );
}

// useEffect(() => {
//     listaAgua();
//     if(dados.contaagua_contrato_id.valor_medio > dados.valor_total){
//   return(
//   <h1>certo</h1>
// );}
//   }, []);
// import React, { useState, useEffect } from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 16,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
    
//   },
//   body: {
//     backgroundColor: "#fff",
//   },
//   button: {
//     display: "flex",
//   },
//   modal: {
//     position: "absolute",
//     top: "0",
//     bottom: "0",
//     left: "0",
//     right: "0",
//     backgroundColor: "rgba(0, 0, 0,0.5)",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "105vh",
//   },
//   close: {
//     position: "absolute",
//     top: "1em",
//     right: "25em",
//     color: "#fff",
//   },
// });

// export default function Alerta1(e){
//   e.test();
//   { fetch('http://localhost:8080/contadeagua')
//   .then(e => e.json())
//             .then(e => {
//                 this.setState({
//                     linguagens: res
//                 });
//             });
//     };
// }

// export default function Alerta() {





  
  // function test(x){
    
  // }

 
  // {

  // }