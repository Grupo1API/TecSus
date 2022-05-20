package com.digisolu.tecsus1.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.digisolu.tecsus1.entidades.ContratoEnergia;

public interface ContratoEnergiaRepositorio extends JpaRepository<ContratoEnergia, Long> { 
	ContratoEnergia findByNumeroInstalacao(@RequestParam("numero_instalacao") String numero_instalacao);
    @Query(value = "SELECT contrato_unidade_id, `contrato_energia_id`, `classe_subclasse`, `cnpj_cpf_ci`, `codigo_identificador`, `codigo_fiscal_operacao`, `endereco_eletrico`, `grupo_subgrupo`, `local_bairro`, `local_cep`, `local_cidade`, `local_estado`, `local_numero`, `local_rua`, `modalidade_tarifaria`, `num_medidor`, `numero_instalacao`, `roteiro_leitura`, `tensao_nominal`, `tp_fornecimento`, `valor_medio`, `contrato_concessionaria_id`, `contrato_unidade_id`  FROM contrato_energia inner join cadastro_unidade on cadastro_unidade.unidade_id= contrato_energia.contrato_unidade_id order by cadastro_unidade.unidade_id",
    nativeQuery = true)
    List<ContratoEnergia> findAllContratoEnergia();
}