export interface RegisterParams {
  nome: string;
  email: string;
  senha: string;
  tipo: "admin" | "professor" | "aluno";
}
