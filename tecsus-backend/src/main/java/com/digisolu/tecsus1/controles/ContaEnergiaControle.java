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

import com.digisolu.tecsus1.entidades.ContaEnergia;
import com.digisolu.tecsus1.modelos.AdicionadorLinkContaEnergia;
import com.digisolu.tecsus1.repositorios.ContaEnergiaRepositorio;
import com.digisolu.tecsus1.modelos.ContaEnergiaAtualizador;
import com.digisolu.tecsus1.modelos.ContaEnergiaSelecionador;


@CrossOrigin
@RestController
public class ContaEnergiaControle {
	
	@Autowired
	private ContaEnergiaRepositorio repositorio;
	@Autowired
	private ContaEnergiaSelecionador selecionador;
	@Autowired
	private AdicionadorLinkContaEnergia adicionadorLink;

	@GetMapping("/contadeenergia")
	public ResponseEntity<List<ContaEnergia>> obterEnergia() {
		List<ContaEnergia> contasEnergia= repositorio.findAll();
		if (contasEnergia.isEmpty()) {
			ResponseEntity<List<ContaEnergia>> resposta = new ResponseEntity<>(contasEnergia,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(contasEnergia);
			ResponseEntity<List<ContaEnergia>> resposta = new ResponseEntity<>(contasEnergia, HttpStatus.OK);
			return resposta;
		}
	}

@GetMapping("/contadeenergia{id}")
public ResponseEntity<ContaEnergia> obterEnergia(@PathVariable long id) {
	List<ContaEnergia> contasEnergia = repositorio.findAll();
	ContaEnergia contaEnergia = selecionador.selecionar(contasEnergia, id);
	if (contaEnergia == null) {
		ResponseEntity<ContaEnergia> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return resposta;
	} else {
		adicionadorLink.adicionarLink(contaEnergia);
		ResponseEntity<ContaEnergia> resposta = new ResponseEntity<ContaEnergia>(contaEnergia, HttpStatus.FOUND);
		return resposta;
	}
}

@PostMapping("/contadeenergia/cadastro")
public ResponseEntity<?> cadastrarEnergia(@RequestBody ContaEnergia contaEnergia) {
	HttpStatus status = HttpStatus.CONFLICT;
	if (contaEnergia.getId() == null) {
		repositorio.save(contaEnergia);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);

}

@PutMapping("/contadeenergia/atualizar")
public ResponseEntity<?> atualizarEnergia(@RequestBody ContaEnergia atualizacao) {
	HttpStatus status = HttpStatus.CONFLICT;
	ContaEnergia contaEnergia = repositorio.getById(atualizacao.getId());
	if (contaEnergia != null) {
		ContaEnergiaAtualizador atualizador = new ContaEnergiaAtualizador();
		atualizador.atualizar(contaEnergia, atualizacao);
		repositorio.save(contaEnergia);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);
}

@DeleteMapping("/contasdeenergia/excluir")
public ResponseEntity<?> excluirEnergia(@RequestBody ContaEnergia exclusao) {
	ContaEnergia contaEnergia = repositorio.getById(exclusao.getId());
	repositorio.delete(contaEnergia);
	return new ResponseEntity<>(HttpStatus.OK);
}
}
