package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.digisolu.tecsus1.entidades.CadastroConcessionaria;


public interface CadastroConcessionariaRepositorio extends JpaRepository<CadastroConcessionaria, Long> {
	CadastroConcessionaria findByCnpj(@RequestParam("cnpj") String cnpj);
}
