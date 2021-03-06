package com.digisolu.tecsus1.controles;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
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
		List<ContaEnergia> contasEnergia = repositorio.findAll();
		if (contasEnergia.isEmpty()) {
			ResponseEntity<List<ContaEnergia>> resposta = new ResponseEntity<>(contasEnergia, HttpStatus.NOT_FOUND);
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

	@PostMapping(value = "/contadeenergia/geral", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<?> cadastrarEnergia(@RequestPart("contaEnergia") ContaEnergia contaEnergia,
			@RequestPart("file") MultipartFile arquivoEnviado) {

		try {

			contaEnergia.setTipo(arquivoEnviado.getContentType());
			contaEnergia.setArquivo(arquivoEnviado.getBytes());
			repositorio.save(contaEnergia);

		} catch (IOException e) {

			e.printStackTrace();
		}

		return new ResponseEntity<String>("foi", HttpStatus.ACCEPTED);
	}

	@GetMapping("/download/contadeenergia/{id}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable long id) {
		ContaEnergia contaEnergia = repositorio.findById(id).get();
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contaEnergia.getTipo()))
				.body(new ByteArrayResource(contaEnergia.getArquivo()));
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

	@GetMapping("/contasdocontrato/energia/{contaenergia_contrato_id}")
	public ResponseEntity<List<ContaEnergia>> findContasDoContrato(@PathVariable long contaenergia_contrato_id) {
		List<ContaEnergia> contasEnergia = repositorio.findAll();
		List<ContaEnergia> contas_do_contrato = new ArrayList<ContaEnergia>();
		for (ContaEnergia conta : contasEnergia) {
			if (contaenergia_contrato_id == conta.getContaenergia_contrato_id().getId()) {
				contas_do_contrato.add(conta);
			}
		}
		if (contas_do_contrato.isEmpty()) {
			return new ResponseEntity<List<ContaEnergia>>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<List<ContaEnergia>>(contas_do_contrato, HttpStatus.OK);
	}

	@GetMapping("/relatorioenergia")
	public ResponseEntity<List<ContaEnergia>> findAllGroupByContratoOrderByEmissao() {
		List<ContaEnergia> relatorio = repositorio.findAllGroupByContratoOrderByEmissao();
		if (relatorio.isEmpty()) {
			return new ResponseEntity<List<ContaEnergia>>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<List<ContaEnergia>>(relatorio, HttpStatus.OK);
	}

}
