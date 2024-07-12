export function validarCPF(inputCPF) {
  var cpf = inputCPF.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11) return false; // Verifica se possui 11 dígitos

  // Calcula o primeiro dígito verificador
  var soma = 0;
  for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  var resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (var j = 0; j < 10; j++) {
      soma += parseInt(cpf.charAt(j)) * (11 - j);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true; // CPF válido
}
