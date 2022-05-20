package com.digisolu.tecsus1.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.digisolu.tecsus1.entidades.ContaAgua;

public interface ContaAguaRepositorio extends JpaRepository<ContaAgua, Long> {
    @Query(value = "SELECT `id`, `arquivo`, `at_monet`, `condicao_leitura`, `consumo_m3`, `data_apresentacao`, `data_emissao`, `data_vencimento`, `economia`, `juros_mora`, `media_consumo`, `multa`, `n_documento`, `periodo`, `proxima_leitura`, `taxa_regulacao`, conta_agua.tipo_ligacao, `total_agua`, `total_esgoto`, `valor_total`, `contaagua_contrato_id`  FROM conta_agua inner join contrato_agua on contrato_agua.contrato_agua_id= conta_agua.contaagua_contrato_id order by contrato_agua.contrato_agua_id",
    nativeQuery = true)
    List<ContaAgua> findAllContaAgua();
}

