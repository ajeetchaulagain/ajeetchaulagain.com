import path from 'path';

export const onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
    },
  });
};

export const onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    const absolutePath = node.fileAbsolutePath;

    console.log('Type of ' + typeof absolutePath);

    const pathDirectory = path.dirname(absolutePath);

    console.log(`path dir: ${pathDirectory}`);

    let pathArray = pathDirectory.split(path.sep);
    let contentType = pathArray[pathArray.length - 1]; // parent directory name will be the content type.

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'contentType',
      value: contentType,
    });
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('./src/templates/BlogPage/BlogPage.tsx');
  const projectTemplate = path.resolve(
    './src/templates/ProjectPage/ProjectPage.tsx'
  );

  const postOnlyResult = await graphql(`
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "posts" } } }
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
              contentType
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const projectOnlyResult = await graphql(`
    query {
      allMdx(filter: { fields: { contentType: { eq: "projects" } } }) {
        edges {
          node {
            fields {
              slug
              contentType
            }
          }
        }
      }
    }
  `);

  const posts = postOnlyResult.data.allMdx.edges;
  posts.forEach((edge, index) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });

  projectOnlyResult.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
