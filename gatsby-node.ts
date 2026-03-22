import path from 'path';

export const onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
    },
  });
};

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const contentFilePath = node.internal.contentFilePath;
    // Support both .md and .mdx extensions
    const slug = path.basename(contentFilePath).replace(/\.mdx?$/, '');
    const pathDirectory = path.dirname(contentFilePath);
    const pathArray = pathDirectory.split(path.sep);
    const contentType = pathArray[pathArray.length - 1]; // parent directory name will be the content type.

    const wordCount = String(node.body ?? '').split(/\s+/).filter(Boolean).length;
    const timeToRead = Math.max(1, Math.ceil(wordCount / 200));

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

    createNodeField({
      node,
      name: 'timeToRead',
      value: timeToRead,
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
        sort: { frontmatter: { date: ASC } }
      ) {
        edges {
          node {
            internal {
              contentFilePath
            }
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
            internal {
              contentFilePath
            }
            fields {
              slug
              contentType
            }
          }
        }
      }
    }
  `);

  if (postOnlyResult.errors) {
    throw postOnlyResult.errors[0];
  }
  if (projectOnlyResult.errors) {
    throw projectOnlyResult.errors[0];
  }

  const posts = postOnlyResult.data.allMdx.edges;
  posts.forEach((edge, index) => {
    createPage({
      component: `${blogTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
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
      component: `${projectTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
