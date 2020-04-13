import { NodeInput } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { ComposeObjectTypeConfig } from 'graphql-compose';

export interface BaseImageNode {
  path: string;
  file: FileSystemNode
}

export type ImageNode = BaseImageNode & NodeInput;

export const imageSchema: ComposeObjectTypeConfig<any, any> = {
  name: 'SyliusImage',
  fields: {
    path: 'String!',
    file: 'File!',
  },
  interfaces: [
    'Node',
  ],
  extensions: {
    infer: false,
  },
};
