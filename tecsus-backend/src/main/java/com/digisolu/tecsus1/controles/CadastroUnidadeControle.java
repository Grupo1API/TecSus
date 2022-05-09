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

import com.digisolu.tecsus1.entidades.CadastroUnidade;
import com.digisolu.tecsus1.modelos.AdicionadorLinkCadastroUnidade;
import com.digisolu.tecsus1.modelos.CadastroUnidadeAtualizador;
import com.digisolu.tecsus1.modelos.CadastroUnidadeSelecionador;
import com.digisolu.tecsus1.repositorios.CadastroUnidadeRepositorio;

@CrossOrigin
@RestController
public class CadastroUnidadeControle{
	@Autowired
	private CadastroUnidadeRepositorio repositorio;
	@Autowired
	private CadastroUnidadeSelecionador selecionador;
	@Autowired
	private AdicionadorLinkCadastroUnidade adicionadorLink;
	
	@GetMapping("/cadastrounidade")
	public ResponseEntity<List<CadastroUnidade>> obterCadastroUnidade(){
		List<CadastroUnidade> cadastroUnidade = repositorio.findAll();
		if (cadastroUnidade.isEmpty()) {
			ResponseEntity<List<CadastroUnidade>> resposta = new ResponseEntity<>(cadastroUnidade,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(cadastroUnidade);
			ResponseEntity<List<CadastroUnidade>> resposta = new ResponseEntity<>(cadastroUnidade,HttpStatus.OK);
			return resposta;
		}
	}
	
	@GetMapping("/cadastrosunidade{id}")
	public ResponseEntity<CadastroUnidade> obterCadastroUnidade(@PathVariable Long id){
		List<CadastroUnidade> cadastrosUnidade = repositorio.findAll();
		CadastroUnidade cadastroUnidade = selecionador.selecionar(cadastrosUnidade, id);
		if (cadastroUnidade == null) {
			ResponseEntity<CadastroUnidade> resposta =new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return resposta;
		}else {
			adicionadorLink.adicionarLink(cadastroUnidade);
			ResponseEntity<CadastroUnidade> resposta = new ResponseEntity<CadastroUnidade>(cadastroUnidade,HttpStatus.FOUND);
			return resposta;
		}
	}
	
	@PostMapping("/unidade/cadastro")
	public ResponseEntity<?> cadastrarCadastroUnidade(@RequestBody CadastroUnidade cadastroUnidade){
		HttpStatus status = HttpStatus.CONFLICT;
		if(cadastroUnidade.getId() == null) {
			repositorio.save(cadastroUnidade);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
	
	@PutMapping("/unidade/atualizar")
	public ResponseEntity<?> atualizarCadastroUnidade(@RequestBody CadastroUnidade atualizacao){
		HttpStatus status = HttpStatus.CONFLICT;
		CadastroUnidade cadastroUnidade = repositorio.getById(atualizacao.getId());
		if (cadastroUnidade != null) {
			CadastroUnidadeAtualizador atualizador = new CadastroUnidadeAtualizador();
			atualizador.atualizar(cadastroUnidade, atualizacao);
			repositorio.save(cadastroUnidade);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}
	
	@DeleteMapping("/unidade/excluir/{id}")
	public ResponseEntity<?> excluirCadastroUnidade(@PathVariable Long id){
		CadastroUnidade cadastroUnidade = repositorio.getById(id);
		repositorio.delete(cadastroUnidade);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

