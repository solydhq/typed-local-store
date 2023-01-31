/**
 * Rough script to convert to a deno lib
 * Inspired by: https://github.com/edgedb/edgedb-js/blob/686d219ea2c0e671fbb6213e902b161c5830330e/tools/compileForDeno.ts
*/

import ts from 'typescript';
import fs from 'fs';
import walk from 'klaw';
import { basename, join } from 'path';

const sourceDir = join(__dirname, '../src');
const distDir = join(__dirname, '../deno');

const donoify = async () => {
  for await (const entry of walk(sourceDir)) {
    const sourcePath = entry.path;

    if (!fs.lstatSync(sourcePath).isDirectory()) {
      rewriteImportsAndExports(sourcePath);
    }
  }
};

const rewriteImportsAndExports = (sourcePath: string) => {
  const file = fs.readFileSync(sourcePath, 'utf8');
  const distPath = sourcePath.replace(sourceDir, distDir).replace('index.ts', 'mod.ts');
  const rewrittenFile: string[] = [];
  let cursor = 0;

  const parsedSource = ts.createSourceFile(
    basename(sourcePath),
    file,
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );

  parsedSource.forEachChild((node: any) => {
    if (
      (node.kind === ts.SyntaxKind.ImportDeclaration ||
        node.kind === ts.SyntaxKind.ExportDeclaration) &&
      node.moduleSpecifier
    ) {
      const pos = node.moduleSpecifier.pos + 2;
      const end = node.moduleSpecifier.end - 1;
      const importPath = file.slice(pos, end);
  
      rewrittenFile.push(file.slice(cursor, pos));
      cursor = end;
  
      rewrittenFile.push(`${importPath}.ts`);
    }
  });

  rewrittenFile.push(file.slice(cursor));

  fs.writeFileSync(distPath, rewrittenFile.join(''));
}

donoify();