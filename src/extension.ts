import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("phial.showGraph", () => {
      vscode.window.showInformationMessage("Phial: graph view coming soon.");
    }),
  );
}

export function deactivate() {}
