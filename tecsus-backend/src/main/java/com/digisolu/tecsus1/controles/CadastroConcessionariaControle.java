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

import com.digisolu.tecsus1.entidades.CadastroConcessionaria;
import com.digisolu.tecsus1.modelos.AdicionadorLinkCadastroConcessionaria;
import com.digisolu.tecsus1.modelos.CadastroConcessionariaAtualizador;
import com.digisolu.tecsus1.modelos.CadastroConcessionariaSelecionador;
import com.digisolu.tecsus1.repositorios.CadastroConcessionariaRepositorio;

@CrossOrigin
@RestController
public class CadastroConcessionariaControle{
	@Autowired
	private CadastroConcessionariaRepositorio repositorio;
	@Autowired
	private CadastroConcessionariaSelecionador selecionador;
	@Autowired
	private AdicionadorLinkCadastroConcessionaria adicionadorLink;
	
	@GetMapping("/cadastroconcessionaria")
	public ResponseEntity<List<CadastroConcessionaria>> obterCadastroConcessionaria(){
		List<CadastroConcessionaria> cadastrosConcessionaria = repositorio.findAll();
		if (cadastrosConcessionaria.isEmpty()) {
			ResponseEntity<List<CadastroConcessionaria>> resposta = new ResponseEntity<>(cadastrosConcessionaria,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(cadastrosConcessionaria);
			ResponseEntity<List<CadastroConcessionaria>> resposta = new ResponseEntity<>(cadastrosConcessionaria,HttpStatus.OK);
			return resposta;
		}
	}
	
	@GetMapping("/cadastrosconcessionaria{id}")
	public ResponseEntity<CadastroConcessionaria> obterCadastroConcessionaria(@PathVariable Long id){
		List<CadastroConcessionaria> cadastrosConcessionaria = repositorio.findAll();
		CadastroConcessionaria cadastroConcessionaria = selecionador.selecionar(cadastrosConcessionaria, id);
		if (cadastroConcessionaria == null) {
			ResponseEntity<CadastroConcessionaria> resposta =new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		}else {
			adicionadorLink.adicionarLink(cadastroConcessionaria);
			ResponseEntity<CadastroConcessionaria> resposta = new ResponseEntity<CadastroConcessionaria>(cadastroConcessionaria,HttpStatus.FOUND);
			return resposta;
		}
	}
	
	@PostMapping("/concessionaria/cadastro")
	public ResponseEntity<?> cadastrarCadastroConcessionaria(@RequestBody CadastroConcessionaria cadastroConcessionaria){
		HttpStatus status = HttpStatus.CONFLICT;
		if(cadastroConcessionaria.getId() == null) {
			repositorio.save(cadastroConcessionaria);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
	
	@PutMapping("/concessionaria/atualizar")
	public ResponseEntity<?> atualizarCadastroConcessionaria(@RequestBody CadastroConcessionaria atualizacao){
		HttpStatus status = HttpStatus.CONFLICT;
		CadastroConcessionaria cadastroConcessionaria = repositorio.getById(atualizacao.getId());
		if (cadastroConcessionaria != null) {
			CadastroConcessionariaAtualizador atualizador = new CadastroConcessionariaAtualizador();
			atualizador.atualizar(cadastroConcessionaria, atualizacao);
			repositorio.save(cadastroConcessionaria);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
	
	@DeleteMapping("/concessionaria/excluir")
	public ResponseEntity<?> excluirCadastroConcessionaria(@RequestBody CadastroConcessionaria exclusao){
		CadastroConcessionaria cadastroConcessionaria = repositorio.getById(exclusao.getId());
		repositorio.delete(cadastroConcessionaria);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
    @GetMapping("concessionaria/{cnpj}")
    public ResponseEntity<CadastroConcessionaria> getcnpj(@PathVariable("cnpj") String cnpj) {
        CadastroConcessionaria concessionarias = repositorio.findByCnpj(cnpj);
        if(concessionarias == null) {
            return new ResponseEntity<CadastroConcessionaria>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<CadastroConcessionaria>(concessionarias, HttpStatus.OK);
    }

}