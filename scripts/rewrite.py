import json
import re
from pathlib import Path

globals = {}
natives = {}
functions = {}

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
            t = match.group(2).strip()
            v = match.group(4).strip()
            if t in { "real", "integer" }:
                globals[v] = t

        # match all "native          SetUnitLookAt       takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing"
        for match in re.finditer(r"native\s+(\w+)\s+takes\s+(.*?)\s+returns\s+(\w+)\s*\n", text):
            name, args, ret = match.groups()
            natives[name] = {}

            if args == "nothing":
                continue
            for i, arg in enumerate(args.split(",")):
                t, v = arg.strip().split()
                if t in { "real", "integer" }:
                    natives[name][i] = t

        for match in re.finditer(r"function\s+(\w+)\s+takes\s+(.*?)\s+returns\s+(\w+)\s*\n", text):
            name, args, ret = match.groups()
            functions[name] = {}

            if args == "nothing":
                continue
            for i, arg in enumerate(args.split(",")):
                t, v = arg.strip().split()
                if t in { "real", "integer" }:
                    functions[name][i] = t

with (scripts / "natives.json").open("w") as f:
    json.dump(natives, f, indent=2)
with (scripts / "natives.json").open("w") as f:
    json.dump(natives, f, indent=2)
with (scripts / "functions.json").open("w") as f:
    json.dump(functions, f, indent=2)

for path in (jsons / "globals").glob("*.json"):
    with path.open() as f:
        data = json.load(f)
        t = globals.get(path.stem)
        if t is None:
            print(f"missing {path.stem}")
        data["type"] = t
    with path.open("w") as f:
        json.dump(data, f, indent=2)
for path in (jsons / "natives").glob("*.json"):
    with path.open() as f:
        data = json.load(f)
        native = natives.get(path.stem)
        if native is None:
            print(f"missing {path.stem}")
        for i, t in native.items():
            data["takes"][i]["type"] = t
    with path.open("w") as f:
        json.dump(data, f, indent=2)
for path in (jsons / "functions").glob("*.json"):
    with path.open() as f:
        data = json.load(f)
        function = functions.get(path.stem)
        if function is None:
            print(f"missing {path.stem}")
        for i, t in function.items():
            data["takes"][i]["type"] = t
    with path.open("w") as f:
        json.dump(data, f, indent=2)
