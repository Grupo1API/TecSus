package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.digisolu.tecsus1.entidades.CadastroUnidade;

public interface CadastroUnidadeRepositorio extends JpaRepository<CadastroUnidade, Long>{
	CadastroUnidade findByCpfCnpj(@RequestParam("cpf_cnpj") String cpf_cnpj);
}