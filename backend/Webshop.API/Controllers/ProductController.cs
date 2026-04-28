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

  [HttpPost]
  public async Task<ActionResult<Product>> Create(Product product)
  {
    await _productService.CreateAsync(product);
    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> Update(string id, Product product)
  {
    var existingProduct = await _productService.GetByIdAsync(id);
    if (existingProduct is null)
    {
      return NotFound();
    }

    product.Id = id;
    await _productService.UpdateAsync(id, product);

    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(string id)
  {
    var existingProduct = await _productService.GetByIdAsync(id);
    if (existingProduct is null)
    {
      return NotFound();
    }

    await _productService.DeleteAsync(id);

    return NoContent();
  }
}
