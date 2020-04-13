"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDefaultOptions_1 = require("./options/getDefaultOptions");
const getPagesDefinitions_1 = require("./pagesDefinitions/getPagesDefinitions");
const reportDebug_1 = require("./utils/reportDebug");
function createPages({ actions, graphql, reporter, }, pluginOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const { createPage } = actions;
        const options = getDefaultOptions_1.getDefaultOptions(pluginOptions);
        reportDebug_1.reportDebug(reporter, options, 'createPages - init');
        const { data } = yield graphql(`
    query {
      allSyliusTaxon {
        nodes {
          slug
          name
          id
          locale
          position
          description
          code
        }
      }
      allSyliusProduct {
        nodes {
          id
          description
          code
          channelCode
          averageRating
          metaDescription
          metaKeywords
          name
          shortDescription
          slug
          locale
          taxons {
            main
            others
          }
          variants {
            axis
            code
            nameAxis
            originalPrice {
              currency
              current
            }
            price {
              currency
              current
            }
          }
        }
      }
    }
  `);
        if (!data) {
            reportDebug_1.reportDebug(reporter, options, 'createPages - no data, pages are not created');
            return;
        }
        const { allSyliusProduct: { nodes: products }, allSyliusTaxon: { nodes: taxons }, } = data;
        reportDebug_1.reportDebug(reporter, options, 'createPages - get pages definitions');
        reportDebug_1.reportDebug(reporter, options, `createPages - ${products.length} products`);
        reportDebug_1.reportDebug(reporter, options, `createPages - ${taxons.length} taxons`);
        const pagesDefinitions = getPagesDefinitions_1.getPagesDefinitions(options.pages, {
            products,
            taxons,
        });
        pagesDefinitions.forEach((page) => createPage(page));
    });
}
exports.createPages = createPages;
//# sourceMappingURL=createPages.js.map