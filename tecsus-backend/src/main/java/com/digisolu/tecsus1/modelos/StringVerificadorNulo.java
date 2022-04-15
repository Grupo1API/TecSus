package com.digisolu.tecsus1.modelos;

public class StringVerificadorNulo {
	
	public boolean verificar(String dado) {
		boolean nulo = true;
		if (!(dado == null)) {
			if(!dado.isBlank()) {
				nulo = false;
			}
		}
		return nulo;
	}

}
