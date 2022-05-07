package com.digisolu.tecsus1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.digisolu.tecsus1.entidades.ContratoAgua;

public interface ContratoAguaRepositorio extends JpaRepository<ContratoAgua, Long>{
	ContratoAgua findByNumeroFornecimento(@RequestParam("n_fornecimento") String n_fornecimento);
}
