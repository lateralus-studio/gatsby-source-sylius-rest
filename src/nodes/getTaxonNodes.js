"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTaxonNodes(taxons, locale, createNodeId, createContentDigest, parent) {
    return taxons.reduce((nodes, taxon) => {
        const flatNodes = getFlattenedTaxonNode(taxon, locale, createNodeId, createContentDigest, parent);
        return [
            ...nodes,
            ...flatNodes,
        ];
    }, []);
}
exports.getTaxonNodes = getTaxonNodes;
function getFlattenedTaxonNode(taxon, locale, createNodeId, createContentDigest, parent) {
    const content = JSON.stringify(taxon);
    const id = createNodeId(`taxon-${locale}-${taxon.code}`);
    const childNodes = getTaxonNodes(taxon.children, locale, createNodeId, createContentDigest, id);
    const children = childNodes
        .filter((node) => node.parent === id)
        .map((node) => node.id);
    return [
        {
            children,
            code: taxon.code,
            description: taxon.description,
            id,
            // @todo
            // images: taxon.images || [],
            images: [],
            internal: {
                type: 'SyliusTaxon',
                content,
                contentDigest: createContentDigest(content),
            },
            locale,
            name: taxon.name,
            parent,
            position: taxon.position,
            slug: taxon.slug,
        },
        ...childNodes,
    ];
}
//# sourceMappingURL=getTaxonNodes.js.map