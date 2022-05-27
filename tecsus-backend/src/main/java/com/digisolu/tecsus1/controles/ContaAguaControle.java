package com.digisolu.tecsus1.controles;


import java.io.IOException;
import java.util.List;

import com.digisolu.tecsus1.entidades.ContaAgua;
import com.digisolu.tecsus1.modelos.AdicionadorLinkContaAgua;
import com.digisolu.tecsus1.modelos.ContaAguaAtualizador;
import com.digisolu.tecsus1.modelos.ContaAguaSelecionador;
import com.digisolu.tecsus1.repositorios.ContaAguaRepositorio;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin
@RestController
public class ContaAguaControle {
	
	@Autowired
	private ContaAguaRepositorio repositorio;
	@Autowired
	private ContaAguaSelecionador selecionador;
	@Autowired
	private AdicionadorLinkContaAgua adicionadorLink;
	

	
	@GetMapping("/contadeagua")
	public ResponseEntity<List<ContaAgua>> obterContaAgua() {
		List<ContaAgua> contasAgua= repositorio.findAll();
		if (contasAgua.isEmpty()) {
			ResponseEntity<List<ContaAgua>> resposta = new ResponseEntity<>(contasAgua,HttpStatus.NOT_FOUND);
			return resposta;
		} else {
			adicionadorLink.adicionarLink(contasAgua);
			ResponseEntity<List<ContaAgua>> resposta = new ResponseEntity<>(contasAgua, HttpStatus.OK);
			return resposta;
		}
	}


    
	 
	
	 @PostMapping(value = "/contadeagua/geral",consumes={MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> receberArquivo(@RequestPart ("contaAgua") ContaAgua contaAgua,@RequestPart("file") MultipartFile arquivoEnviado )
			 {
				
		try {
			
			contaAgua.setTipo(arquivoEnviado.getContentType());
			contaAgua.setArquivo(arquivoEnviado.getBytes());
			repositorio.save(contaAgua);
			
		} catch (IOException e) {
		
			e.printStackTrace();
		}
	
	
	return new ResponseEntity<String>("foi", HttpStatus.ACCEPTED);
		}
		
	

@GetMapping("/contadeagua{id}")
public ResponseEntity<ContaAgua> obterContaAgua(@PathVariable long id) {
	List<ContaAgua> contasAgua = repositorio.findAll();
	ContaAgua contaAgua = selecionador.selecionar(contasAgua, id);
	if (contaAgua == null) {
		ResponseEntity<ContaAgua> resposta = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return resposta;
	} else {
		adicionadorLink.adicionarLink(contaAgua);
		ResponseEntity<ContaAgua> resposta = new ResponseEntity<ContaAgua>(contaAgua, HttpStatus.FOUND);
		return resposta;
	}
}





@PutMapping("/contadeagua/atualizar")
public ResponseEntity<?> atualizarContaAgua(@RequestBody ContaAgua atualizacao) {
	HttpStatus status = HttpStatus.CONFLICT;
	ContaAgua contaAgua = repositorio.getById(atualizacao.getId());
	if (contaAgua != null) {
		ContaAguaAtualizador atualizador = new ContaAguaAtualizador();
		atualizador.atualizar(contaAgua, atualizacao);
		repositorio.save(contaAgua);
		status = HttpStatus.OK;
	}
	return new ResponseEntity<>(status);
}

@DeleteMapping("/contasdeagua/excluir")
public ResponseEntity<?> excluirContaAgua(@RequestBody ContaAgua exclusao) {
	ContaAgua contaAgua = repositorio.getById(exclusao.getId());
	repositorio.delete(contaAgua);
	return new ResponseEntity<>(HttpStatus.OK);
}
}
