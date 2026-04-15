using Microsoft.AspNetCore.Mvc;
using Webshop.API.Models;
using Webshop.API.Services;

namespace Webshop.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
  private readonly ProductService _productService;

  public ProductController(ProductService productService)
  {
    _productService = productService;
  }

  [HttpGet]
  public async Task<List<Product>> GetAll() =>
      await _productService.GetAllAsync();

  [HttpGet("{id}")]
  public async Task<ActionResult<Product>> GetById(string id)
  {
    var product = await _productService.GetByIdAsync(id);
    return product is null ? NotFound() : Ok(product);
  }
}
