namespace gerenciadorDeLivros;

public class Livro
{
    // Propriedades
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public int AnoPublicacao { get; set; }

    // Construtor
    public Livro(string titulo, string autor, int anoPublicacao)
    {
        Titulo = titulo;
        Autor = autor;
        AnoPublicacao = anoPublicacao;
    }

    // Método
    public void ExibirDetalhes()
    {
        Console.WriteLine("\n-------------- Sistema de Gerenciamento de Livros -------------------\n");
       
        Console.WriteLine($"Título: {Titulo}");
        Console.WriteLine($"Autor: {Autor}");
        Console.WriteLine($"Ano de Publicação: {AnoPublicacao}");

        Console.WriteLine("");

        
    }
}