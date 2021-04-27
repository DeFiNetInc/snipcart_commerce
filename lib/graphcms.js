async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const json = await res.json()
  
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json.data
  }

  export async function getAllProducts() {
    const data = await fetchAPI(`
      {
        products {
            name
          slug
          description
          price
          images {
            url
          }
          
        }
      }
    `)
    return data.products
  }