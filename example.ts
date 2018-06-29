let src = `class foo definition.
endclass.

class foo
implementaiton.
endclass.

CLASS bar DEFINITION
FOR TESTING.

ENDCLASS.
interface blah definition.
endinterface.

CLASS bar IMPLEMENTATION.
ENDCLASS.

interface hbal definition.
endinterface.
`;

let classRx = /(?:CLASS|INTERFACE)\s+(\w+)\s+[^\.]*\s*DEFINITION\s*[^\.]*\./gi;
let result;
let types = new Array();
while ((result = classRx.exec(src)) !== null) {
    const cls = result[1];
    types.push(cls);
}

function hashCodeOf(input: string): number {
    let hash = 0;
    if (input.length == 0) return hash;
    for (let i = 0; i < input.length; ++i) {
        const char = input.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}



function nextMinstdRandFor(seed: number): number {
  const modulus = 2147483647;
  const product = 48271 * seed;
  return (product % modulus) / modulus;
}

console.log("Hash codes");
let typesCount = types.length;
for (let atIndex = 0; atIndex < typesCount; ++atIndex) {
    const typeName = types[atIndex];
    const typeHashCode = hashCodeOf(typeName);
    console.log(typeName + ": " + typeHashCode + " - " + nextMinstdRandFor(typeHashCode));
}

function randomStringOfLength(seed: number, requiredLength: number): string {
  const allowedLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let currentLength = 0; currentLength < requiredLength; ++currentLength) {
        
  }
}

