import re
from pathlib import Path

globals = set()
natives = set()
functions = set()
types = set()

for path in [Path("common.j"), Path("blizzard.j")]:
    with path.open(encoding="utf-8") as f:
        text = f.read()

        # get text between "globals" and "endglobals"
        start = text.find("globals")
        end = text.find("endglobals", start)
        globals_text = text[start:end]

        # match all "constant? type array? varname"
        for match in re.finditer(r"\n\s+(constant\s+)?(\w+\s+)(array\s+)?(\w+)", globals_text):
            globals.add(match.group(4))

        # match all "type xx extends yy"
        for match in re.finditer(r"type\s+(\w+)\s+extends", text):
            types.add(match.group(1))

        # match all "native ConvertRace takes integer i returns race"
        for match in re.finditer(r"native\s+(\w+)\s+takes", text):
            natives.add(match.group(1))

        # match all "function ConvertRace takes integer i
        for match in re.finditer(r"function\s+(\w+)\s+takes", text):
            functions.add(match.group(1))


with Path("globals.txt").open("w", encoding="utf-8") as f:
    f.write("\n".join(sorted(globals)))
with Path("natives.txt").open("w", encoding="utf-8") as f:
    f.write("\n".join(sorted(natives)))
with Path("functions.txt").open("w", encoding="utf-8") as f:
    f.write("\n".join(sorted(functions)))
with Path("types.txt").open("w", encoding="utf-8") as f:
    f.write("\n".join(sorted(types)))
