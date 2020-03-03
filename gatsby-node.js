const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath, ".md")


    const absolutePath = node.fileAbsolutePath;

    console.log("Type of " + typeof(absolutePath));
  
    const pathDirectory = path.dirname(absolutePath);

    console.log(`path dir: ${pathDirectory}`);

    let pathArray = pathDirectory.split(path.sep);
    let contentType = pathArray[pathArray.length-1]; // parent directory name will be the content type.

    console.log("Value of contentType-------------------------------------" + contentType);

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    createNodeField({
      node,
      name:"contentType",
      value:contentType,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const blogTemplate = path.resolve("./src/templates/blog-template.js")
  const projectTemplate = path.resolve("./src/templates/project-template.js")
  // const blogTemplate = path.resolve("./src/templates/project-template.js")
  

  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug,
              contentType,
            }
          }
        }
      }
    }
  `)


  

  res.data.allMdx.edges.forEach(edge => {

    // const absolutePath = edge.node.fileAbsolutePath;


    // console.log("Type of " + typeof(absolutePath));
  
    // const pathDirectory = path.dirname(absolutePath);

    // console.log(`path dir: ${pathDirectory}`);

    // let pathArray = pathDirectory.split(path.sep);
    // let contentType = pathArray[pathArray.length-1]; // parent directory name will be the content type.

    let contentType = edge.node.fields.contentType;

   

    if(contentType==="posts"){
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
    }

    else if(contentType==="projects"){
      createPage({
        component: projectTemplate,
        path: `/projects/${edge.node.fields.slug}`,
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
