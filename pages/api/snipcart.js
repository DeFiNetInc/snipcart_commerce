// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    if (req.method === "POST") {
        console.log(req)
      } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
      }
  }
  