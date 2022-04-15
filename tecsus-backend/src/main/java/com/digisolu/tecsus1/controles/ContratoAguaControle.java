package com.digisolu.tecsus1.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.digisolu.tecsus1.entidades.ContratoAgua;
import com.digisolu.tecsus1.modelos.AdicionadorLinkContratoAgua;
import com.digisolu.tecsus1.modelos.ContratoAguaAtualizador;
import com.digisolu.tecsus1.modelos.ContratoAguaSelecionador;
import com.digisolu.tecsus1.repositorios.ContratoAguaRepositorio;


@CrossOrigin
@RestController
public class ContratoAguaControle {
	@Autowired
	private ContratoAguaRepositorio repositorio;
	@Autowired
	private ContratoAguaSelecionador selecionador;
	@Autowired
	private AdicionadorLinkContratoAgua adicionadorLink;

	@GetMapping("/contratoagua")
	public ResponseEntity<List<ContratoAgua>> obterContratoAgua() {
		List<ContratoAgua> contratosAgua= repositorio.findAll();
		if (contratosAgua.isEmpty()) {
			ResponseEntity<List<ContratoAgua>> resposta = new ResponseEntity<>(contratosAgua,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(contratosAgua);
			ResponseEntity<List<ContratoAgua>> resposta = new ResponseEntity<>(contratosAgua, HttpStatus.OK);
			return resposta;
		}
	}

	@GetMapping("/contratoagua{id}")
	public ResponseEntity<ContratoAgua> obterContratoAgua(@PathVariable long id) {
	List<ContratoAgua> contratosAgua = repositorio.findAll();
	ContratoAgua contratoAgua = selecionador.selecionar(contratosAgua, id);
	if (contratoAgua == null) {
		ResponseEntity<ContratoAgua> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return resposta;
	} else {
		adicionadorLink.adicionarLink(contratoAgua);
		ResponseEntity<ContratoAgua> resposta = new ResponseEntity<ContratoAgua>(contratoAgua, HttpStatus.FOUND);
		return resposta;
	}
	}

	@PostMapping("/contratoagua/cadastro")
	public ResponseEntity<?> cadastrarContratoAgua(@RequestBody ContratoAgua contratoAgua) {
	HttpStatus status = HttpStatus.CONFLICT;
	if (contratoAgua.getId() == null) {
		repositorio.save(contratoAgua);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);

	}

	@PutMapping("/contratoagua/atualizar")
	public ResponseEntity<?> atualizarContratoAgua(@RequestBody ContratoAgua atualizacao) {
	HttpStatus status = HttpStatus.CONFLICT;
	ContratoAgua contratoAgua = repositorio.getById(atualizacao.getId());
	if (contratoAgua != null) {
		ContratoAguaAtualizador atualizador = new ContratoAguaAtualizador();
		atualizador.atualizar(contratoAgua, atualizacao);
		repositorio.save(contratoAgua);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);
	}

	@DeleteMapping("/contratoagua/excluir")
	public ResponseEntity<?> excluirContratoAgua(@RequestBody ContratoAgua exclusao) {
	ContratoAgua contratoAgua = repositorio.getById(exclusao.getId());
	repositorio.delete(contratoAgua);
	return new ResponseEntity<>(HttpStatus.OK);
	}
}

