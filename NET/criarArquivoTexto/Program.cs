using System;
using System.IO;

public class EscreverArquivo
{
    public static void EscreverEmArquivo()
    {
        // Caminho do arquivo
        string caminho = "arquivo.txt";
        
        // Cria ou sobrescreve o arquivo com o StreamWriter
        using (StreamWriter escritor = new StreamWriter(caminho, append: true)) // append: true para adicionar ao arquivo existente
        {
            // Escrevendo algumas linhas no arquivo
            escritor.WriteLine("1 - Primeira linha do arquivo.");
            escritor.WriteLine("2 - Segunda linha do arquivo.");
            escritor.WriteLine("3 - Terceira linha do arquivo.");
        }
        
        Console.WriteLine("Texto escrito no arquivo com sucesso!");
    }
}

public class Program
{
    public static void Main()
    {
        EscreverArquivo.EscreverEmArquivo();
    }
}