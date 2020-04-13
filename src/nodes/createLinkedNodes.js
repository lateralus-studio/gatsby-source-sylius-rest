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
const getPackageName_1 = require("../utils/getPackageName");
function createLinkedNodes(nodes, createNode, createParentChildLink) {
    return __awaiter(this, void 0, void 0, function* () {
        nodes.forEach((node) => __awaiter(this, void 0, void 0, function* () {
            yield createNode(node);
        }));
        nodes.forEach((parent) => {
            if (!parent.children) {
                return;
            }
            const childNodes = parent.children
                .map((id) => {
                return nodes.find((childNode) => childNode.id === id);
            })
                .filter((childNode) => !!childNode);
            childNodes.forEach((child) => __awaiter(this, void 0, void 0, function* () {
                if (!parent.parent || !child.parent) {
                    return;
                }
                // @todo: remove nodeInputToNode when https://github.com/gatsbyjs/gatsby/issues/19993 will be fixed
                yield createParentChildLink({
                    parent: nodeInputToNode(parent),
                    child: nodeInputToNode(child),
                });
            }));
        });
    });
}
exports.createLinkedNodes = createLinkedNodes;
function nodeInputToNode(nodeInput) {
    return Object.assign(Object.assign({}, nodeInput), { parent: nodeInput.parent || '', children: nodeInput.children || [], internal: Object.assign(Object.assign({}, nodeInput.internal), { owner: nodeInput.owner || getPackageName_1.getPackageName() }) });
}
//# sourceMappingURL=createLinkedNodes.js.map