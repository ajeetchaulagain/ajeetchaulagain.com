import path from 'path';
import readingTime from 'reading-time';

export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MdxFields {
      slug: String
      contentType: String
      timeToRead: Int
    }

    extend type Mdx {
      fields: MdxFields
      timeToRead: Int
    }
  `);
};

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
    // In Gatsby v5, use node.internal.contentFilePath for the file path
    const fileAbsolutePath = node.fileAbsolutePath || node.internal.contentFilePath;

    if (!fileAbsolutePath) {
      console.warn('No file path found for MDX node', node.id);
      return;
    }

    const slug = path.basename(fileAbsolutePath, '.md');

    console.log('Type of ' + typeof fileAbsolutePath);

    const pathDirectory = path.dirname(fileAbsolutePath);

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

    // Calculate reading time
    const time = readingTime(node.body);
    const timeToRead = Math.ceil(time.minutes);

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
        sort: {frontmatter: {date: ASC}}
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
