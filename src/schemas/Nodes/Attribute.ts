import { NodeInput } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { ComposeObjectTypeConfig } from 'graphql-compose';

export interface BaseAttributeNode {
  code: string;
  name: string;
  value: string;
}

export type AttributeNode = BaseAttributeNode & NodeInput;

export const attributeSchema: ComposeObjectTypeConfig<any, any> = {
  name: 'SyliusAttribute',
  fields: {
    code: 'String',
    name: 'String',
    value: 'String',
  },
  interfaces: [
    'Node',
  ],
  extensions: {
    infer: false,
  },
};
