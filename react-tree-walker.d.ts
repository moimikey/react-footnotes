import treeWalker from "react-tree-walker";
declare const reactTreeWalker = typeof treeWalker;
declare module "react-tree-walker" {
  export = reactTreeWalker;
}
