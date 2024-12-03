using gerenciadorDeLivros;

class Program
{
    static void Main(string[] args)
    {
        // Criando um objeto da classe Livro
        var livro = new Livro("O Alquimista", "Paulo Coelho", 1988);

        // Exibindo os detalhes do livro
        livro.ExibirDetalhes();
    }
}