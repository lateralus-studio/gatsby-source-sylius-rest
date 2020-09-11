import { NodeInput } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { ComposeObjectTypeConfig } from 'graphql-compose';

export interface BaseImageNode {
  path: string;
  code: string;
  file: FileSystemNode;
  productSlug: string;
}

export type ImageNode = BaseImageNode & NodeInput;

export const imageSchema: ComposeObjectTypeConfig<any, any> = {
  name: 'SyliusImage',
  fields: {
    path: 'String!',
    code: 'String!',
    file: 'File!',
    productSlug: 'String',
  },
  interfaces: [
    'Node',
  ],
  extensions: {
    infer: false,
  },
};
