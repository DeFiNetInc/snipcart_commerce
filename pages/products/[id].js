import { getAllProductsWithSlug} from "../../lib/graphcms"
export default function ProductDetails({ product }) {
    console.log(product)
    return (
    <div>
        This is the detailed product component.
    </div>
    );
}


export async function getStaticProps(context) {
    return {
      props: {
          product: {}    
          
      }, // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    const products = await getAllProductsWithSlug()
    return {
      paths: products.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: true,
    }
  }