
using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.IO;
using System.Text.Json;

public class Pessoa
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public int Idade { get; set; }
}

public class ConversorCsvParaJson
{
    public static void ConverterCsvParaJson(string caminhoCsv, string caminhoJson)
    {
        // Abrir e ler o arquivo CSV
        using (var leitor = new StreamReader(caminhoCsv))
        using (var csv = new CsvReader(leitor, new CsvConfiguration(CultureInfo.InvariantCulture) { Delimiter = "," }))
        {
            // Ler o arquivo CSV e mapear para uma lista de objetos
            var registros = csv.GetRecords<Pessoa>().ToList();
            
            // Converter a lista de objetos para JSON
            var json = JsonSerializer.Serialize(registros, new JsonSerializerOptions { WriteIndented = true });

            // Escrever o JSON no arquivo
            File.WriteAllText(caminhoJson, json);

            Console.WriteLine($"Conversão concluída! O arquivo JSON foi salvo em: {caminhoJson}");
        }
    }
}

// Exemplo de uso
public class Program
{
    public static void Main()
    {
        string caminhoCsv = "dados.csv";
        string caminhoJson = "dados.json";
        
        ConversorCsvParaJson.ConverterCsvParaJson(caminhoCsv, caminhoJson);
    }
}