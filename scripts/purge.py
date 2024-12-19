import re
from pathlib import Path

globals = set()
types = set()
natives = set()
functions = set()

scripts = Path("scripts")
jsons = Path("1.27.0")

for path in [scripts / "common.j", scripts / "blizzard.j"]:
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


for path in (jsons / "globals").glob("*.json"):
    if path.stem not in globals:
        path.unlink()
        print(f"Deleted {path.stem}")
for path in (jsons / "types").glob("*.json"):
    if path.stem not in types:
        path.unlink()
        print(f"Deleted {path.stem}")
for path in (jsons / "natives").glob("*.json"):
    if path.stem not in natives:
        path.unlink()
        print(f"Deleted {path.stem}")
for path in (jsons / "functions").glob("*.json"):
    if path.stem not in functions:
        path.unlink()
        print(f"Deleted {path.stem}")
