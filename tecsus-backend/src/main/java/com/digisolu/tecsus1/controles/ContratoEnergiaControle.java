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
import com.digisolu.tecsus1.entidades.ContratoEnergia;
import com.digisolu.tecsus1.modelos.AdicionadorLinkContratoEnergia;
import com.digisolu.tecsus1.modelos.ContratoEnergiaAtualizador;
import com.digisolu.tecsus1.modelos.ContratoEnergiaSelecionador;
import com.digisolu.tecsus1.repositorios.ContratoEnergiaRepositorio;


@CrossOrigin
@RestController
public class ContratoEnergiaControle {
	@Autowired
	private ContratoEnergiaRepositorio repositorio;
	@Autowired
	private ContratoEnergiaSelecionador selecionador;
	@Autowired
	private AdicionadorLinkContratoEnergia adicionadorLink;

	@GetMapping("/contratoenergia")
	public ResponseEntity<List<ContratoEnergia>> obterContrato_energia() {
		List<ContratoEnergia> contratosEnergia= repositorio.findAll();
		if (contratosEnergia.isEmpty()) {
			ResponseEntity<List<ContratoEnergia>> resposta = new ResponseEntity<>(contratosEnergia,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(contratosEnergia);
			ResponseEntity<List<ContratoEnergia>> resposta = new ResponseEntity<>(contratosEnergia, HttpStatus.OK);
			return resposta;
		}
	}

	@GetMapping("/contratoenergia{id}")
	public ResponseEntity<ContratoEnergia> obterContrato_energia(@PathVariable long id) {
	List<ContratoEnergia> contratosEnergia = repositorio.findAll();
	ContratoEnergia contratoEnergia = selecionador.selecionar(contratosEnergia, id);
	if (contratoEnergia == null) {
		ResponseEntity<ContratoEnergia> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return resposta;
	} else {
		adicionadorLink.adicionarLink(contratoEnergia);
		ResponseEntity<ContratoEnergia> resposta = new ResponseEntity<ContratoEnergia>(contratoEnergia, HttpStatus.FOUND);
		return resposta;
	}
	}

	@PostMapping("/contratoenergia/cadastro")
	public ResponseEntity<?> cadastrarEnergia(@RequestBody ContratoEnergia contratoEnergia) {
	HttpStatus status = HttpStatus.CONFLICT;
	if (contratoEnergia.getId() == null) {
		repositorio.save(contratoEnergia);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);

	}

	@PutMapping("/contratoenergia/atualizar")
	public ResponseEntity<?> atualizarContrato_energia(@RequestBody ContratoEnergia atualizacao) {
	HttpStatus status = HttpStatus.CONFLICT;
	ContratoEnergia contratoEnergia = repositorio.getById(atualizacao.getId());
	if (contratoEnergia != null) {
		ContratoEnergiaAtualizador atualizador = new ContratoEnergiaAtualizador();
		atualizador.atualizar(contratoEnergia, atualizacao);
		repositorio.save(contratoEnergia);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);
	}

	@DeleteMapping("/contratoenergia/excluir")
	public ResponseEntity<?> excluirContrato_energia(@RequestBody ContratoEnergia exclusao) {
	ContratoEnergia contratoEnergia = repositorio.getById(exclusao.getId());
	repositorio.delete(contratoEnergia);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	
    @GetMapping("/contratoenergia/{codigo_identificador}")
    public ResponseEntity<ContratoEnergia> getFornecimento(@PathVariable("codigo_identificador") String codigo_identificador) {
    	ContratoEnergia contratos_energia = repositorio.findByCodigoIdentificador(codigo_identificador);
        if(contratos_energia == null) {
            return new ResponseEntity<ContratoEnergia>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<ContratoEnergia>(contratos_energia, HttpStatus.OK);
    }
}

