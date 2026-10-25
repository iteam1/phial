# Tech Stack

## Runtimes

- Bun https://bun.sh/docs: package manager, bundler and test runner (dev tooling only).
- Node: the VS Code extension host runs the extension on Node (Node 20 for VS Code 1.90), so extension code must not use Bun-only APIs.
- VS Code Extension API https://code.visualstudio.com/api: commands, webview panel, editor navigation, workspace storage.

## Language and frameworks

- TypeScript: strict mode, for both the extension and the webview.

- Lint: Biome https://biomejs.dev (lint + format in one tool, fast with Bun).

- Test: `bun test` for pure logic (graph building, store, parsing agent output); `@vscode/test-electron` for integration tests inside VS Code.

- Data validation: Zod https://zod.dev, to validate the nodes and edges the AI agent returns before saving them.

- Graph rendering: Cytoscape.js https://js.cytoscape.org, with `cytoscape-fcose` for layout, inside a VS Code webview.

## Analysis

- AI agent: an agent coding CLI run headless from the extension, returning nodes and edges as JSON.

- Future: AST and LSP tools the agent can use for exact edges (definitions, references, calls).
  - AST: tree-sitter https://tree-sitter.github.io/tree-sitter/
  - LSP: Language Server Protocol https://microsoft.github.io/language-server-protocol/
  - LSP in VS Code: built-in commands like `vscode.executeDefinitionProvider` and `vscode.executeReferenceProvider` https://code.visualstudio.com/api/references/commands

## Storage

- Local store in dot-folder

## Build and packaging

- Build: `bun build`, one bundle for the extension (`--target node --format cjs --external vscode`) and one for the webview (`--target browser`).

- Package: `vsce` https://github.com/microsoft/vscode-vsce, to build the `.vsix`.
