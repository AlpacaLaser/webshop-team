using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Webshop.API.Models;

public class Product
{
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }

  [Required]
  public string Name { get; set; } = string.Empty;
  [Required]
  public string Description { get; set; } = string.Empty;
  [Required]
  [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0.")]
  public decimal Price { get; set; }
  [Required]
  public string Category { get; set; } = string.Empty;
  [Required]
  [Range(0, int.MaxValue, ErrorMessage = "Stock must be a non-negative integer.")]
  public int Stock { get; set; }
  [Required]
  [Url]
  public string ImageUrl { get; set; } = string.Empty;
}
