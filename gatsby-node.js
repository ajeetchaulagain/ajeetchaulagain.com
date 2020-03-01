const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const blogTemplate = path.resolve(".src/templates/blog-page.js")

  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug,
            }
          }
        }
      }
    }
  `)


  

  res.data.allMdx.edges.forEach(edge => {

    const absolutePath = edge.node.fileAbsolutePath;

  
    const pathDirectory = path.dirname(absolutePath);
    console.log(`path dir: ${pathDirectory}`);

    let pathArray = pathDirectory.split(path.sep);
    let contentType = pathArray[pathArray.length-1];

    if(contentType==="projects"){
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
    }

    else{
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
    }

  })



  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages
}
