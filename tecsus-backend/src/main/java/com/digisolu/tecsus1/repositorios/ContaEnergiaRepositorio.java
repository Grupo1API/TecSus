package com.digisolu.tecsus1.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContaEnergia;

public interface ContaEnergiaRepositorio extends JpaRepository<ContaEnergia, Long> {
    @Query(value = "SELECT `id`, `arquivo`, `bandeira_tarifaria`, `bandeira_tarifaria_vigente`, `const_mult`, `conta_mes`, `data_vencimento`, `descricao_consumo`, `emissao`, `nota_fiscal`, `num_dias_faturamento`, conta_energia.numero_instalacao, `numero_medidor`, `quantidade_kwh_mes`, `valor_cip_contrib_municipal`, `valor_cofins`, `valor_multa`, `valor_pis`, `valor_total`, `valor_total_te`, `valor_total_tusd`, `contaenergia_contrato_id`  FROM conta_energia inner join contrato_energia on contrato_energia.contrato_energia_id= conta_energia.contaenergia_contrato_id order by contrato_energia.contrato_energia_id",
    nativeQuery = true)
    List<ContaEnergia> findAllContaEnergia();
}

