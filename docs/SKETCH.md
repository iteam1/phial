# Sketch

## Some thoughts

- I think one giant code-graph is NOT practical: it gets too big to read and too slow to build. Small, focused sub-graphs around what I'm working on are more useful.

- Some graph tools using AST like tree-sitter only see syntax, so they miss real links (types, overloads, imports across files). LSP gives more accurate edges.

- I mean a code graph is not enough. Next to it, or before it, there must be a doc graph: the specs, designs and notes that explain why the code exists.

- Meaning I think there are many layers for building a comprehensive view: code layer, doc layer, and the links between them. Each graph can be explored on its own or together.

## Features

- Ego Graph: a focused view of one node and its direct neighbors.

- Multi-hop: expand from the center hop by hop, until leaf nodes.

- Code + Docs: one graph mixing code edges (calls, references, imports) and doc edges (links, headings).

- Local Store: cache nodes and edges per file version on disk, so reopening the graph is instant and works offline.

- Not a giant graph, but able to handle multiple sub-graphs, and we can perform operations like create, update, delete, merge and link sub-graphs together.

- Click to Navigate: click a node to jump to its source in the editor.
