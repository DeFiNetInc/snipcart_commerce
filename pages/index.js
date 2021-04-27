import Head from "next/head";
import styles from "../styles/Home.module.css";
import Product from '../components/Product'
import { getAllProducts } from "../lib/graphcms"
export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeFiNet</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DeFiNet Store</h1>

        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <strong>Cart:</strong>{" "}
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
          {products.map((product, i) => {
            return (
              <Product product={product} key={"product_" + i} />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
        />
        <div
          hidden
          id="snipcart"
          data-api-key="MzYyMTBhOTQtMTcwZS00ODlkLWJkOGMtOGQ0NzU0MDA1ZTEwNjM3NTQ4Nzg0MTMxMTU3NDA5"
          data-api-key-test="NzU5YzE4NGYtM2Y1OS00NmJmLTk1MDYtOWZlOTQwZjNjZmIxNjM3NTQ4Nzg0MTMxMTU3NDA5"
          data-config-modal-style="side"
        />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const products = await getAllProducts()
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}
