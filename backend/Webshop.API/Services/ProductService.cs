namespace Webshop.API.Services;

public class ProductService
{
  private readonly IMongoCollection<Product> _products;

  public ProductService(IConfiguration config)
  {
    var client = new MongoClient(config["MongoDB:ConnectionString"]);
    var database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    _products = database.GetCollection<Product>("products");
  }

  public async Task<List<Product>> GetAllAsync() =>
      await _products.Find(_ => true).ToListAsync();

  public async Task<Product?> GetByIdAsync(string id) =>
      await _products.Find(p => p.Id == id).FirstOrDefaultAsync();

  public async Task CreateAsync(Product product) =>
      await _products.InsertOneAsync(product);

  public async Task UpdateAsync(string id, Product product)
  {
    product.Id = id;
    await _products.ReplaceOneAsync(p => p.Id == id, product);
  }

  public async Task DeleteAsync(string id) =>
      await _products.DeleteOneAsync(p => p.Id == id);
}
