import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';
import { z } from 'zod';

const API_URL = process.env.API_URL || 'http://backend:5151/api/product';

const server = new McpServer({
  name: 'webshop-mcp',
  version: '1.0.0'
});

//HELPER FUNCTIONS:
async function fetchProducts() {
  console.error("Calling API:", API_URL);

  const response = await axios.get(API_URL, {
    timeout: 5000
  });

  if (!Array.isArray(response.data)) {
    throw new Error("API response is not an array");
  }

  return response.data;
}

function errorResponse(err: unknown) {
  const message = err instanceof Error ? err.message : String(err);

  console.error("Tool error:", message);

  return {
    content: [{ type: 'text' as const, text: message }],
    isError: true
  };
}

async function fetchProducts() {
  console.error("Calling API:", API_URL);

  const response = await axios.get(API_URL, {
    timeout: 5000
  });

  if (!Array.isArray(response.data)) {
    throw new Error("API response is not an array");
  }

  return response.data;
}

function jsonResponse(data: unknown) {
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(data, null, 2)
      }
    ]
  };
}



//COMMANDS:
server.tool(
  'get_products',
  'Lekéri az összes terméket a webshopból',
  {},
  async () => {
    try {
      const products = await fetchProducts();
      const validProducts = products.filter(p => p.name && p.category);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(validProducts, null, 2)
          }
        ]
      };
    } catch (err) {
      return errorResponse(err);
    }
  }
);

server.tool(
  'search_products',
  'Termékek keresése név alapján',
  {
    query: z.string().describe('Keresési kifejezés')
  },
  async ({ query }) => {
    try {
      const products = await fetchProducts();

      const filtered = products.filter(p =>
        (p.name ?? '').toLowerCase().includes(query.toLowerCase())
      );

      return jsonResponse(filtered);
    } catch (err) {
      return errorResponse(err);
    }
  }
);

server.tool(
  'get_category_stats',
  'Statisztikák kategóriánként',
  {},
  async () => {
    try {
      const products = await fetchProducts();
      const stats: Record<string, number> = {};

      for (const p of products) {
        const category = (p.category ?? '').trim() || 'Ismeretlen';
        stats[category] = (stats[category] || 0) + 1;
      }
      return jsonResponse(stats);
    } catch (err) {
      return errorResponse(err);
    }
  }
);

server.tool(
  'get_low_stock',
  'Alacsony készletű termékek listája',
  {
    threshold: z.number().describe('Készlet limit').default(5)
  },
  async ({ threshold }) => {
    try {
      const products = await fetchProducts();

      const lowStock = products.filter(p => {
        const stock = Number(p.stock ?? 0);
		if (isNaN(stock)) return false;
		
        return stock <= threshold;
      });

      return jsonResponse(lowStock);
    } catch (err) {
      return errorResponse(err);
    }
  }
);


async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Webshop MCP Server started!');
}

main().catch(console.error);
