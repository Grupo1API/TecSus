package com.digisolu.tecsus1.modelos.construtor;

import com.digisolu.tecsus1.entidades.ContaAgua;

public class ConstrutorAdaptadorArquivo implements Construtor<ContaAgua> {
		private ContaAgua adaptador;

		public ConstrutorAdaptadorArquivo() {
			adaptador = new ContaAgua();
		}

		public void setId(Long id) {
			this.adaptador.setId(id);
		}

		public void setTamanho(String tamanho) {
			this.adaptador.setTamanho(tamanho);
		}

		public void setTipo(String tipo) {
			this.adaptador.setTipo(tipo);
		}

		@Override
		public void reiniciarObjeto() {
			adaptador = new ContaAgua();
		}

		@Override
		public ContaAgua obterObjeto() {
			return this.adaptador;
		}

	}
