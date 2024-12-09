using System.Text.Json;

var data = new { Name = "Alice", Age = 30 };
string json = JsonSerializer.Serialize(data);

File.WriteAllText("output.json", json);
